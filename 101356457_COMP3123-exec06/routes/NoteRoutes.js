const noteModel = require('../models/Notes.js');
//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save

    //TODO - Write your code here to save the note
app.post('/notes', async (req, res) => {
    let s = {
        noteTitle : "first note",
        noteDescription: "hello1",
        priority:"low"
    }
    const note = new noteModel(s);

    try {
        await note.save();
        res.send(note);
    } catch (err) {
        res.status(500).send(err);
    }
});


//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
app.get('/notes', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
app.get('/notes/:noteId', async(req, res) => {
    const note = await noteModel.findById(req.params.noteId)
    //TODO - Write your code here to return onlt one note using noteid
    try {
    res.send(note);
    } catch (err) {
    res.status(500).send(err);
    }

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
app.put('/notes/:noteId', async(req, res) => {   
    try{
     const id = req.params.noteId;
     var updates = req.body;
     updates.noteDescription = "hello";
 
     const result = await NoteModel.findByIdAndUpdate(id, updates);
 
     res.status(200).send(`Note has been updated: ${result}`);
   } catch (err) {
     res.status(500).send(err);
   }
     });

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
app.delete('/notes/:noteId', (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
});
