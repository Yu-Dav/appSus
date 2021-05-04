
export class NotesAdd extends React.Component {
    render() {
        return (
            <section className="notes-add container ">
                <div className="notes-add flex justify-center align-center">

                <form className="flex">
                    <input type="text" placeholder="What's on your mind?" />
                    <button>Save</button>
                </form>
                {/* // make these options into radio btns, then  */}
                {/* // move into the form, on submit gets the value.  */}
                <div className="notes-add-btns">
                    <i name="TextNote" className="fas fa-txt"></i>
                    <i className="fas fa-image"></i>
                    <i className="fas fa-video"></i>
                    <i className="fas fa-volume-up"></i>
                    <i className="fas fa-tasks"></i>
                </div>
                </div>
            </section>
        )
    }
}
