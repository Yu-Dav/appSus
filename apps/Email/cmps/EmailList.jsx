import { EmailPreview } from './EmailPreview.jsx'

export function EmailList({ emails, onReadEmail }) {
    return (
        <div className="email-list">
            {emails.map(email =>
                <EmailPreview email={email} key={email.id} onReadEmail={onReadEmail} />)}
        </div>
    )
}

