import { useState, useEffect } from "react";

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

export const PostRequest = () => {
    useEffect(() => {
        const fetchDataForPosts = async () => {
            try{
                const postsData = await postRequestWithAxios({
                    userId: 11,
                    id: 101,
                    title: 'New post title',
                    body: 'The post body content',
                });
                setData(postsData.data);
            }catch (err){
                setError(err.message);
                setData(null);
            }finally{
                setLoading(false);
            }
        };
        fetchDataForPosts();
    }, []);
}

const postRequestWithAxios = async (data) => {
    const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        }
    );
    return response.data;
};