
import fetch from 'node-fetch'
import express from 'express'
import cors from 'cors'

//const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));

app.get('/courses/:department/:level', (req, res) => {
    const { department, level } = req.params;
    res.json({ department: department,
                level: level});
});

app.get('/clothing', (req, res) => {
    const { category, color } = req.query;
    res.json({ result: `Showing all ${color} ${category}.` });
});

app.listen(PORT, () => {
    console.log(`Ready on port ${PORT}`);
});
