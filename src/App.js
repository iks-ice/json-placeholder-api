import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import Posts from './Components/List/Posts';
import Albums from './Components/List/Albums';
import Photos from './Components/List/Photos';
import Todos from './Components/List/Todos';
import Users from './Components/List/Users';
import './App.css';

const titles = {
    'posts': Posts,
    'albums': Albums,
    'photos': Photos,
    'todos': Todos,
    'users': Users
}

const App = () => {
    return (
        <BrowserRouter>
            <Navbar titles={Object.keys(titles)} />
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />

            {Object.values(titles).map((title, id) => <Route
                key={id}
                path={`/${Object.keys(titles)[id]}`}
                component={title} />)}
            {/* <Route path='/posts' component={Posts} />
            <Route path='/comments' component={Comments} />
            <Route path='/Albums' component={Albums} />
            <Route path='/Photos' component={Photos} />
            <Route path='/Todos' component={Todos} />
            <Route path='/Users' component={Users} /> */}
        </BrowserRouter>
    )
}
export default App;