//TODO- maybe delete the 'else' part- for now in use only to shorten text
export class LongTxt extends React.Component {
    state = {
        isLongTxtShown: false,
    }

    onToggleTxt() {
        this.setState({ isLongTxtShown: !this.state.isLongTxtShown })
    }

    render() {
        let { isLongTxtShown } = this.state
        const { txt } = this.props
        if (!isLongTxtShown) {
            return <span>{txt.substring(0,20)}...</span>
        } else {
            return (
                <span>{txt}</span>
            )
        }
    }
}
