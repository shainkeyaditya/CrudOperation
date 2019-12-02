module.exports  = (app) => {
    const note = require('./controller/crudController');
// Create a new Note
    app.post('/notes', note.create);

// // Retrieve all notes

    app.get('/notes', note.findAllNotes);

// //  Retrieve a single note

    app.get('/notes/:noteId', note.findOneNote);

// // Update a Note

    app.put('/notes/:noteId', note.updateNote);

// //  Delete a Note

    app.delete('/notes/:noteId', note.deleteNote)
};