import { useState } from 'react'
import "./style.css"
import minus from "./first.png"
import Plus from "./plus.png"

export default function Container_1() {

    let [count, setCount] = useState(0);

    const handle_Increase = () => {

        setCount(count + 1);
        return;
    }

    const handle_Decrease = () => {

        if (count >= 1) {

            setCount(count - 1);
            return;
        }
    }

    return (
        <>

            <div>

                <div>

                    <img src={minus} onClick={handle_Decrease} className='minus' alt="minus" width="90px" />
                    <h1>{count}</h1>
                    <img src={Plus} onClick={handle_Increase} className='plus' alt="plus" width="100px" />
                    {/* <button onClick={handle_Increase}>Increase</button>
                    <button onClick={handle_Decrease}>Decrease</button> */}

                </div>

            </div>
        </>
    )
}
