// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: true, content: 'Subscribe'}

  renderAuthButton = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      this.setState(prevState => ({isSubscribe: false, content: 'Subscribed'}))
    } else {
      this.setState(prevState => ({isSubscribe: true, content: 'Subscribe'}))
    }
  }

  render() {
    const {content} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <button className="subscribe-btn" onClick={this.renderAuthButton}>
          {content}
        </button>
      </div>
    )
  }
}

export default Welcome
