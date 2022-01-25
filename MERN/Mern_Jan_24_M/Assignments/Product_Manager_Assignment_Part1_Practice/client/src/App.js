import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main";
import Detail from "./views/Details";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/details/:id">
          <Detail />
        </Route>
      </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;