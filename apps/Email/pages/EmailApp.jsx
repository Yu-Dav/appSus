import { EmailList } from '../cmps/EmailList.jsx'
import { EmailCompose } from '../cmps/EmailCompose.jsx'
import { emailService } from '../services/email-service.js'

export class EmailApp extends React.Component {
    state = {
        emails: null,
        isComposed: false,
    }

    componentDidMount() {
        this.loadEmails()
    }

    loadEmails() {
        emailService.query().then((emails) => {
            setTimeout(() => this.setState({ emails }), 1000)
        })
    }

    onOpenModal() {
        this.setState({ isComposed: !this.state.isComposed })
    }


    render() {
        const { emails } = this.state
        const { isComposed } = this.state
        if (!emails) return <div>Loading...</div> //TODO- use cmp loading
        return (
            <section className="email-app flex">
                <div className="email-contols"></div>
                <button onClick={() => this.onOpenModal()}>compose</button>
                {isComposed && <EmailCompose />}
                <EmailList emails={emails} />
            </section>
        )
    }
}
