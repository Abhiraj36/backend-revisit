
import type { Request, Response } from "express";

import { realNotes } from "../data/notes.js";

export const updateNotes = (req: Request, res: Response) => {
    
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
};

