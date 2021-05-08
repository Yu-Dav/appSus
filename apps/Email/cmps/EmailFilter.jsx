export class EmailFilter extends React.Component {
    state = {
        clicked: ''
    }

    handleChange = (ev) => {
        this.setState({ clicked: ev.target.value })
        this.props.onSetView(ev.target.value)
    }

    render() {
        return (
            <div className="email-radio-btns flex justify-center">
                <input type="radio" id="read" name="inbox-type" value="read" onChange={this.handleChange} />
                <label htmlFor="read">Read</label>
                <input type="radio" id="unread" name="inbox-type" value="unread" onChange={this.handleChange} />
                <label htmlFor="unread">Unread</label>
            </div>
        )
    }
}
