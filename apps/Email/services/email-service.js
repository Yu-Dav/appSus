import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js';

export const emailService = {
    query,  //TODO- use also filtering
}

const KEY = 'emails';
var gEmails;

_createEmails();
function query() {
    return Promise.resolve(gEmails)
}

function _createEmails() {
    var emails = storageService.loadFromStorage(KEY);
    if (!emails || !emails.length) {
        emails = [
            { from: 'Paco El', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: new Date() }
        ]
    }
    gEmails = emails;
    _saveEmailsToStorage();
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
