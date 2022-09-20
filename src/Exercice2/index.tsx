import { Fragment } from "react";
import { PRODUCTS } from "../seeds";

import PriceList from "./PriceList";

function Exercice2() {
  return (
    <Fragment>
      <h1>Exercice 2</h1>
      {/* <Result /> */}
    </Fragment>
  );
}

function Result() {
  return <PriceList product={PRODUCTS[0]} />;
}

export default Exercice2;
