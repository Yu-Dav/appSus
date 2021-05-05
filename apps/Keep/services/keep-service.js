import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/storage-service.js";

export const keepService = {
  query,
  addNewNote,
  deleteNote,
  pinNote,
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

function pinNote(id) {
  console.log ('Pinning note =',id)
  return Promise.resolve();

}

function deleteNote(id) {
  // console.log("service deleting: ", id);
  const idx = gNotes.findIndex((note) => note.id === id);
  // console.log("idx =", idx);
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
    info: createNewNoteInfo(note.noteType, note.input),
  };
  return newNote;
}

function createNewNoteInfo(noteType, noteInput) {
  if (noteType === "noteText") return { txt: noteInput };
  if (noteType === "noteVid") return { url: noteInput };
  if (noteType === "noteImg") return createNewNoteTodoImg(noteInput);
  if (noteType === "noteTodos") return createNewNoteTodo(noteInput);
}

function createNewNoteTodoImg(input) {
  return {
    title: "the title",
    url:
      "https://agfstorage.blob.core.windows.net/misc/FP_es/2021/03/30/emextext.jpeg",
  };
}

function createNewNoteTodo(input) {
  const todosArr = input.split(",");
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
        info: {
          txt: "Fullstack Me Baby!",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: false,
        info: {
          txt: "Another note",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteImg", // for IMG
        isPinned: false,
        info: {
          url:
            "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/banana.png",
          title: "Me playing Mi",
        },
        style: {
          backgroundColor: "#00d",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteTodos", // for TODO
        isPinned: false,
        info: {
          label: "How was it:",
          todos: [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 },
          ],
        },
      },

      {
        id: utilService.makeId(),
        type: "noteVid", // for VID
        isPinned: false,
        info: {
          url: "https://www.youtube.com/watch?v=V08j6xzaDrI",
        },
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}
