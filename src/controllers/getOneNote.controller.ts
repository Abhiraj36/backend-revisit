import type { Request, Response } from "express";

import { realNotes } from "../data/notes.js";


export const getOneNote = (req: Request, res: Response) => { 
    
    const id = Number(req.params.id);

    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(realNotes[index]);
}