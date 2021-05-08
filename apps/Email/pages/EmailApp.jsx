import {eventBusService} from '../../../services/event-bus-service'
import { Loading } from '../../../cmps/Loading.jsx'
import { EmailList } from '../cmps/EmailList.jsx'
import { EmailFilter } from '../cmps/EmailFilter.jsx'
import { EmailSearch } from '../cmps/EmailSearch.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'
import { EmailSideBar } from '../cmps/EmailSideBar.jsx'
import { emailService } from '../services/email-service.js'

const { Route, Switch } = ReactRouterDOM

export class EmailApp extends React.Component {
    state = {
        emails: null,
        filterBy: null,
        isComposed: false,
        txtReceived: null,
        view: 'inbox'
    }

    componentDidMount() {
        const searchParams = new URLSearchParams(this.props.location.search);
        const txtReceived = searchParams.get('body')
        txtReceived && this.onOpenModal(txtReceived);
        this.loadEmails()
    }

    loadEmails = () => {
        emailService.query(this.state.filterBy).then(emails => this.setState({ emails }))
    }

    onOpenModal = (txt) => {
        if (txt) {
            this.setState({ ...this.state, isComposed: true, txtReceived: txt })
            return
        }
        this.setState({ isComposed: !this.state.isComposed })
    }

    onSendingEmail = (ev, email) => {
        ev.preventDefault()
        emailService.addEmail(email)
        eventBusService.emit('show-user-msg', { txt: 'Email sent!', type: 'success' })
        this.onOpenModal()
    }

    onSetReadEmail = (emailId) => {
        emailService.setIsRead(emailId).then(this.loadEmails)
    }

    onSetStarEmail = (emailId) => {
        emailService.setIsStarred(emailId).then(this.loadEmails)
    }

    onSetView = (view) => {
        this.setState({ view })
    }

    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadEmails)
    }

    setEmailsForDisplay = () => {
        const { emails, view } = this.state
        if (view === 'inbox') return emails.filter(email => !email.isTrash)
        if (view === 'trash') return emails.filter(email => email.isTrash)
        if (view === 'star') return emails.filter(email => email.isStarred)
        if (view === 'read') return emails.filter(email => email.isRead)
        if (view === 'unread') return emails.filter(email => !email.isRead)
    }

    onDeleteEmail = (emailId) => {
        emailService.deleteEmail(emailId)
            .then((res) => this.loadEmails())
    }

    render() {
        const { emails, isComposed, txtReceived } = this.state
        if (!emails) return <Loading />
        return (
            <React.Fragment >
                <EmailSearch onSetView={this.onSetFilter} />
                <EmailFilter onSetView={this.onSetView} />
                <section className="email-app flex">
                    {/* <Link to={`/car/${car.id}/${car.vendor}`}>Details</Link> */}
                    {isComposed && <EmailCompose txt={txtReceived} onOpenModal={this.onOpenModal} onSendingEmail={this.onSendingEmail} />}
                    <EmailSideBar onSetView={this.onSetView} onOpenModal={this.onOpenModal} />
                    <Switch>
                        <Route path="/email" render={(props) => (
                            <EmailList {...props} emails={this.setEmailsForDisplay()} onSetReadEmail={this.onSetReadEmail} onDeleteEmail={this.onDeleteEmail} onSetStarEmail={this.onSetStarEmail} />
                        )} />
                    </Switch>
                </section>
            </React.Fragment>
        )
    }
}
