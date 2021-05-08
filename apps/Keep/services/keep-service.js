import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/storage-service.js";
import { eventBusService } from "../../../services/event-bus-service.js";

export const keepService = {
  query,
  addNewNote,
  deleteNote,
  pinNote,
  onOpenClrCmp,
  onCloseClrCmp,
  changeNoteClr,
  onEditNote,
};

const KEY = "notesDB";
var gNotes;

_createNotes();

function query(filterBy) {
  var notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) notes = gNotes;
  if (filterBy) {
    if (filterBy === "pinned")
      return Promise.resolve(notes.filter((note) => note.isPinned));
    if (filterBy === "not-pinned")
      return Promise.resolve(notes.filter((note) => !note.isPinned));
    return Promise.resolve(notes.filter((note) => note.type === filterBy));
  }
  return Promise.resolve(notes);
}

function onEditNote(txt, id) {
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

function onCloseClrCmp() {
  gNotes.forEach((note) => (note.isStyleEditing = false));
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
  return {
    url: input,
  };
}

function _createNewTodo(input) {
  // const todosArr = input.split(/[\s,]+/);
  const todosArr = input.split(",");
  const todos = {
    label: "Todos",
    todos: todosArr.map((todo) => {
      return { txt: todo };
    }),
  };
  return todos;
}

function _saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}

function _createNotes() {
  var notes = storageService.loadFromStorage(KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: true,
        isStyleEditing: false,
        info: {
          txt: "Water the plants!",
        },
        style: {
          backgroundColor: "#e17474",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: false,
        isStyleEditing: false,
        info: {
          txt: "Work meeting at 16:00",
        },
        style: {
          backgroundColor: "#84c484",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteVid", // for VID
        isPinned: false,
        isStyleEditing: false,
        info: {
          url: "eX2qFMC8cFo",
        },
        style: {
          backgroundColor: "#ffa500",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteImg", // for IMG
        isPinned: false,
        isStyleEditing: false,
        info: {
          url:
            "https://blog.hotelsclick.com/wp-content/uploads/2017/01/Maldives-beach.jpg",
          title: "I wish I was there",
        },
        style: {
          backgroundColor: "#ffc0cb",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteAud", // for audio
        isPinned: true,
        isStyleEditing: false,
        info: {
          url: "http://media-ice.musicradio.com/Chill",
        },
        style: {
          backgroundColor: "#ffa500",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteAud", // for audio
        isPinned: false,
        isStyleEditing: false,
        info: {
          url: "http://media-ice.musicradio.com/ClassicFM",
        },
        style: {
          backgroundColor: "#b4b4da",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteTodos", // for TODO
        isPinned: false,
        isStyleEditing: false,
        info: {
          label: "Groceries",
          todos: [
            { txt: "Dates", doneAt: null },
            { txt: "Banana", doneAt: 187111111 },
            { txt: "Mango", doneAt: 187111111 },
            { txt: "Oat milk", doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: "#E7DC75",
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
          backgroundColor: "#ffa500",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteTodos", // for TODO
        isPinned: true,
        isStyleEditing: false,
        info: {
          label: "How to succeed",
          todos: [
            { txt: "Study hard", doneAt: null },
            { txt: "Have wine", doneAt: 187111111 },
          ],
        },
        style: {
          backgroundColor: "#84c484",
        },
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}
