import { useEffect, useState } from "react";
import axios from "axios";  

const useFooter = () => {
    const footerAPI = 'http://3.7.81.243:3253/api/settings/fetch-frontend-details';
    const [footerData, setFooterData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const makeApiCall = async () => {
            setLoading(true); 
            try {
                const res = await axios.get(footerAPI);
                console.log(res);
                setFooterData(res.data);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false); 
            }
        };

        makeApiCall();
    }, []);

    return { footerData, error, loading }; 
};

export default useFooter;
