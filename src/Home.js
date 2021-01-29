import React, { useState, useEffect } from 'react'
import BlogList from './BlogList.jsx';

function Home() {

    const [blogs, setBlogs] = useState (null);

    const [isLoading, setisLoading] = useState(true);


    const [name, setName] = useState('mario');

    // const handleDelete = (id) => {
        
    //     //this doesnt change the orginal data, only returns new filtered array.
    //     //if true, it remains in the array, if false it is removed
    //     const newBlogs = blogs.filter((blog => blog.id !== id));
    //     setBlogs(newBlogs);
    // }

    useEffect(() => {
        fetch('http://localhost:8000/blogss') //this will return a promise so i can then do
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('could not fetch the data. bad endpoint')
                }
                return res.json() //this passes a json into an JS object for us
            })
            .then((data)=> { //data could be named anything. nothing to do with the blog file
                console.log(data);
                setBlogs(data);
                setisLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="home">

            {isLoading && <div>Loading...</div>}
            {/* you can name blogs anything but then inside the curly is the actual PROP which has to be consistent with a variable name */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>} 
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    )
}

export default Home;
