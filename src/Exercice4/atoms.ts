import { atom } from "jotai";
import { atomFamily } from "jotai/utils";

export const ROOT_ENTITY_ID = Infinity;

export const categoriesAtom = atom<APP.Collection<API.Category>>({});
export const productsAtom = atom<APP.Collection<API.Product>>({});
export const entitiesAtom = atom<APP.Collection<APP.EntityType>>({});

const isRoot = (item: APP.CategoryEntity) => item.parentId === null;

const isSibling = (id: number) => (item: APP.CategoryEntity | APP.ProductEntity) =>
  item.parentId === id;

const makeChild = (item: APP.CategoryEntity | APP.ProductEntity) => ({
  id: item.id,
  type: item.type,
  order: item.value.order,
});

/**
 * Here is our chance to do expensive work and prepare the tree data structure.
 * We create an entity wrapper around each product and category.
 * We want a discriminator type attribute when we want to render an entity.
 * We also want to be able to sort the entities by their order attribute.
 * Root entities are always categories.
 */
export const setEntitiesAtom = atom(null, (_get, set, menu: API.Menu) => {
  const { products, categories } = menu;

  // Preparing key value pairs for each entity, we want O(1) complexity
  // when looking for entity by its id.
  const productMap = new Map(products.map((p) => [p.productId, p]));
  const categoryMap = new Map(categories.map((c) => [c.categoryId, c]));

  // Key value pairs for each entity id and its direct children
  const entities = new Map<number, APP.EntityType>();

  // Keeping track of the entity type...
  const categoryArray = menu.categories.map((category) => ({
    id: category.categoryId,
    parentId: category.parentId,
    type: "category" as const,
    value: category,
  }));

  const productArray = menu.products.map((product) => ({
    id: product.productId,
    parentId: product.categoryId,
    type: "product" as const,
    value: product,
  }));

  // ... when looking in the whole entities' array
  const entityArray: APP.CategoryAndProduct = [...categoryArray, ...productArray];

  // setting a virtual root category entity. Its parentId is set
  // to Infinity by design
  entities.set(ROOT_ENTITY_ID, {
    type: "category",
    id: ROOT_ENTITY_ID,
    parentId: ROOT_ENTITY_ID,
    children: categoryArray.filter(isRoot).map(makeChild),
  });

  // For each category setting all its children in the entities map
  categoryArray.forEach(({ id, parentId }) => {
    const children = entityArray.filter(isSibling(id)).map(makeChild);
    entities.set(id, { type: "category", id, parentId, children });
  });

  // Creating a collection for categories, products and entities
  // We want to benefit from O(1) complexity when looking for an entity
  set(entitiesAtom, Object.fromEntries(entities));
  set(categoriesAtom, Object.fromEntries(categoryMap));
  set(productsAtom, Object.fromEntries(productMap));
});

const ascendingOrder = (a: APP.Child, b: APP.Child) => a.order - b.order;

export const siblingsAtomFamily = atomFamily(
  (parentId: number | null) =>
    atom(
      (get) => {
        const id = parentId === null ? ROOT_ENTITY_ID : parentId;
        const entities = get(entitiesAtom)[id];
        if (!entities) return [];
        return entities.children.sort(ascendingOrder);
      },
      (get, set, children: APP.Child[]) => {
        const id = parentId === null ? ROOT_ENTITY_ID : parentId;
        const entities = get(entitiesAtom)[id];
        if (!entities) return;
        set(entitiesAtom, (e) => ({ ...e, [id]: { ...entities, children } }));
      },
    ),
  (a, b) => a === b,
);
