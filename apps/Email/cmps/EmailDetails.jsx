const {Link, Route, Switch } = ReactRouterDOM

export function EmailDetails({email,onDeleteEmail}) {
    return (
        <Link to="/email">
        <div>
            <button onClick={() => onDeleteEmail(email.id)}>Delete</button>
            <p className="detailed-body">{email.body}</p>
        </div>
        </Link>
    )
}


