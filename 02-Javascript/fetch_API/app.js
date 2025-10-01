// // // Sync 
// // // jo on the sport hame mil jata hai or top to buttom sync me chalte hai

// // // Async 
// // // jo hame promise return karta hai

// // //------------------------------ First Way (ye use karna Good practice hai) ------------------------------------

async function getData(){

    let result = await fetch("onedrive/?docId=81C203D4081371DD%21s567e8e17e48b4661a408d1082843fc57&driveId=81C203D4081371DD");
    let data = await result.json()
    let main = document.getElementById('main')    
    
    console.log(data);

    for (let i = 0; i < data.products.length; i++) {
        
      main.innerHTML += `
      
        <div class="box_1">

            <div class="parent_1">
                <img src="${data.products[i].images[2]}" alt="">
            </div>

            <div class="parent_2">

                <div class="child_2">
                    <div class="grand_Child_1">
                        <h1>title</h1>
                    </div>

                    <div class="grand_Child_2">
                        <p>${data.products[i].title}</p>
                    </div>
                </div>

                <div class="child_2">
                    <div class="grand_Child_1">
                        <h1>Category</h1>
                    </div>

                    <div class="grand_Child_2">
                        <p>${data.products[i].category}</p>
                    </div>
                </div>

                <div class="child_2">
                    <div class="grand_Child_1">
                        <h1>Price</h1>
                    </div>

                    <div class="grand_Child_2">
                        <p>${data.products[i].price}</p>
                    </div>
                </div>

                <div class="child_2">
                    <div class="grand_Child_1">
                        <h1>stock</h1>
                    </div>

                    <div class="grand_Child_2">
                        <p>${data.products[i].stock}</p>
                    </div>
                </div>

            </div>

        </div>

        `
        
    }
}
getData()


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



// async function getData() {
//   const url = "https://dummyjson.com/products/category/smartphones";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);

//   } catch (error) {
//     console.error(error.message);
//   }
// }

// getData()
// // ------------------------------------------------------------------------------------------------------