const { Link } = ReactRouterDOM

export function EmailDetails({ email }) {
    return (
        <Link to="/email">
            <div className="body-container">
                <Link to={`/keep?body=${email.body}`}>
                    <i className="fa fas fa-todo save-as-note">save as note</i>
                </Link>
                <p className="detailed-body">{email.body}</p>
            </div>
        </Link>
    )
}


