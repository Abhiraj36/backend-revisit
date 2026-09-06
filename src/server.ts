import express from "express";
import notesRouter from "./routes/notes.routes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/about", (req, res) => {
    res.send("Hey, its an about page!");
});

app.get("/health", (req, res) => {
    res.send("Health check, boss!");
});

// Mount the notes router
app.use("/notes", notesRouter);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});