import express from 'express'
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'
import fs from 'fs'
import bodyParser from 'body-parser'

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended : false}));

app.get('/', (req, res) => {
    try {
        var content = fs.readFileSync('index.html', 'utf8');
        res.set('Content-Type', 'text/html');
        res.status(200).send(content);
    } catch (err) {
        res.send(err);
    }
    res.end();
});

app.listen(3000, 'localhost', () => {
    console.log('Site running on http://localhost:3000');
});