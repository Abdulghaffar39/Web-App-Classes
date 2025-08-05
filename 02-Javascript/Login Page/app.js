
let array = []

function signin() {

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
    window.localStorage.setItem('data', JSON.stringify(array));



    
    // onsole.log(getData[0].name);


    // for (let i = 0; i < array.length; i++) {

    //     if(obj[i].email = email){

    //         console.log('a');

    //     }

    // }


    alert('Account Created Successfuly');
    window.location.href = 'signup.html';


}

function signup() {

    let signup_email = document.getElementById('signup_email')
    let signup_password = document.getElementById('signup_password')
    

    var getData = window.localStorage.getItem('data');
    getData = JSON.parse(getData);
    // console.log(getData + 'get');

    for (var i = 0; i <= getData.length; i++) {

        // console.log(getData[i].email);

        if (getData[i].email === signup_email && getData[i].password === signup_password) {
            
            alert('Already have accound created!')
        }
    }

}








function nav_signup() {

    window.location.href = 'signup.html';
}

function nav_signin() {

    window.location.href = 'index.html';
}

