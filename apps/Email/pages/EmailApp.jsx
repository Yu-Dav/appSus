import { EmailList } from '../cmps/EmailList.jsx'
import { emailService } from '../services/email-service.js'

export class EmailApp extends React.Component {
    state = {
        emails: null,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query().then((emails) => {
            setTimeout(() => this.setState({ emails }), 1000)
        })
    }


    render() {
        const { emails } = this.state
        if (!emails) return <div>Loading...</div> //TODO- use cmp loading
        return (
            <section className="email-app">
                <EmailList emails={emails} />

            </section>
        )
    }
}
