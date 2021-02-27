import React from 'react';
import {useState} from 'react';

const Create = () => {

    const [title, setTitle] = useState('');

    return (
        <div className="create">
            <h2>Add a New blog!</h2>
            <form>
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
                ></textarea>
                <label>Blog Aurthor: </label>
                    <select>
                        <option value="mario">mario</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button>Add Blog</button>
            </form>
        </div>
        );
}
 
export default Create;