import { realNotes } from "../data/notes.js";
import { pool } from "../db.js";

export const getAllNotes = async () => {
   const result = await pool.query(
    `Select * from notes order By id`
   );
   return result.rows;
}

export const createNote = async (name: string) => {
    const result = await pool.query(
        `INSERT INTO notes (name)
         VALUES ($1)
         RETURNING *`,
        [name]
    );

    return result.rows[0];
};

    export const delNote = (id: number) => {
    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
       return undefined;
    }
    
    const deletedNote = realNotes.splice(index, 1);
    return deletedNote[0];
  
    }

    export const oneNote = (id: number) => {

        const foundNote = realNotes.find(note => note.id === id);

    if (foundNote === undefined) {
        return undefined;
    }

    return foundNote;

    };


export const upNotes = (id: number, name: string) => {

    const index = realNotes.findIndex(note => note.id === id);

    if (index === -1) {
        return undefined;
    }

    realNotes[index] = {
        id: id,
        name: name
    };

    return realNotes[index];
};

