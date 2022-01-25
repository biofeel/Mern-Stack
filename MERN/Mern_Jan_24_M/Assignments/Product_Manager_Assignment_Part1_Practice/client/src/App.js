import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main";
import Detail from "./views/Details";
import Edit from "./views/Edit";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/details/:id">
          <Detail />
        </Route>
        <Route exact path="/edit/:id">
          <Edit />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        
      </Switch>
    </BrowserRouter>
</div>
  );
}

export default App;