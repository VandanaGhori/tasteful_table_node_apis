const express = require('express');
const app = express();
const port = 5000;

app.get("/", (req,res) => {
    res.sendFile('index.html', {root:__dirname});
});

app.get("/hello" , (req,res) => {
    //console.log("Hello World!!!");
    res.json("Hello World!!!");
});

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});