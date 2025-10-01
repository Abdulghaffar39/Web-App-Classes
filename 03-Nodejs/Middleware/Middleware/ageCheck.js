const ageChecker = (req, res, next) => {

    const {userAge} = req.body;

    if (userAge >= 18 ){

        next()
    }
    else {

        return res.send({
            status: 505,
            message: "User is not Valid"
        })
    }
}


module.exports = { ageChecker }