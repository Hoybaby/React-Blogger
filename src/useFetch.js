const useFetch = () => {
    useEffect(() => {
        fetch('http://localhost:8000/blogs') //this will return a promise so i can then do
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
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                setError(err.message);
                setisLoading(false);
            })
    }, []);
}