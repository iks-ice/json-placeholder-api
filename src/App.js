import React from 'react';
import State from './Components/Context/State'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Users from './Components/Components/Users';
import User from './Components/Components/User';
import './App.css';

const titles = ['users'];
const App = () => {
    return (
        <State>
            <BrowserRouter>
                <Navbar titles={titles} />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/users' component={Users} />
                    <Route path='/users/:id' component={User} />
                </Switch>
            </BrowserRouter>
        </State>
    )
}
export default App;