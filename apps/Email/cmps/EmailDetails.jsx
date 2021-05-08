const {Link, Route, Switch } = ReactRouterDOM

export function EmailDetails({email,onDeleteEmail}) {
    return (
        <Link to="/email">
        <div>
            {/* <i className="fa fa-trash" onClick={() => onDeleteEmail(email.id)}></i> */}
            <Link to={`/keep?body=${email.body}`}>
                <i>save as note</i>
            {/* /email/compose?subject=my note&body= note about the rain */}

            </Link>
            <p className="detailed-body">{email.body}</p>
        </div>
        </Link>
    )
}


