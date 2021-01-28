import React, { useState } from 'react'
import BlogList from './BlogList.jsx';

function Home() {

    const [blogs, setBlogs] = useState ([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        
        //this doesnt change the orginal data, only returns new filtered array.
        //if true, it remains in the array, if false it is removed
        const newBlogs = blogs.filter((blog => blog.id !== id));
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            {/* you can name blogs anything but then inside the curly is the actual PROP which has to be consistent with a variable name */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/> 
        </div>
    )
}

export default Home
