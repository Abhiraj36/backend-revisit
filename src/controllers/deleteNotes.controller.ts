import type { Request, Response } from "express";


import { realNotes } from "../data/notes.js";

 export const deleteNote = (req: Request, res: Response) => {const id = Number(req.params.id);

    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    const deletedNote = realNotes.splice(index, 1);

    res.json({
        message: "Note deleted successfully",
        note: deletedNote[0]
    })};