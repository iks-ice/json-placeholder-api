import React from 'react';
import './App.css';
import { Post } from './Components/Post.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({ posts: json }));
    }
    render() {
        return this.state.posts.map((post, index) => (
            <Post key={index} props={post} />
        ));
    }
}

export default App;
