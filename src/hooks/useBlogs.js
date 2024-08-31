import { useEffect, useState } from "react";
import axios from "axios";  

const useBlogs = () => {
    const blogAPI = 'http://3.7.81.243:3253/api/blog';
    const [blogData, setBlogData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const makeApiCall = async () => {
            setLoading(true); 
            try {
                const res = await axios.get(blogAPI);
                console.log(res);
                setBlogData(res.data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false); 
            }
        };

        makeApiCall();
    }, []);

    return { blogData, error, loading }; 
};

export default useBlogs;
