const { NavLink, Route, Switch } = ReactRouterDOM
import { LongTxt } from '../../../cmps/LongTxt.jsx'
import { EmailDetails } from './EmailDetails.jsx'
import { ShowTime } from './ShowTime.jsx'

export function EmailPreview({ email, onSetReadEmail, onSetStarEmail, onDeleteEmail }) {
    return (
        <React.Fragment>
            <NavLink to={`/email/${email.id}`}>
                <div onClick={() => onSetReadEmail(email.id)} className={email.isRead ? "email-preview flex space-btw align-center grid-container" : "email-preview flex space-btw align-center grid-container bold"} >
                    <span className="from">{email.from}</span>
                    <span className="subject">{email.subject}</span>
                    <span className="body"><LongTxt txt={email.body} /></span>
                    <span className="date"><ShowTime timeStamp={email.sentAt} /></span>
                    <span onClick={(ev) => {
                        ev.stopPropagation()
                        onSetStarEmail(email.id)
                    }
                    } className={email.isStarred ? "fas fa fa-star star yellow" : "fa fa-star star"} ></span>
                </div>
            </NavLink>
            <Switch>
                <Route path={`/email/${email.id}`} render={(props) => (
                    <EmailDetails {...props} email={email} onDeleteEmail={onDeleteEmail} />
                )} />
            </Switch>
        </React.Fragment>

    )
}
