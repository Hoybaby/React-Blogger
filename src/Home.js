import React, { useState } from 'react'

function Home() {

    // let name = 'mario';
    const [name, setName] = useState('mario');

    const handleClick = () => {
        setName('luigi');
    }

    // const handleClickAgain = (name, e) => {
    //     console.log( "hello " + name, e.target);
    // }

    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={handleClick}>Click Me</button>
            {/* <button onClick={(e) => {handleClickAgain('mario', e)}}>Click me again</button> */}
        </div>
    )
}

export default Home
