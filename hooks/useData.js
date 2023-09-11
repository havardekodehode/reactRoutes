import { useState, useEffect } from "react"

export default function useData(endpoint) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const isLoading = (data || error) ? false : true
    useEffect(() => {
        fetch("http://localhost:5173/mockDatabase1.json")
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setData(data);
        })
        .catch((error) => setError(error))
    }, [endpoint])

    return {
        data,
        error,
        isLoading
    }

}
