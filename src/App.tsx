import styled from "@emotion/styled";

import Exercice1 from "./Exercice1";
import Exercice2 from "./Exercice2";
import Exercice3 from "./Exercice3";
import Exercice4 from "./Exercice4";

function App() {
  return (
    <AppContainer>
      <Exercice1 />
      <Exercice2 />
      <Exercice3 />
      <Exercice4 />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
