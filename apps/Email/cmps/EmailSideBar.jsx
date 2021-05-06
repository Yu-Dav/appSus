export class EmailSideBar extends React.Component {
    render() {
        return (
            <div className="email-controls flex flex-column">
                <button onClick={() => this.props.onOpenModal()}>compose</button>
                <button onClick={() => this.props.onSetView('inbox')}>Inbox</button>
                <button onClick={() => this.props.onSetView('trash')}>Trash</button>
            </div>
        )
    }
}

