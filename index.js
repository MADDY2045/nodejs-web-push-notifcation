const express = require('express');
const webpush = require('web-push');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
const { port,publicKey,privateKey } = require('./config');

//console.log(port,publicKey,privateKey);
const app = express();

//body parsing for handling http requests
app.use(bodyparser.json());
//use cors
app.use(cors());
//using static path dir
app.use(express.static(path.join(__dirname,"client")));

//setting vapid key details
webpush.setVapidDetails('mailto:madhavaneee08@gmail.com',publicKey,privateKey);

//subscribe the route
app.post('/subscribe',(req,res)=>{
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({title:"Hello Maddy"});
    webpush.sendNotification(subscription,payload)
    .catch(err=>{
        console.error(err);
    })
})

app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});