export class EmailCompose extends React.Component {
    state = {
        subject: '',
        body: '',
    }

    componentDidMount() {
        if (!this.props.txt) return
        this.setState({ ...this.state, body: this.props.txt })
    }


    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }

    render() {
        const { subject, body } = this.state
        return (
            <div className="email-compose-container">
                <form className="email-compose" onSubmit={(ev) => this.props.onSendingEmail(ev, this.state)}>

                    <label className="top-frm flex space-btw" htmlFor="subject">subject:<button className="btn close-modal-btn">x</button></label>
                    <input type="text" id="subject" name="subject" value={subject} onChange={this.handleChange} />
                    <hr />
                    <label htmlFor="body">body:</label>
                    <textarea type="text" id="body" name="body" value={body} onChange={this.handleChange} />
                    <button className="btn">Send</button>
                </form>
            </div>
        )
    }
}
