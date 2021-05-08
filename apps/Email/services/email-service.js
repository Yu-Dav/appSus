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
            { from: 'Paco El', id: utilService.makeId(), subject: 'Wassap?', body: 'Pick up!', isTrash: false, isRead: false, sentAt: 1620491928269, isStarred: false },
            { from: 'Yuval Da', id: utilService.makeId(), subject: 'Sprint 3', body: 'Lets zoom,\n I want to show you all the new features, also check out the gitpages I updates', isTrash: false, isRead: false, sentAt: 1620201753247, isStarred: false },
            { from: 'Ernest Hemingway', id: utilService.makeId(), subject: 'Have you seen my pig?', body: 'Last time I saw Peshazon was at your place, he means the world to me. please help me find him and I will be forever greatful.\n p.s:\n there was also some money involved Kindly, Etgar', isTrash: false, isRead: false, sentAt: 1620200994854, isStarred: false },
            { from: 'Etgar Keret', id: utilService.makeId(), subject: 'Epistolary novel', body: 'This is the definiation you asked :\n"An epistolary novel is a novel written as a series of documents.\n The usual form is letters,[1] although diary entries, newspaper clippings and other documents are sometimes used.\n Recently, electronic "documents" such as recordings and radio, blogs, and e-mails have also come into use.\n The word epistolary is derived from Latin from the Greek word ἐπιστολή epistolē, meaning a letter (see epistle)\n Let me know if it is enough\n Best Regards\n Viki', isTrash: false, isRead: false, sentAt: 1610200994744, isStarred: false },
            {
                from: 'Charles Darwin Jr.', id: utilService.makeId(), subject: 'Did you know?!', body: 'The existence of discrete inheritable units was first suggested by Gregor Mendel (1822–1884).[11] From 1857 to 1864, in Brno, Austrian Empires Czech Republic), he studied inheritance patterns in 8000 common edible pea plants, tracking distinct traits from parent to offspring. He described these mathematically as 2n combinations where n is the number of differing characteristics in the original peas. Although he did not use the term gene, he explained his results in terms of discrete inherited units that give rise to observable physical characteristics. This description prefigured Wilhelm Johannsendistinction between genotype (the genetic material of an organism) and phenotype (the observable traits of that organism). Mendel was also the first to demonstrate independent assortment, the distinction between dominant and recessive traits, the distinction between a heterozygote and homozygote, and the phenomenon of discontinuous inheritance.Prior to Mendels work, the dominant theory of heredity was one of blending inheritance, which suggested that each parent contributed fluids to the fertilisation process and that the traits of the parents blended and mixed to produce the offspring. Charles Darwin developed a theory of inheritance he termed pangenesis, from Greek panand genesi / genos .[12][13] Darwin used the term gemmule to describe hypothetical particles that would mix during reproduction.'
                , isTrash: false, isRead: false, sentAt: 1610200984744, isStarred: false
            },
            { from: 'Moth Lover', id: utilService.makeId(), subject: 'Did you see my my moth?', body: 'upithecia schiefereri is a moth in the family Geometridae. It is found from North Africa through central Spain, southern France, the central and southern Alps, Italy and the southern Balkan Peninsula to eastern Turkey and northern Iran The wingspan is 18–24 mm.[3] Adults are on wing from April to June.The larvae feed on Saponaria[4] and Silene species. Larvae can be found from May to September. The species overwinters in the pupal stage.', isTrash: false, isRead: false, sentAt: 1551133930594, isStarred: false },
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
