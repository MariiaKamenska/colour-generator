import express from 'express';
import sqlite3 from 'sqlite';
import cors from 'cors';

// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Не підключається БД:', err.message);
    } else {
        console.log('Excellent!');
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS colors (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        color TEXT NOT NULL
    )
`);

app.get('/colors', (req, res) => {
    db.all('SELECT * FROM colors ORDER BY id DESC', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

app.post('/colors', (req, res) => {
    const { color } = req.body;
    db.run('INSERT INTO colors (color) VALUES (?)', [color], function (err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(200).json({ id: this.lastID, color });
        }
    });
});

app.listen(5000, () => {
    console.log('Сервер запущено на http://localhost:5000');
});