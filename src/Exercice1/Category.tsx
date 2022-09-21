import { useState } from "react";
import styled from "@emotion/styled";

import ToggleIndicator from "./ToggleIndicator";

interface Props {
  category: API.Category;
  children?: React.ReactNode;
}
function Category({ category, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CategoryContainer>
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <Description data-enabled={category.enabled}>{category.description}</Description>
        <ToggleIndicator isOpen={isOpen} />
      </Button>
      {isOpen && <Children>{children}</Children>}
    </CategoryContainer>
  );
}

const Description = styled("span")`
  &[data-enabled="false"] {
    opacity: 0.5;
  }
`;

const Button = styled("button")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.5em;
`;

const Children = styled("div")`
  display: flex;
  flex-direction: column;

  padding: 0.5em;
`;

const CategoryContainer = styled("div")`
  display: flex;
  flex-direction: column;

  border: 1px solid red;
`;

export default Category;
