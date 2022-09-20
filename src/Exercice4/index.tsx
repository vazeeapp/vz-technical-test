import { Fragment, useCallback, useEffect } from "react";
import { selectAtom } from "jotai/utils";

import Category from "../Exercice1/Category";
import Product from "../Exercice3/Product";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  categoriesAtom,
  setEntitiesAtom,
  productsAtom,
  ROOT_ENTITY_ID,
  siblingsAtomFamily,
} from "./atoms";

const ENDPOINT = "http://localhost:4000/v1/menu";

const makeObject = (response: Response) => response.json() as Promise<API.Menu>;

function useEntities() {
  // récupérer le setter de l'atom pour initialiser les entités

  useEffect(() => {
    // appeler fetch avec ENDPOINT, décoder la réponse json et initialiser les entités
    //
    // décommenter pour la ligne suivante (effet symétrique)
    // return () => setEntities({ categories: [], products: [], menuId: 0 });
  }, []);
}

function Exercice4() {
  // useEntities();

  return (
    <Fragment>
      <h1>Exercice 4</h1>
      <Entities parentId={ROOT_ENTITY_ID} />
    </Fragment>
  );
}

function Entities({ parentId }: { parentId: API.Category["parentId"] }) {
  const siblings = useAtomValue(siblingsAtomFamily(parentId));

  const renderSibling = useCallback(({ id, type }: APP.Child) => {
    if (type === "product") return <ProductEntity key={id} {...{ id }} />;

    return (
      <CategoryEntity key={id} {...{ id }}>
        <Entities parentId={id} />
      </CategoryEntity>
    );
  }, []);

  if (siblings.length === 0) return <span>Categorie vide</span>;

  return <Fragment>{siblings.map(renderSibling)}</Fragment>;
}

function selectCategory(id: API.Category["categoryId"]) {
  return (categories: APP.Collection<API.Category>) => categories[id];
}

interface CategoryEntityProps {
  id: API.Category["categoryId"];
  children: React.ReactNode;
}
function CategoryEntity({ id, children }: CategoryEntityProps) {
  const [category] = useAtom(selectAtom(categoriesAtom, selectCategory(id)));
  // afficher la catégorie et ses enfants
  return null;
}

function selectProduct(id: API.Category["categoryId"]) {
  return (products: APP.Collection<API.Product>) => products[id];
}

interface ProductEntityProps {
  id: API.Product["productId"];
}
function ProductEntity({ id }: ProductEntityProps) {
  const [product] = useAtom(selectAtom(productsAtom, selectProduct(id)));
  // afficher le produit
  return null;
}

export default Exercice4;
