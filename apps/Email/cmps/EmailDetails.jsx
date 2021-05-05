export function EmailDetails({email,onDeleteEmail}) {
    return (
        <div>
            {/* change to icon */}
            <button onClick={() => onDeleteEmail(email.id)}>Delete</button>
            <p className="detailed-body">{email.body}</p>
        </div>
    )
}

// later would be a class
