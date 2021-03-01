import { useHistory, useParams} from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails =() => {

    // we name it ID because we nammed it that in app.js
    const{ id }= useParams();
    const { data:blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    //all fetches are async so a .then is good to have
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        
        <div className="blog-details">
            <h2>Blog Details - {id} </h2>
            {isLoading && <div>Loading...</div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    {/* this data is from our data segment in db.json */}
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete Blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;