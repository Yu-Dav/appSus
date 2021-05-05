
export class EmailCompose extends React.Component {

    state = {
        subject: '',
        body: '',
    }

    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ ...this.state, [field]: value })
    }

    onSendingEmail = (ev) => {
        ev.preventDefault()
        console.log('SENDING EMAIL')
    }
    render() {
        const { subject, body } = this.state
        return (
            <div class="email-compose-container">
                <form className="email-compose" onSubmit={this.onSendingEmail}>
                    <label htmlFor="subject">subject:</label>
                    <input type="text" id="subject" name="subject" value={subject} onChange={this.handleChange} />
                    <hr />
                    <label htmlFor="body">body:</label>
                    <input type="text" id="body" name="body" value={body} onChange={this.handleChange} />

                    {/* add txt area */}
                    <button>Send</button>
                </form>
            </div>
        )
    }
}
