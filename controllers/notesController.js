const db = require('../db/config');

// Create a new note
const createNote = (req, res) => {
    const { title, datetime, note } = req.body;
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(query, [title, datetime, note], (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.status(201).send({ message: 'Note created!', id: results.insertId });
    });
};

// GET all notes
const getAllNotes = (req, res) => {
    const query = 'SELECT * FROM notes';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send(err.message);
        res.status(200).send(results);
    });
};

// GET a single note by ID
const getNoteById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.length === 0) return res.status(404).send({ message: 'Note not found!' });
        res.status(200).send(results[0]);
    });
};

// Update a note
const updateNote = (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(query, [title, datetime, note, id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.affectedRows === 0) return res.status(404).send({ message: 'Note not found!' });
        res.status(200).send({ message: 'Note updated!' });
    });
};

// Delete a note
const deleteNote = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).send(err.message);
        if (results.affectedRows === 0) return res.status(404).send({ message: 'Note not found!' });
        res.status(200).send({ message: 'Note deleted!' });
    });
};

module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote,
};
