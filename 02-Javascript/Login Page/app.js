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


        if (obj[i].email === email && obj[i].password === password) {

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


function viewBlogs() {
  let card = document.getElementById("Cards");
  let viewBlogs = document.getElementById("Vblog");
  let blogs = JSON.parse(localStorage.getItem("blog"));
  // Display Blog Detail in FrontEnd
  for (let i = 0; i < blogs.length; i++) {
    card.innerHTML += `<div class="card">
    <div class="iamge">
          <img src="./assets/Images/screenshot.jpg" alt="">
        </div>
        <div class="title">
          <h1>${blogs[i].title.slice(0, 30)}</h1>
        </div>
        <div class="content">
          <p>${blogs[i].Content.slice(0, 200)}</p>
        </div>
        <div class="author">
          <i class="fa-solid fa-circle-user"></i>
          <p><b>Author:</b><span>${blogs[i].author}</span></p>
        </div>
    </div>`;
  }
  viewBlogs.disabled = true;
}



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

