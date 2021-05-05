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
            { from: 'Paco El', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isRead: false, sentAt: 1620201753247 },
            { from: 'Yuval Da', id: utilService.makeId(), subject: 'Sprint 3', body: 'Lets zoom', isRead: false, sentAt: 1620200994854 },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isRead: false, sentAt: Date.now() },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isRead: false, sentAt: Date.now() },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isRead: false, sentAt: Date.now() },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isRead: false, sentAt: 1551133930594 },
        ]
    }
    gEmails = emails;
    _saveEmailsToStorage();
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
