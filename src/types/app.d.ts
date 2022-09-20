export type Collection<T> = Record<number, T>;

interface Child {
  id: number;
  order: number;
  type: "product" | "category";
}

interface EntityType {
  type: "product" | "category";
  id: number;
  parentId: number | null;
  children: Child[];
}

interface CategoryEntity {
  id: number;
  parentId: number | null;
  type: "category";
  value: API.Category;
}

interface ProductEntity {
  id: number;
  parentId: number;
  type: "product";
  value: API.Product;
}

type CategoryAndProduct = (CategoryEntity | ProductEntity)[];

export as namespace APP;
