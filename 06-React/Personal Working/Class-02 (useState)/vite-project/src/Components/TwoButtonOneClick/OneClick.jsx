import React, { useState } from 'react'

export default function TwoButton() {

    const [count, setCount] = useState(0);

    function handleClick() {

        setCount(count + 1);
    }

    return (

        <>
            <button count={count} onClick={handleClick}>Click {count} times</button>
            <button count={count} onClick={handleClick}>Click {count} times</button>
        </>
    )
}
