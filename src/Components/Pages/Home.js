import React from 'react'

const Home = () => {
    return (
        <div className='container all-center'>
            <h1>JSONPlaceholder</h1>
            <h3>Fake Online REST API for Testing and Prototyping</h3>
            <h3><strong>Serving ~350M requests per month</strong></h3>
            <p className='mb-1'>Powered by JSON <a href='https://github.com/typicode/json-server'>Server</a> + <a href='https://github.com/typicode/lowdb'>LowDB</a></p>
            <h2 className='mb-2'>Intro</h2>
            <p>JSONPlaceholder is a free online REST API that you can use whenever you need
                 some fake data. It's great for tutorials, testing new libraries, sharing code examples, ...</p>
            <h2 className='mb-2'>Resources</h2>
            <div className="grid-2">
                <a href="https://jsonplaceholder.typicode.com/posts">/posts</a>
                <p>100 posts</p>
                <a href="https://jsonplaceholder.typicode.com/comments">/comments</a>
                <p>500 posts</p>
                <a href="https://jsonplaceholder.typicode.com/albums">/albums</a>
                <p>100 posts</p>
                <a href="https://jsonplaceholder.typicode.com/photos">/photos</a>
                <p>5000 photos</p>
                <a href="https://jsonplaceholder.typicode.com/todos">/todos</a>
                <p>200 todos</p>
                <a href="https://jsonplaceholder.typicode.com/users">/users</a>
                <p>10 users</p>
            </div>

        </div>
    )
}
export default Home;