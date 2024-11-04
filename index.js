
import fetch from 'node-fetch'

import express from 'express'

//const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/courses/:department/:level', (req, res) => {
    const { department, level } = req.params;
    res.json({ department: department,
                level: level});
});

app.get('/clothing', (req, res) => {
    const { category, color } = req.query;
    res.json({ message: `Showing all ${color} ${category}.` });
});

app.listen(PORT, () => {
    console.log(`Ready on port ${PORT}`);
});


// Example of an application route that makes a request to another server
app.get('/advice', async (req, res) => {
    // Make a request to another wbesite and wait for a response
    const response = await fetch('https://api.adviceslip.com/advice')
  
    // Read the response
    const body = await response.json()
  
    // Print the repsonse body to the console
    console.log(body)
  
    // Get the advice text string from the response body object
    const advice = body.slip.advice
  
    res.json({ data: advice })
  })