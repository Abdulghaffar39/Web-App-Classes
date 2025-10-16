const express = require('express');

const app = express()
app.use(express.json());

const PORT = 3000 || process.env.PORT;

app.post('/Users', async(req, res) => {

    try {

        const { name, email } = req.body;

        console.log(name);
        console.log(email);


        res.send({
            status: 200,
            message: "Post api working successfuly"
        })
    }
    catch (err){

        res.send({

            err,
            status: 500, 
            message: "server is not found!"
        })
    }
})


app.get('/', (req, res) => {

    console.log('Hello World!!! get api');

    res.send({
        status: 200,
        message: "working successfuly"
    })
})

app.listen(PORT, () => {

    console.log(`Server is running ${PORT}`);
})
