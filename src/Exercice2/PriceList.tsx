import { Fragment } from "react";
import styled from "@emotion/styled";

interface Price {
  id: number;
  value: number | null;
  label: string | null;
}

interface DefinedPrice {
  id: number;
  value: number;
  label: string | null;
}

const getFrenchPriceFormat = (value: number) => {
  const PRICE_DECIMAL = 2;
  const PRICE_CURRENCY = "€";
  const formated = value.toFixed(PRICE_DECIMAL).replace(".", ",");
  return `${formated} ${PRICE_CURRENCY}`;
};

// retourner le bon prédicat
// const isDefined = (price: Price): price is DefinedPrice => {
// };

// le callback du filtre doit être remplacer par le bon typeguard (isDefined)
// le callback du map doit être remplacer par la bonne fonction (getFrenchPriceFormat)
// fonction identité à remplacer
const identity = <T,>(x: T): T => x;

export const usePrices = (product: API.Product) => {
  return [
    { id: 1, value: product.price1, label: product.price1Label },
    { id: 2, value: product.price2, label: product.price2Label },
    { id: 3, value: product.price3, label: product.price3Label },
    { id: 4, value: product.price4, label: product.price4Label },
    { id: 5, value: product.price5, label: product.price5Label },
  ]
    .filter(identity)
    .map(identity);
};

interface PriceProps {
  value: number;
  label: string | null;
}
function Price({ value, label }: PriceProps) {
  return (
    <ProductPriceContainer>
      {/** Afficher le lable s'il existe */}
      {/** Afficher le prix dans le bon format */}
    </ProductPriceContainer>
  );
}

const PriceValue = styled("div")`
  background: gray;
`;

const PriceLabel = styled("div")`
  margin-right: 0.5em;
`;

const ProductPriceContainer = styled("div")`
  display: flex;
`;

interface PriceListProps {
  product: API.Product;
}
export function PriceList({ product }: PriceListProps) {
  const prices = usePrices(product);
  return <Fragment>{/**  itérer sur les prix retourné par le hook */}</Fragment>;
}

export default PriceList;
