import { Fragment } from "react";

import { CATEGORIES } from "../seeds";
import Category from "./Category";

function Exercice1() {
  return (
    <Fragment>
      <h1>Exercice 1</h1>
      <Result />
    </Fragment>
  );
}

function Result() {
  // afficher correctement les categories et leur sous catégorie
  return (
    <Category category={CATEGORIES[0]}>
      <Category category={CATEGORIES[1]}>
        <Category category={CATEGORIES[2]} />
      </Category>
    </Category>
  );
}

export default Exercice1;
