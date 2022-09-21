import { Fragment } from "react";
import { PRODUCTS } from "../seeds";

import PriceList from "./PriceList";

function Exercice2() {
  return (
    <Fragment>
      <h1>Exercice 2</h1>
      <Result />
    </Fragment>
  );
}

function Result() {
  return (
    <Fragment>
      <PriceList product={PRODUCTS[0]} />
      <PriceList product={PRODUCTS[1]} />
    </Fragment>
  );
}

export default Exercice2;
