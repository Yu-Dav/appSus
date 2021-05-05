import { EmailList } from '../cmps/EmailList.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'
import { emailService } from '../services/email-service.js'
import { eventBusService } from '../services/event-bus-service.js'
import { EmailDetails } from '../cmps/EmailDetails.jsx'
const { Route, Switch } = ReactRouterDOM

export class EmailApp extends React.Component {
    state = {
        emails: null,
        isComposed: false,
        view: 'inbox'

    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query().then(emails => this.setState({ emails }))
    }

    onOpenModal = () => {
        this.setState({ isComposed: !this.state.isComposed })
    }

    onSendingEmail = (ev, email) => {
        ev.preventDefault()
        emailService.addEmail(email)
        this.onOpenModal()
    }



    onReadEmail = (emailId) => {
        emailService.setIsRead(emailId).then(this.loadEmails)
    }


    onSetView = (view) => {
        this.setState({ view })
    }

    setEmailsForDisplay = () => {
        const { emails, view } = this.state
        if (view === 'inbox') return emails.filter(email => !email.isTrash)
        if (view === 'trash') return emails.filter(email => email.isTrash)
    }


    render() {
        const { emails } = this.state
        const { isComposed } = this.state
        if (!emails) return <div>Loading...</div> //TODO- use cmp loading
        return (
            <section className="email-app flex">
                <div className="email-controls"></div>
                <button onClick={() => this.onOpenModal()}>compose</button>
                {isComposed && <EmailCompose onSendingEmail={this.onSendingEmail} />}
                {/* <EmailSideBar onSetView={this.onSetView}/> */}
                <Switch>
                    <Route component={EmailDetails} path="/email/:emailId" />
                    <Route path="/email" render={(props) => (
                        <EmailList {...props} emails={this.setEmailsForDisplay()} onReadEmail={this.onReadEmail} />
                    )} />
                </Switch>
            </section>
        )
    }
}
