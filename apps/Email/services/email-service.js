import { utilService } from '../../../services/util-service.js'
import { storageService } from '../../../services/storage-service.js';

export const emailService = {
    query,  //TODO- use also filtering
    addEmail,
    setIsRead,
    setIsStarred,
    deleteEmail
}

const KEY = 'emails';
var gEmails;

_createEmails();

function query(filterBy) {
    if (filterBy) {
        var { txt } = filterBy
        const filteredEmails = gEmails.filter(email => {
            const regex = new RegExp(txt, 'i')
            return (
                regex.test(email.subject) ||
                regex.test(email.from) ||
                regex.test(email.body))
        })
        return Promise.resolve(filteredEmails)
    }
    return Promise.resolve(gEmails)
}

function _createEmails() {
    var emails = storageService.loadFromStorage(KEY);
    if (!emails || !emails.length) {
        emails = [
            { from: 'Paco El', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isTrash: false, isRead: false, sentAt: 1620201753247, isStarred: false },
            { from: 'Yuval Da', id: utilService.makeId(), subject: 'Sprint 3', body: 'Lets zoom', isTrash: false, isRead: false, sentAt: 1620200994854, isStarred: false },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isTrash: false, isRead: false, sentAt: Date.now(), isStarred: false },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isTrash: false, isRead: false, sentAt: Date.now(), isStarred: false },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isTrash: false, isRead: false, sentAt: Date.now(), isStarred: false },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Did you see my pig', body: 'Last time I saw Peshazon was at your place', isTrash: false, isRead: false, sentAt: 1551133930594, isStarred: false },
        ]
    }
    gEmails = emails;
    _saveEmailsToStorage();
}

function _getIdxById(id) {
    return gEmails.findIndex(email => id === email.id)
}

function setIsRead(emailId) {
    const idx = _getIdxById(emailId)
    gEmails[idx].isRead = !gEmails[idx].isRead
    _saveEmailsToStorage();
    return Promise.resolve()
}

function setIsStarred(emailId) {
    const idx = _getIdxById(emailId)
    gEmails[idx].isStarred = !gEmails[idx].isStarred
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
        isTrash: false,
        isRead: false,
        sentAt: Date.now(),
        isStarred: false,
    }
    gEmails.unshift(newEmail)
    _saveEmailsToStorage()
}

function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}
