export class EmailSideBar extends React.Component {
    render() {
        return (
            <div className="email-controls flex flex-column">
                <button className="btn compose-btn" onClick={() => this.props.onOpenModal()}>  <img className="plus-sign" src="../../../assets/img/plus.png" alt=""></img>Compose</button>
                <button className="btn fa fas fa-inbox-side" onClick={() => this.props.onSetView('inbox')}>Inbox</button>
                <button className="btn fa fa-trash-side" onClick={() => this.props.onSetView('trash')}>Trash</button>
                <button className="btn fa fas fa-star-side" onClick={() => this.props.onSetView('star')}>Starred</button>

            </div>
        )
    }
}

