import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js';

export const emailService = {
    query,  //TODO- use also filtering
    addEmail,
    setIsRead
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

function _getIdxById(id) {
    return gEmails.findIndex(email => id === emailId)
}

function setIsRead(emailId) {
    const idx = _getIdxById(emailId)
    gEmails[idx].isRead = !gEmails[idx].isRead
    _saveEmailsToStorage();
    return Promise.resolve()

}

function deleteEmail(emailId) {
    const idx = _getIdxById(emailId)
    if (gEmails[idx].isTrash) gEmails.splice(idx, 1)
    else gEmails[idx].isTrash = true
    _saveEmailsToStorage();
    return Promise.resolve()
}

function addEmail(email) {
    const newEmail = {
        from: 'Paco El',
        id: utilService.makeId(),
        subject: email.subject,
        body: email.body,
        isRead: false,
        sentAt: Date.now()
    }
    gEmails.unshift(newEmail)
    _saveEmailsToStorage()
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
