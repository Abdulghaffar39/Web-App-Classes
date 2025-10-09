const ageChecker = (req, res, next) => {

    const { userAge } = req.body;

    if (userAge > 18) {

        next();
    } 
    else {

        return res.send({ 
            
            status: 403, 
            message: 'User age is less than 18' 
        });
    }

};


module.exports = { ageChecker }