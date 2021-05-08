import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onSetReadEmail, onSetStarEmail, onDeleteEmail }) {
    if (!emails.length) return <span>no emails here</span> //TODO- ADD on which folder...
    return (
        <div className="email-list container">
            {emails.map(email =>
                <EmailPreview email={email} key={email.id} onSetReadEmail={onSetReadEmail} onDeleteEmail={onDeleteEmail} onSetStarEmail={onSetStarEmail} />)}
        </div>
    )
}

