import { realNotes } from "../data/notes.js";

export const getAllNotes = () => {
    return realNotes;
};

export const createNote = (name: string) => {
    
        const lastNote = realNotes[realNotes.length -1 ]
    
        let id: number;
    
        if (lastNote === undefined) {
            id = 1;
        } else {
            id = lastNote.id + 1;
        }
    
        const newNote = {
            id: id,
            name: name
        };
    
        realNotes.push(newNote);
        return newNote;
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
