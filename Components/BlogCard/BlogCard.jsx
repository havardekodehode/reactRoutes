import useData from "../../hooks/useData";

export default function BlogCard() {
    
    const [dataSet] = useData;

    return (
        <>
         <ol>
            {dataSet.isLoading ? <h1>Loading...</h1> : dataSet.data}</ol>
        </>
    )
}