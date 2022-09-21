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

const getFrenchPriceFormat = (price: DefinedPrice) => {
  const PRICE_DECIMAL = 2;
  const PRICE_CURRENCY = "€";
  const formated = price.value.toFixed(PRICE_DECIMAL).replace(".", ",");
  return { ...price, value: `${formated} ${PRICE_CURRENCY}` };
};

// retourner le bon prédicat
const isDefined = (price: Price): price is DefinedPrice => {
  return price.value !== null;
};

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
    .filter(isDefined)
    .map(getFrenchPriceFormat);
};

interface PriceProps {
  value: string;
  label: string | null;
}
function Price({ value, label }: PriceProps) {
  return (
    <ProductPriceContainer>
      {label && <PriceLabel>{label}</PriceLabel>}
      <PriceValue>{value}</PriceValue>
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
  return (
    <Fragment>
      {prices.map((price) => {
        return <Price value={price.value} label={price.label} key={price.id} />;
      })}
    </Fragment>
  );
}

export default PriceList;
