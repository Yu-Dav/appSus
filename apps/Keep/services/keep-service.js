import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/storage-service.js";

export const keepService = {
  query,
  addNewNote,
  deleteNote,
  pinNote,
  onOpenClrCmp,
  changeNoteClr,
};

const KEY = "notesDB";
var gNotes;

_createNotes();

function query() {
  var notes = storageService.loadFromStorage(KEY);
  // console.log("notes =", notes);
  if (!notes || !notes.length) notes = gNotes;
  return Promise.resolve(notes);
}

function changeNoteClr(id, clr) {
  console.log("Service got id =", id, "for clr =", clr);
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
  gNotes[idx].isPinned = !gNotes[idx].isPinned;
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
  const newNote = _createNewNote(note);
  gNotes.unshift(newNote);
  _saveNotesToStorage();
  return Promise.resolve();
}

function _createNewNote(note) {
  // console.log("service adding note =", note);
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
  if (noteType === "noteText") return { txt: noteInput };
  if (noteType === "noteVid") return { url: noteInput };
  if (noteType === "noteImg") return _createNewImg(noteInput);
  if (noteType === "noteTodos") return _createNewTodo(noteInput);
}

function _createNewImg(input) {
  return {
    title: "the title",
    url:
      "https://agfstorage.blob.core.windows.net/misc/FP_es/2021/03/30/emextext.jpeg",
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
          url: "https://www.youtube.com/watch?v=V08j6xzaDrI",
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
