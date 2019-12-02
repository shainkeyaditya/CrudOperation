const Note = require('../../models/crudModel');

exports.create = (req,res)=>{
    // validate request
    console.log(req.body)
    if(!req.body.content){
        return res.status(400).send({
            message:"Note content can not be empty"
        })
    }
    // create a note
    const note = new Note({
        title: req.body.title || "Untitled Note",
        content:req.body.content
    });
    // save a note
    note.save().then(data=>{
        console.log('data------------', data);
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occured"
        });
    });
};
exports.findAllNotes = (req,res)=>{
    Note.find().then(notes=>{
        res.send(notes);
    }).catch(err=>{
        res.status(500).send({
            message:err.message || "Some error occured"
        });
    });
    
};

exports.findOneNote = (req,res)=>{
    Note.findById(req.params.noteId)
    .then(note =>{
        if(!note){
            return res.status(500).send({
                message:err.message || "Some error occured"
            });
        }
        res.send(note);

    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteId
        });
    });


}
// updating a note

exports.updateNote = (req,res)=>{
    // Validate Request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Note.findByIdAndUpdate(req.params.noteId, {
        title: req.body.title || "Untitled Note",
        content: req.body.content
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });

}
// Delete a note

exports.deleteNote = (req,res)=>{
    console.log('delete------', req.params);
    Note.findByIdAndRemove(req.params.noteId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.noteId
        });
    });

}
