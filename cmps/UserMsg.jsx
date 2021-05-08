import { eventBusService } from '../services/event-bus-service.js'

export class UserMsg extends React.Component {
  removeEvent;
  state = {
    msg: null
  }

  componentDidMount() {
    // Here we listen to the event that we emited, its important to remove the listener 
    this.removeEvent = eventBusService.on('show-user-msg', (msg) => {
      this.setState({ msg })
    })
  }

  componentWillUnmount() {
    this.removeEvent()
  }

  render() {
    if (!this.state.msg) return ''
    setTimeout(() => this.setState({ msg: null }), 1500)
    if (!this.state.msg) return <span></span>
    const msgClass = this.state.msg.type || ''
    return (
      <section className={'user-msg flex align-center ' + msgClass}>
        <button className="btn" onClick={() => {
          this.setState({ msg: null })
        }}>x</button>
        <p>
          {this.state.msg.txt}

        </p>

      </section>
    )
  }
}
