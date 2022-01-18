import './App.css';
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Main from './components/Main';
import Display from './components/Display';



function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route path="/home">
                        <Main />
                    </Route>
                    <Route exact path="/:input">
                        <Display />
                    </Route>
                    <Route path="/:input/:textColor/:bgColor">
                        <Display />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;