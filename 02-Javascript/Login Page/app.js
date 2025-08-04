
let array = []

function signin(){

    console.log('success!');

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let obj = {

        name,
        age,
        email,
        password,
    }

    array.push(obj);
    window.localStorage.setItem('data' , JSON.stringify(array));
    // window.localStorage.setItem("data", JSON.stringify(students));
    // window.location.href = 'signup.html'
}
