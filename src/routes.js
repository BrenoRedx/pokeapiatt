import { BrowserRouter, Route } from "react-router-dom";
import LiPokemons from "./pages/LiPokemons";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LiPokemons} />
    </BrowserRouter>
  );
};

export default Routes;
