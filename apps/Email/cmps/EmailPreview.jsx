const { NavLink, Route,Switch} = ReactRouterDOM
import {LongTxt} from '../../../cmps/LongTxt.jsx'
import {EmailDetails} from './EmailDetails.jsx'
import {ShowTime} from './ShowTime.jsx'


export function EmailPreview({ email }) {
    return (
        <React.Fragment>
        <NavLink to={`/Email/${email.id}`}>
            <section className="email-preview" >
                <span>{email.from}</span>
                <span>{email.subject}</span>
                <span><LongTxt txt={email.body}/></span>
               <span><ShowTime timeStamp={email.sentAt}/></span>
            </section>
        </NavLink>

        <Switch>
        <Route render={(props)=><EmailDetails {...props} email={email}/>} path={`/Email/${email.id}`}/>
        </Switch>
        </React.Fragment>

    )
}

