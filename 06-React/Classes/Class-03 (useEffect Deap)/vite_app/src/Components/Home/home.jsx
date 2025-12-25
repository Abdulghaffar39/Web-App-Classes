import { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client';

export default function home() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return (

        <>

            <div>home</div>
            <h1>I've rendered {count} times!</h1>

        </>
    )

}
