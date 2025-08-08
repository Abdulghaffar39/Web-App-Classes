const signin = () => {

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;



    if (name == '' || age == '' || email == '' || password == '') {
        alert('Please fill page');
        return
    }


    let obj = JSON.parse(window.localStorage.getItem('data')) || [];


    let isFound = false;

    for (let i = 0; i < obj.length; i++) {

        console.log(obj[i].email + '1');

        if (obj[i].email === email && obj[i].password === password) {

            console.log(obj[i].email + '2');
            alert('This Email Account is already exists!');

            isFound = true;
            return;
        }


    }

    if (!isFound) {

        alert('Account created successfuly');
        window.location.href = 'signup.html'

    }


    obj.push({
        name,
        age,
        email,
        password,
    });


    window.localStorage.setItem('data', JSON.stringify(obj));



}

function form(event) {

    event.preventDefault();
}

const signup = () => {



    let signup_email = document.getElementById('signup_email').value;
    let signup_password = document.getElementById('signup_password').value;


    if (signup_email == '' && signup_password == '') {

        alert('Please enter value')
        return;
    }


    var getdata = window.localStorage.getItem('data');
    getdata = JSON.parse(getdata);


    let isFound = false;


    for (let i = 0; i < getdata.length; i++) {


        if (getdata[i].email === signup_email && getdata[i].password === signup_password) {

            alert('Successfuly')
            isFound = true;
            window.location.href = 'home.html';
            break;
        }

    }

    if (isFound === false) {

        alert("Incorrect Email or Password");
        return;
    }

}


let head = document.getElementById('head')

var getdata = window.localStorage.getItem('data');
getdata = JSON.parse(getdata);

for (let i = 0; i < getdata.length; i++) {
    
    

    head.innerHTML = getdata[i].name;
    console.log(head.innerHTML);
    

    
}



function nav_signup() {

    window.location.href = 'signup.html';
}

function nav_signin() {

    window.location.href = 'index.html';
}

function nav_logout() {

    window.location.href = 'index.html';
}

