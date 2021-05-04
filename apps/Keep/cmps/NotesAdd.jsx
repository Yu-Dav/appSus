
export class NotesAdd extends React.Component {
    render() {
        return (
            <section className="notes-add container flex space-btw">
                <input type="text" placeholder="What's on your mind?"/>
                <div>
                    {/* <i className="fa fa-icn"></i> */}
                    <i className="fas fa-txt"></i>
                </div>
            </section>
        )
    }
}
