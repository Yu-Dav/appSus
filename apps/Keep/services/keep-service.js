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
        type: "noteText", // for TEXT
        isPinned: true,
        info: {
          txt: "Fullstack Me Baby!",
        },
      },

      {
        id: utilService.makeId(),
        type: "noteText", // for TEXT
        isPinned: true,
        info: {
          txt: "Another note",
        },
      },


      {
        id: utilService.makeId(),
        type: "noteImg", // for IMG
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
        info: {
          url: "https://www.youtube.com/watch?v=V08j6xzaDrI",
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
