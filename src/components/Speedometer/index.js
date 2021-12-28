// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="Speedometer"
          className="image"
        />
        <div className="content-container">
          <h1 className="des-heading">Speed is {speed}mph</h1>
          <p className="tag">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              onClick={this.onAccelerate}
              className="acc-button"
              type="button"
            >
              Accelerate
            </button>
            <button
              onClick={this.onBrake}
              className="brake-button"
              type="button"
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
