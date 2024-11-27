import express from "express";

// const express = require('express')
const app = express()
const PORT = 6969

app.get('/', (req, res) => {
    res.json({msg : "hello world"});
});

app.listen(PORT, () => {
    console.log(`the server is running at http://localhost:${PORT}`);
})


