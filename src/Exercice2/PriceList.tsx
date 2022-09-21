import { Fragment } from "react";
import styled from "@emotion/styled";

import { usePrices } from "./usePrices";

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
