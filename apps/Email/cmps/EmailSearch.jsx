
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
            <form className="email-search flex justify-center" >
                <label htmlFor="byTxt"></label>
                <i className="fa fas fa-search"><input placeholder="search mails" autoComplete="off" className="email-filter" type="text" id="byTxt" name="txt" onChange={this.handleChange} /></i>
            </form>
        )
    }
}
