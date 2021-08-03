import { BrowserRouter, Route, Switch } from "react-router-dom";
import LiPokemons from "./pages/LiPokemons";
import Status from "./pages/Status";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LiPokemons} />
        <Route path="/sobre/:id" component={Status} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
