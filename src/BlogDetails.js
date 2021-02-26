import { useParams} from 'react-router-dom'
import useFetch from './useFetch';

const BlogDetails =() => {

    // we name it ID because we nammed it that in app.js
    const{id}= useParams();
    const {data, error, isLoading} = useFetch('http://localhost:8000/blogs/' +id);

    return (
        
        <div className="blog-details">
            <h2>Blog Details - {id} </h2>
        </div>
    );
}

export default BlogDetails;