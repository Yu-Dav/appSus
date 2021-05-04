import { utilService } from "../../../services/util-service.js";
import { storageService } from "../../../services/storage-service.js";
export const keepService = {
  query,
};

const KEY = "notesDB";
var gNotes;

_createNotes();
function query() {
  return Promise.resolve(gNotes);
}

function _createNotes() {
  var notes = _loadNotesFromStorage(KEY);
  if (!notes || !notes.length) {
    notes = [
      {
        id: utilService.makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
          txt: "Fullstack Me Baby!",
        },
      },
      {
        id: utilService.makeId(),
        type: "NoteImg",
        info: {
          url: "http://some-img/me",
          title: "Me playing Mi",
        },
        style: {
          backgroundColor: "#00d",
        },
      },
      {
        id: utilService.makeId(),
        type: "NoteTodos",
        info: {
          label: "How was it:",
          todos: [
            { txt: "Do that", doneAt: null },
            { txt: "Do this", doneAt: 187111111 },
          ],
        },
      },
    ];
  }
  gNotes = notes;
  _saveNotesToStorage();
}

function _saveNotesToStorage() {
  storageService.saveToStorage(KEY, gNotes);
}

function _loadNotesFromStorage() {
  storageService.saveToStorage(KEY);
}
