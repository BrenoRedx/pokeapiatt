import { BrowserRouter, Route } from "react-router-dom";
import LiPokemons from "./pages/LiPokemons";
import Status from "./pages/Status";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Status} />
    </BrowserRouter>
  );
};

export default Routes;
