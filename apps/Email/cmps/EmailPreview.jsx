const { NavLink, Route,Switch} = ReactRouterDOM
import {EmailDetails} from './EmailDetails.jsx'
import {ShowTime} from './ShowTime.jsx'


export function EmailPreview({ email }) {
    console.log(email)
    return (
        <React.Fragment>
        <NavLink to={`/Email/${email.id}`}>
            <section className="email-preview" >
                <span>{email.from}</span>
                <span>{email.subject}</span>
                <span>{email.body}</span>
               <span><ShowTime timeStamp={email.sentAt}/></span>
            </section>
        </NavLink>

        <Switch>
        <Route component={EmailDetails} path={`/Email/${email.id}`}/>
        </Switch>
        </React.Fragment>

    )
}

//todo- add component for time?