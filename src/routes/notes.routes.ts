import express from "express";

import { createNote } from "../controllers/notes.controller.js";
import { deleteNote } from "../controllers/deleteNotes.controller.js";
import { updateNotes } from "../controllers/updateNotes.controller.js";
import { getOneNote } from "../controllers/getOneNote.controller.js";
import { dataNotes } from "../controllers/notes.controller.js";

const router = express.Router();

router.post("/", createNote);
router.delete("/:id", deleteNote);

router.get("/", dataNotes);

router.get("/:id", getOneNote);
router.put("/:id", updateNotes);


export default router;