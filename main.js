import express from "express";
import movieRoutes from "./routes/movies.route.js"
// const express = require('express')
const app = express()
const PORT = 6969

app.get('/', (req, res) => {
    res.json({msg : "hello hi world !!!"});
});


// CRUD functionality (Middleware)
// CLIENT -> MIDDLEWARE -> SERVER

app.use('/movies',movieRoutes )



app.listen(PORT, () => {
    console.log(`the server is running at http://localhost:${PORT}`);
})


