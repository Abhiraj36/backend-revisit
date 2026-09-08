import type { Request, Response } from "express";

import { realNotes } from "../data/notes.js";

export const createNote = (req : Request, res: Response) => {
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
    
        const lastNote = realNotes[realNotes.length - 1];
    
        let id: number;
    
        if (lastNote === undefined) {
            id = 1;
        } else {
            id = lastNote.id + 1;
        }
    
        const newNote = {
            id: id,
            name: req.body.name
        };
    
        realNotes.push(newNote);
    
        res.status(201).json({
            message: "Note created successfully",
            note: newNote
        });
};

export const dataNotes = (req: Request, res: Response) => {

    res.json(realNotes);

};