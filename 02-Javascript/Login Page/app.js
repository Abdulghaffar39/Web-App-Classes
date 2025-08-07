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
    window.location.href = 'signup.html'

}

function form(event) {
    
    event.preventDefault();
}

const signup = () => {



    let signup_email = document.getElementById('signup_email').value;
    let signup_password = document.getElementById('signup_password').value;

    var getdata = window.localStorage.getItem('data');
    getdata = JSON.parse(getdata);

    for (let i = 0; i <= getdata.length; i++) {

        // console.log(getdata[0].email);
        // console.log(getdata[i].email);
        
        

        if (getdata[i].email == signup_email && getdata[i].password == signup_password) {

            alert('Successfuly')
            window.location.href = 'home.html'
        }
        else if (getdata[i].email !== signup_email && getdata[i].password !== signup_password) {
            
            console.log(getdata[0].email);
            console.log(getdata[i].email);
            
            alert('Please valid Email or Password')
            return
        }

    }



}





function nav_signup() {

    window.location.href = 'signup.html';
}

function nav_signin() {

    window.location.href = 'index.html';
}

