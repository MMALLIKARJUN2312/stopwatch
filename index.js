// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0, stoppedTime : null}

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  onResetTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTime = () => {
    this.setState(previousState => ({
      timeElapsedInSeconds: previousState.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeInterval = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)

    return seconds < 10 ? `0${seconds}` : seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    return minutes < 10 ? `0${minutes}` : minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()} : ${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="start-stop-reset-container">
            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="stopwatch-timer">{time}</h1>
            <div className="buttons-container">
              <button
                type="button"
                onClick={this.onStartTimer}
                disabled={isTimerRunning}
                className="start-button button"
              >
                Start
              </button>
              <button
                type="button"
                onClick={this.onStopTimer}
                className="stop-button button"
              >
                Stop
              </button>
              <button
                type="button"
                onClick={this.onResetTimer}
                className="reset-button button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
