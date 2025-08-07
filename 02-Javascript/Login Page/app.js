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
    obj.push({
        name,
        age,
        email,
        password,
    });


    window.localStorage.setItem('data', JSON.stringify(obj));
    
    window.location.href = 'home.html';

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

//     let found = false;

//   for (let i = 0; i < getData.length; i++) {
//     if (getData[i].email === loginEmail && getData[i].password === loginPassword) {
//       alert('Login successfully');
//       found = true;
//       break; // stop loop if login is successful
//     }
//   }

//   if (!found) {
//     alert('Incorrect Email or Password');
//   }

}




function nav_signup() {

    window.location.href = 'signup.html';
}

function nav_signin() {

    window.location.href = 'index.html';
}

