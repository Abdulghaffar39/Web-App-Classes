
let array = [];

const signin = () => {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    // console.log(name + age + email + password);

    let obj = {

        name,
        age,
        email,
        password,
    }

    array.push(obj)

    for (let i = 0; i < array.length; i++) {

        if (name == '' || age == '' || email == '' || password == '') {

            alert('Please put value')
        }
        else if (array[i].email == email && array[i].password == password) {

            alert('Account have already created');
            return
        }
        else {

            window.localStorage.setItem('data', JSON.stringify(array));
            window.location.href = 'signup.html'

        }
    }



}





function nav_signup() {

    window.location.href = 'signup.html';
}

function nav_signin() {

    window.location.href = 'index.html';
}

