
export class EmailSearch extends React.Component {
    state = {
        filterBy: {
            txt: '', 
        }
    }
    handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        this.setState({ filterBy: { ...this.state.filterBy, [field]: value } }, () => {
            this.props.onSetView(this.state.filterBy)
        })
    }
    render() {
        const { txt } = this.state.filterBy
        return (
            <form >
                <label htmlFor="byTxt"></label>
                <input placeholder="search mails" autoComplete="off" className="email-filter" type="text" id="byTxt" name="txt" onChange={this.handleChange} />
            </form>
        )
    }
}
