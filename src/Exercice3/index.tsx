import { Fragment } from "react";

import { PRODUCTS } from "../seeds";
import Product from "./Product";

function Exercice3() {
  return (
    <Fragment>
      <h1>Exercice 3</h1>
      <Product product={PRODUCTS[0]} />
    </Fragment>
  );
}

export default Exercice3;
