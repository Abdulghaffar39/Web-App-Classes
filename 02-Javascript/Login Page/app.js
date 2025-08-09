const signup = () => {

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

        // console.log(obj[i].email + '1');

        if (obj[i].email === email && obj[i].password === password) {

            // console.log(obj[i].email + '2');
            alert('This Email Account is already exists!');

            isFound = true;
            return;
        }


    }

    if (!isFound) {

        alert('Account created successfuly');
        window.location.href = 'signup.html';

    }


    obj.push({
        name,
        age,
        email,
        password,
    });


    window.localStorage.setItem('data', JSON.stringify(obj));
    display();

};

// let array = [];

const signin = () => {

    let signin_email = document.getElementById('signin_email').value;
    let signin_password = document.getElementById('signin_password').value;


    if (signin_email == '' && signin_password == '') {

        alert('Please enter value')
        return;
    }


    var getdata = window.localStorage.getItem('data');
    getdata = JSON.parse(getdata);


    let isFound = false;


    for (let i = 0; i < getdata.length; i++) {


        if (getdata[i].email === signin_email && getdata[i].password === signin_password) {

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


};

let main = document.getElementById('main');

function display() {

    let obj = JSON.parse(window.localStorage.getItem('data')) || [];
    let homeData = '';

    // console.log(obj);
    
    obj.forEach((element , i) => {

        console.log(element);
        
        homeData += `<h1 id="head">${element.name}</h1>

        <div class="parent_1">

            <div>
                <p id="para">Age</p>
                <p id="para">Email</p>
                <p id="para">Password</p>
            </div>

            <div>
                <p id="para">:</p>
                <p id="para">:</p>
                <p id="para">:</p>
            </div>

            <div>
                <p id="para">${element.age}</p>
                <p id="para">${element.email}</p>
                <p id="para">${element.password}</p>
            </div>

        </div>`
    });

    console.log(homeData);

    main.innerHTML = homeData;


    


}


display();




function nav_signin() {

    window.location.href = 'signup.html';
}

function nav_signup() {

    window.location.href = 'index.html';
}

function nav_logout() {

    window.location.href = 'index.html';
}

function form(event) {

    event.preventDefault();
}

