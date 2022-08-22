import { useEffect, useState } from "react";
import axios from 'axios'

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const { data: response_data } = await axios.get(url)
            setData(response_data);
            setLoading(false);
            setError(false);
        } catch (err) {
            setLoading(false)
            setError(err.message)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { error, loading, data }
}

export default useFetch;