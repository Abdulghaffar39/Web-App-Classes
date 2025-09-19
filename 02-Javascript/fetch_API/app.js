// // // Sync 
// // // jo on the sport hame mil jata hai or top to buttom sync me chalte hai

// // // Async 
// // // jo hame promise return karta hai

// // //------------------------------ First Way (ye use karna Good practice hai) ------------------------------------

// // async function getData(){

// //     let result = await fetch('https://dummyjson.com/products/category/smartphones');


// //     console.log(await result.json());

// //     for (let i = 0; i < products.length; i++) {
        
// //         console.log( products[i].brand);
        
// //     }
// // }

// // getData()

// // //------------------------------ Second Way ------------------------------------


// // // fetch('https://dummyjson.com/products/category/smartphones')
// // //     .then(res => {
// // //         console.log(res);
// // //     })
// // //     .then((data) => {
// // //         console.log(data);
// // //     })
// // //     .catch((error) => {console.log(error);
// // //     });



// // ------------------------------------------------------------------------------------------------------

// const api_url = `https://dummyjson.com/products/category/smartphones`;

// async function fetchPosts() {
    
//     const respones = await fetch(`${api_url}`)
//     let data = await respones.json()


//     if(respones) {
//         hideloader();
//     }

//     show(data)
// }

// fetchPosts()



async function getData() {
  const url = "https://dummyjson.com/products/category/smartphones";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);

  } catch (error) {
    console.error(error.message);
  }
}

getData()
// // ------------------------------------------------------------------------------------------------------