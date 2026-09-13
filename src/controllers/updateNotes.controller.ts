
import type { Request, Response } from "express";
import { upNotes } from "../repositories/notes.repository.js";

export const updateNotes = (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const name = req.body.name;

    // Check if name exists
    if (name === undefined) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    // Check if name is a string
    if (typeof name !== "string") {
        return res.status(400).json({
            message: "Please pass a valid string"
        });
    }

    // Check if name is empty or whitespace
    if (name.trim() === "") {
        return res.status(400).json({
            message: "Name must not be empty or only whitespace"
        });
    }

    // Ask repository to update the note
    const updatedNote = upNotes(id, name);

    // Note doesn't exist
    if (updatedNote === undefined) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    // Success
    res.json({
        message: "Note updated successfully",
        note: updatedNote
    });
};
