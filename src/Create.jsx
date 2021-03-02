import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import axios from 'axios';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] =useState('');
    const [author, setAuthor] = useState('mario');
    const [ isPending, setIsPending] = useState(false)

    const addBlog =() => {
        axios.post('https://localhost:3001/create', 
        {title: title,body: body,author: author})
        .then(()=> {
            console.log("success")
        })
    }

    //this is an object
    const history = useHistory();

    const handleSubmit =(e) => {
        e.preventDefault();

        const blog = {title, body, author};

        setIsPending(true);

        //second arguement is where we tack on the data but also define the type of request we sending.
        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            history.push('/')
        })

    
    }

    return (
        <div className="create">
            <h2>Add a New blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={ (e) => setTitle(e.target.value)}
                />
                <label>Blog Body: </label>
                <textarea 
                required
                onChange={ (e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Aurthor: </label>
                    <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    {!isPending && <button>Add Blog</button>} 
                    {isPending && <button disabled>Adding Blog...</button>}
                    <p>{title}</p>
                    <p>{body}</p>
                    <p>{author} </p>
            </form>
        </div>
        );
}
 
export default Create;