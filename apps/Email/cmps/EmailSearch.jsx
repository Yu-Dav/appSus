
export class EmailSearch extends React.Component {
    state = {
        filterBy: {
            txt: '', //todo- add other filters
        }
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.type === 'number' ? +ev.target.value : ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetView(this.state.filterBy)
        })
    }
    render() {
        const { txt } = this.state.filterBy
        return (
            // <div>
            //     <label htmlFor="search"></label>
            //     <input type="text" id="search" />
            // </div>
            // onSubmit={this.onFilter}
            <form className="email-filter" >
                <label htmlFor="bySubject">By Subject</label>
                <input type="text" id="bySubject" name="txt" onChange={this.handleChange} />
                <button>Search</button>
            </form>
        )
    }
}
