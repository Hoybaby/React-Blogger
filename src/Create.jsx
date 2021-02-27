import React from 'react';

const Create = () => {
    return (
        <div className="create">
            <h2>Add a New blog!</h2>
            <form>
                <label>Blog Title: </label>
                <input 
                type="text"
                required
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
            </form>
        </div>
        );
}
 
export default Create;