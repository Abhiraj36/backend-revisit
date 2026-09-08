import type { Request, Response } from "express";

import { realNotes } from "../data/notes.js";


export const getAllNotes = () => {
    return realNotes;
};
