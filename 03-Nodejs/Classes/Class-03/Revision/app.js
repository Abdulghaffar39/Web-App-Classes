const { log } = require('console');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get(('/'), function(req, res, next){
    res.send('hello Developers I am Coming in development');
})


app.post('/home', (req, res, next) => {

    const userAge = req.body.userAge
    // console.log(userAge);
    if (userAge > 18) {
        res.send('You are allow in the website');
    }else{
        
        res.send('You are not allow in the website');
    }
    
})

app.listen(PORT , () =>{

    console.log(`Server is running on ${PORT}`);
})



