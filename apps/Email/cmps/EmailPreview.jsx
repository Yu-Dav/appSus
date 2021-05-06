const { NavLink, Route, Switch } = ReactRouterDOM
import { LongTxt } from '../../../cmps/LongTxt.jsx'
import { EmailDetails } from './EmailDetails.jsx'
import { ShowTime } from './ShowTime.jsx'

export function EmailPreview({ email, onSetReadEmail, onSetStarEmail, onDeleteEmail }) {
    return (
        <React.Fragment>
            <NavLink to={`/email/${email.id}`}>
                <section onClick={() => onSetReadEmail(email.id)} className={email.isRead ? "email-preview" : "email-preview bold"} >
                    <span>{email.from}</span>
                    <span>{email.subject}</span>
                    <span><LongTxt txt={email.body} /></span>
                    <span><ShowTime timeStamp={email.sentAt} /></span>
                    <span onClick={()=>onSetStarEmail(email.id)} className={email.isStarred ? "fas fa fa-star yellow" : "fa fa-star"} ></span>
                </section>
            </NavLink>
            <Switch>
                <Route path={`/email/${email.id}`} render={(props) => (
                    <EmailDetails {...props} email={email} onDeleteEmail={onDeleteEmail} />
                )} />
            </Switch>
        </React.Fragment>

    )
}
