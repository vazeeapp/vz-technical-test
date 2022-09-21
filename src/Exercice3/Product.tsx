import styled from "@emotion/styled";
import PriceList from "../Exercice2/PriceList";

interface ProductBodyProps {
  pictogramUrl: API.Product["pictogramUrl"];
  label: API.Product["label"];
}
function Label({ pictogramUrl, label }: ProductBodyProps) {
  return (
    <ProductLabelContainer>
      {/** Afficher le pictorgram s'il existe */}
      {/** Afficher le label */}
    </ProductLabelContainer>
  );
}

const ProductLabel = styled("div")``;

const ProductLabelContainer = styled("div")`
  display: flex;
  align-items: center;

  margin-bottom: 0.5em;
`;

interface Props {
  product: API.Product;
}
function Product({ product }: Props) {
  return (
    <ProductContainer>
      {/** Afficher le Label */}
      {/** Afficher la description */}
      {/** Afficher la liste de prix */}
    </ProductContainer>
  );
}

const Description = styled("div")``;

const Pictogram = styled("img")`
  width: 50px;
  height: 50px;
`;

const ProductContainer = styled("div")`
  display: flex;
  flex-direction: column;

  padding: 0.5em;

  border: 1px solid green;
`;

export default Product;
