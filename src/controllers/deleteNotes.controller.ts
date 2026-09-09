import type { Request, Response } from "express";
import { realNotes } from "../data/notes.js";
import { delNote } from "../repositories/notes.repository.js";

 export const deleteNote = (req: Request, res: Response) => 
    {

    const id = Number(req.params.id);
    const deletedNote = delNote(id);

    if(deletedNote === undefined) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

      res.json({
        message: "Note deleted successfully",
        note: deletedNote

    });
};