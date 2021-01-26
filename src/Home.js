import React from 'react'

function Home() {

    const handleClick = (e) => {
        console.log("test works", e);
    }

    const handleClickAgain = (name, e) => {
        console.log( "hello " + name, e.target);
    }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e) => {handleClickAgain('mario', e)}}>Click me again</button>
        </div>
    )
}

export default Home
