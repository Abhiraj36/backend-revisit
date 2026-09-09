import type { Request, Response } from "express";
import { oneNote } from "../repositories/notes.repository.js";

export const getOneNote = (req: Request, res: Response) => { 
    
    const id = Number(req.params.id);
    const foundNote = oneNote(id);

    if (foundNote === undefined) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.json(foundNote);
}