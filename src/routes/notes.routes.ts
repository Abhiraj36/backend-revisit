import express from "express";
import { realNotes } from "../data/notes.js";
import { createNote } from "../controllers/notes.controller.js";
import { deleteNote } from "../controllers/deleteNotes.controller.js";

const router = express.Router();

router.post("/", createNote);


router.delete("/:id", deleteNote);


router.get("/", (req, res) => {
    res.json(realNotes);
});


router.get("/:id", (req, res) => {

    const id = Number(req.params.id);

    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(realNotes[index]);
});


router.put("/:id", (req, res) => {

    const id = Number(req.params.id);

    // Check if name exists
    if (req.body.name === undefined) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    // Check if name is a string
    if (typeof req.body.name !== "string") {
        return res.status(400).json({
            message: "Please pass a valid string"
        });
    }

    // Check if name is empty or whitespace
    if (req.body.name.trim() === "") {
        return res.status(400).json({
            message: "Name must not be empty or only whitespace"
        });
    }

    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    realNotes[index] = {
        id: id,
        name: req.body.name
    };

    res.json({
        message: "Note updated successfully",
        note: realNotes[index]
    });
});


export default router;