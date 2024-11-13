
import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'

//const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

// playersJson.filter(player => player.name === req.)

app.get('/players/:name/:number', (req, res) => {
    const { name, number, } = req.params;
    console.log("request",name, number)
    res.json({ 
        name: name,
        number: number
    });
});

// const request = function() {
//     fetch(`${baseUrl}/players/`)
// }

app.listen(PORT, () => {
    console.log(`Ready on port ${PORT}`);
});
