import { useState } from "react";
import { useEffect } from "react";
import { fetcherWithAxios } from "./fetcherWithAxios"


// Axios is a third-party promise-based HTTP client that we can add to our project via package manager to make HTTP requests.

// It is a wrapper over the native Fetch API. It offers a comprehensive feature set, intuitive API, ease of use, and additional 
// functionality compared to Fetch.

// Let’s use Axios to fetch post data from our usual endpoint.


const FetchingPosts = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataForPosts = async () => {
            try{
                const postData = await fetcherWithAxios(
                    'https://jsonplaceholder.typicode.com/posts?_limit=8'
                );
                setData(postData);
                setError(null);
            }catch (err) {
                setError(err.message);
                setData(null);
            } finally{
                setLoading(false);
            }
        };
        fetchDataForPosts();
    }, []);
};

export default FetchingPosts;