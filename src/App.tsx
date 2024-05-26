import Container from "./container/Container";

import { useFetchData } from "./services/hooks";
import { api } from "./constants";

import "./Global.css";

function App() {
  const response = useFetchData(api);
  return (
    <>
      <Container {...response} />
    </>
  );
}

export default App;
