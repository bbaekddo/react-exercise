import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    const { id } = useParams();
    useEffect(() => {
        console.log(`Hello ${id} !!`);
    }, []);
    return (
        <h1>Detail</h1>
    );
}

export default Detail;