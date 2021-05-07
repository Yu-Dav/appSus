export class EmailSideBar extends React.Component {
    render() {
        return (
            <div className="email-controls flex flex-column">
                <button className="btn compose-btn" onClick={() => this.props.onOpenModal()}>Compose</button>
                <button className= "btn fa fas fa-inbox" onClick={() => this.props.onSetView('inbox')}>Inbox</button>
                <button className= "btn fa fa-trash" onClick={() => this.props.onSetView('trash')}>Trash</button>
                <button  className="btn fa fas fa-star" onClick={() => this.props.onSetView('star')}>Starred</button>
            </div>
        )
    }
}

