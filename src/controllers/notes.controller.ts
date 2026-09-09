import type { Request, Response } from "express";
import { getAllNotes } from "../repositories/notes.repository.js";
import { createNote } from "../repositories/notes.repository.js";


export const createNoteController = (req : Request, res: Response) => {
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
    
        const newNote = createNote(req.body.name);
    
        res.status(201).json({
            message: "Note created successfully",
            note: newNote
        });
};

export const dataNotes = ( req: Request, res: Response ) => {
    const notes = getAllNotes();

res.json(notes);
};
