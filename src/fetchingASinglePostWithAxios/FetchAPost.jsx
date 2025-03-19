import { useState, useEffect } from "react";
import { fetcherWithAxios } from "../fetchingPostsWithAxios/fetcherWithAxios";

const FetchAPost = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [postId, setPostId] = useState(1);

    useEffect(() => {
        const fetchSinglePost = async () => {
            try{
                const postData = await fetcherWithAxios(`https://jsonplaceholder.typicode.com/posts/${postId}`);
                setData(postData);
                setError(null);
            }catch (err){
                setError(err.message);
                setData(null);
            }finally{
                setLoading(false);
            }
        };
        fetchSinglePost();
    }, [postId])
}