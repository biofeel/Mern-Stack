import {BrowserRouter, Switch, Route} from "react-router-dom"
import Main from "./views/Main";
import UpdateAuthor from "./views/UpdateAuthor";
import CreateAuthor from "./views/CreateAuthor";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/update/:id">
          <UpdateAuthor />
        </Route>
        <Route exact path="/new">
          <CreateAuthor />
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