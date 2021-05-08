import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/storage-service.js";
import { eventBusService } from "../../../services/event-bus-service.js";

export const keepService = {
  query,
  addNewNote,
  deleteNote,
  pinNote,
  onOpenClrCmp,
  changeNoteClr,
  onEditNote,
};

const KEY = "notesDB";
var gNotes;

_createNotes();

function query(filterBy) {
  var notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) notes = gNotes;
  console.log("filterBy =", filterBy);
  if (filterBy) {
    if (filterBy === "pinned")
      return Promise.resolve(notes.filter((note) => note.isPinned));
    return Promise.resolve(notes.filter((note) => note.type === filterBy));
  }
  // console.log("notes =", notes);
  return Promise.resolve(notes);
}

function onEditNote(txt, id) {
  // need to handle different types of notes.
  
  const idx = gNotes.findIndex((note) => note.id === id);
  gNotes[idx].info.txt = txt;
  _saveNotesToStorage();
  return Promise.resolve();
}

function changeNoteClr(id, clr) {
  const idx = gNotes.findIndex((note) => note.id === id);
  gNotes[idx].style.backgroundColor = clr;
  _saveNotesToStorage();
  return Promise.resolve();
}

function onOpenClrCmp(id) {
  const idx = gNotes.findIndex((note) => note.id === id);
  gNotes[idx].isStyleEditing = !gNotes[idx].isStyleEditing;
  _saveNotesToStorage();
  return Promise.resolve();
}

function pinNote(id) {
  const idx = gNotes.findIndex((note) => note.id === id);
  const text = gNotes[idx].isPinned ? "unpinned" : "pinned successfully";
  gNotes[idx].isPinned = !gNotes[idx].isPinned;
  eventBusService.emit("show-user-msg", {
    txt: `Your note was ${text}`,
    type: "success",
  });
  _saveNotesToStorage();
  return Promise.resolve();
}

function deleteNote(id) {
  const idx = gNotes.findIndex((note) => note.id === id);
  gNotes.splice(idx, 1);
  _saveNotesToStorage();
  return Promise.resolve();
}

function addNewNote(note) {
  console.log("note =", note);
  const newNote = _createNewNote(note);
  gNotes.unshift(newNote);
  _saveNotesToStorage();
  return Promise.resolve();
}

function _createNewNote(note) {
  const newNote = {
    id: utilService.makeId(),
    type: note.noteType,
    isPinned: false,
    isStyleEditing: false,
    info: _createNewNoteInfo(note.noteType, note.input),
    style: {
      backgroundColor: "#b8c4ad",
    },
  };
  return newNote;
}

function _createNewNoteInfo(noteType, noteInput) {
  // console.log("noteType =", noteType);
  // console.log("noteInput =", noteInput);
  if (noteType === "noteText") return { txt: noteInput };
  if (noteType === "noteVid") {
    const idx = noteInput.indexOf("v=");
    const vidId = noteInput.substring(idx + 2);
    return { url: vidId };
  }
  if (noteType === "noteImg") return _createNewImg(noteInput);
  if (noteType === "noteTodos") return _createNewTodo(noteInput);
  if (noteType === "noteAud") return _createNewImg(noteInput);
}

function _createNewImg(input) {
  console.log("img input  =", input);
  return {
    // title: "the title",
    url: input,
  };
}

function _createNewTodo(input) {
  const todosArr = input.split(/[\s,]+/);
  // console.log("todosArr =", todosArr);
  const todos = {
    label: "Todos",
    todos: todosArr.map((todo) => {
      return { txt: todo };
    }),
  };
  // console.log("todos =", todos);
  return todos;
}

function _saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}

function _createNotes() {
  var notes = storageService.loadFromStorage(KEY);
  console.log("notes =", notes);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: true,
        isStyleEditing: false,
        info: {
          txt: "Fullstack Me Baby!",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: false,
        isStyleEditing: false,
        info: {
          txt: "Another note",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteImg", // for IMG
        isPinned: false,
        isStyleEditing: false,
        info: {
          url:
            "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/banana.png",
          title: "Me playing Mi",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteAud", // for audio
        isPinned: true,
        isStyleEditing: false,
        info: {
          url:
            "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          // title: "Me playing Mi",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteAud", // for audio
        isPinned: false,
        isStyleEditing: false,
        info: {
          url:
            "https://actions.google.com/sounds/v1/science_fiction/windchime_drone.ogg",
          // title: "Me playing Mi",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },
      
      {
        id: utilService.makeId(),
        type: "noteTodos", // for TODO
        isPinned: false,
        isStyleEditing: false,
        info: {
          label: "How was it:",
          todos: [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteVid", // for VID
        isPinned: false,
        isStyleEditing: false,
        info: {
          url: "V08j6xzaDrI",
        },
        style: {
          backgroundColor: "#b8c4ad",
        },
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}
