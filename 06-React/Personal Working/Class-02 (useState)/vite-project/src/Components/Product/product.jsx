import React from 'react'
import "./style.css"

const products = [
    
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
    { title: 'banana', isFruit: true, id: 4 },
    { title: 'mango', isFruit: true, id: 5 },
    { title: 'lychi', isFruit: true, id: 6 },
];

export default function ShoppingList() {

    const listItems = products.map(product =>
        <li key={product.id}
            style={{ color: product.isFruit ? 'green' : 'red' }}>

            {product.title}

        </li>
    );

    return (

        <div className='product'>
        
        <ul>{listItems}</ul>

        </div>
    )
}