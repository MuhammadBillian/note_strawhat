// router notes //
const express = require('express');
const { 
    createNote, 
    getAllNotes, 
    getNoteById, 
    updateNote, 
    deleteNote 
} = require('../controllers/notesController');

const router = express.Router();
router.post('/', createNote);

router.post('/notes', createNote);
router.get('/', getAllNotes);
router.get('/:id', getNoteById);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;
// router end //