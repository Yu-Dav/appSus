const {Link, Route, Switch } = ReactRouterDOM

export function EmailDetails({email,onDeleteEmail}) {
    return (
        <Link to="/email">
        <div>
            <i onClick={() => onDeleteEmail(email.id)}>Delete</i>
            <Link to={`/keep?body=${email.body}`}>
                <i>save as note</i>
            {/* /email/compose?subject=my note&body= note about the rain */}

            </Link>
            <p className="detailed-body">{email.body}</p>
        </div>
        </Link>
    )
}


