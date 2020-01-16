import React from 'react'

const About = () => {
    return (
        <div className='all-center'>
            <div className="card">
                <h1>About</h1>
                <p className='m-1'>This app is meant to show connections among resources on <a href="jsonplaceholder.typicode.com">jsonplaceholder.typicode.com</a></p>
                <p className='m-1'>Author: Oleh Parshyn</p>
                <a className='btn btn-dark' href="https://github.com/iks-ice/">GitHub</a>
            </div>
        </div>
    )
}
export default About;