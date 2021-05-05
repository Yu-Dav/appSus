export class EmailSideBar extends React.Component {
    render() {
        return (
            <div className="email-controls">
                <button onClick={() => this.props.onOpenModal()}>compose</button>
            </div>
        )
    }
}

