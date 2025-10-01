let userData = [

    {
        email: "abdulghaffar@gmail.com",
        password: "abdul1234"
    },
    {
        email: "talha@gmail.com",
        password: "talha1234"
    }
]

function auth (req, res, next) {

    res.send("Hello world!!!")
}


function signup(req, res, next) {
    
    let userType = {

        email: {
        type: string,
        required: true,
    },
    
    password: {
        type: string,
        required: true,
    },

    date: new Date.now()
    }
};


function login(req, res, next) {

    const { userEmail, passowrd } = req.body;
    let isFound = false;

   if (passowrd.length < 5) {
        return res.send("password length must be at least 5")
    }
    for (var i = 0; i < userData.length; i++) {
        if (userEmail === userData[i].email
            &&
            passowrd === userData[i].pass) {
            isFound = true;
            return res.send({
                status: 200,
                message: 'login successfully'
            })
        }
    }

    if (isFound === false) {
        res.send({
            status: 404,
            message: 'User Not found'
        })
    }

};

module.exports = { auth, login, signup };

