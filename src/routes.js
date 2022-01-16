import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonsList from "./views/Pokemons/list";
import Status from "./views/Status";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PokemonsList} />
        <Route path="/sobre/:id" component={Status} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
