const express = require('express');
const fs = require('fs');
const path = require('path');

// Express Boilerplate
const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require('./db/db');
const uuid = require('uniqid');

app.use(express.urlencoded({ extended:  true }));
app.use(express.json());
app.use(express.static('public'));

// GET API
app.get('/api/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db.json'));
});

// POST New Note to db
app.post('/api/notes', (req, res) => {
  const existingNotes = JSON.parse(fs.readFileSync('./db/db.json'));

  req.body.id = existingNotes.length.uuid;

  const newNote = req.body;
  existingNotes.push(newNote);

  fs.writeFileSync('./db/db.json', JSON.stringify(existingNotes));

  res.json(existingNotes);
});


// Page Load

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
  console.log(`API Server now on port ${PORT}!`);
});