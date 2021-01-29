import React, { useState, useEffect } from 'react'
import BlogList from './BlogList.jsx';
import useFetch from './useFetch.js';

function Home() {

    // const handleDelete = (id) => {
        
    //     //this doesnt change the orginal data, only returns new filtered array.
    //     //if true, it remains in the array, if false it is removed
    //     const newBlogs = blogs.filter((blog => blog.id !== id));
    //     setBlogs(newBlogs);
    // }

    const { data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {/* you can name blogs anything but then inside the curly is the actual PROP which has to be consistent with a variable name */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>} 
            {/* <button onClick={() => setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
        </div>
    )
}

export default Home;
