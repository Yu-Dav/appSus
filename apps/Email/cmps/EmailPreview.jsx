const { Link } = ReactRouterDOM
import {ShowTime} from './ShowTime.jsx'

export function EmailPreview({ email }) {
    console.log(email)
    return (
        <Link to={`/email/${email.id}`}>
            <section className="email-preview" >
                <span>{email.from}</span>
                <span>{email.subject}</span>
                <span>{email.body}</span>
                {/* <span>{email.sentAt}</span> */}
               <span><ShowTime timeStamp={email.sentAt}/></span>
            </section>
        </Link>

    )
}

//todo- add component for time?