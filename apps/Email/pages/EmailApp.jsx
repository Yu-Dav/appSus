import { EmailList } from '../cmps/EmailList.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'
import { EmailSideBar } from '../cmps/EmailSideBar.jsx'
import { emailService } from '../services/email-service.js'

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



    onSetReadEmail = (emailId) => {
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

    onDeleteEmail = (emailId) => {
        emailService.deleteEmail(emailId)
            .then((res) => this.loadEmails())
    }


    render() {
        const { emails } = this.state
        const { isComposed } = this.state
        if (!emails) return <div>Loading...</div> //TODO- use cmp loading
        return (
            <section className="email-app flex">
                {/* moved to emailsidebar */}
                {isComposed && <EmailCompose onSendingEmail={this.onSendingEmail} />}
                <EmailSideBar onSetView={this.onSetView} onOpenModal={this.onOpenModal} />
                <Switch>
                    <Route path="/email" render={(props) => (
                        <EmailList {...props} emails={this.setEmailsForDisplay()} onSetReadEmail={this.onSetReadEmail} onDeleteEmail={this.onDeleteEmail} />
                    )} />
                </Switch>
            </section>
        )
    }
}
