import { useState } from 'react'
import "./style.css"
import minus from "./first.png"
import Plus from "./plus.png"
import Product from "../Product/product"
import MyButton from '../MyButton/Button'
import TwoButton from '../TwoButtonOneClick/OneClick'

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

        <div className='main'>


            <div>


                <img src={minus} onClick={handle_Decrease} className='minus' alt="minus" width="90px" />

                <h1>{count}</h1>

                <img src={Plus} onClick={handle_Increase} className='plus' alt="plus" width="100px" />

            </div>

            <div className='oneButton'>

                <MyButton />

            </div>

            <div className='TwoButton'>

                <TwoButton />

            </div>


        </div>
    )
}
