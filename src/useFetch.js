import React, { useState, useEffect } from 'react'

const useFetch = (url) => {

    //changed blogs to data so it can be reusable later
    const [data, setData] = useState (null);
    const [isLoading, setisLoading] = useState(true);
    const [error, setError] = useState(null)



    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, {signal:abortCont.signal}) //this will return a promise so i can then do
            .then(res => {
                console.log(res);
                if(!res.ok) {
                    throw Error('could not fetch the data. bad endpoint')
                }
                return res.json() //this passes a json into an JS object for us
            })
            .then((data)=> { //data could be named anything. nothing to do with the blog file
                console.log(data);
                setData(data);
                setisLoading(false);
                setError(null);
            })
            .catch(err => {
                // console.log(err.message);
                setError(err.message);
                setisLoading(false);
            })

            return() => abortCont.abort();
    }, [url]);
    
    return { data, isLoading, error}
}

export default useFetch;
