const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require('fs');

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set('viewengine', 'pug'); // set the tempelate engine as pug
app.set("views", path.join(__dirname, 'views')) //set the view directory

// -----------------------------------------------------------------------------------------------
// ENDPOINTS

app.get('/', (req, res) => {
    const con = "This is the best source of content on internet today"
    const params = {'title': "This is the title", 'content': con}
    res.status(200).render('project1.pug', params);
})

app.post('/', (req, res) => {
    //used to print in terminal-->
    // console.log(req.body)

    //used to print the following data in an txt file/directory
    name = req.body.name;
    age=req.body.age
    gender=req.body.gender
    address=req.body.address
    
    let outPutToWrite = `The name of the Client is ${name}, ${age} years old, ${gender}, and reside in ${address}`
    fs.writeFileSync('output.txt', outPutToWrite);

    const params = { 'message': "Your form has been successfully Submitted Successfully!!" };
    res.status(200).render('project1.pug', params);
})

// app.get('/about', (req, res) => {
//     res.status(400).render('demo.pug', { title: "Hello dom", message: "This is a tutorial for the beginners on how to use pug" })
// })

// --------------------------------------------------------------------------------------------
// START THE SERVER
app.listen(port, () => {
    console.log(`This app is successfully running at port ${port}`)
})