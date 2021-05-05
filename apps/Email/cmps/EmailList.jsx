import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onSetReadEmail,onDeleteEmail }) {
    return (
        <div className="email-list">
            {emails.map(email =>
                <EmailPreview email={email} key={email.id} onSetReadEmail={onSetReadEmail} onDeleteEmail={onDeleteEmail} />)}
        </div>
    )
}

