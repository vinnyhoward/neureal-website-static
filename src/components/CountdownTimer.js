import React, { Component } from 'react';

export default class CountdownTimer extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  countdownTimer = () => {
    let now = new Date();
    let eventDate = new Date(2018, 3, 5);

    let currentTime = now.getTime();
    let eventTime = eventDate.getTime();

    let remTime = eventTime - currentTime;

    let sec = Math.floor(remTime / 1000);
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    let day = Math.floor(hour / 24);

    hour %= 24;
    min %= 60;
    sec %= 60;
    day = (day < 10) ? "0" + day : day;
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec : sec;
    this.setState({
      days: day,
      hours: hour,
      minutes: min,
      seconds: sec,
    })
  }

  componentDidMount = () => {
    this.interval = setInterval(this.countdownTimer);
  }

  componentWillUnmount = () => {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
      { this.state.days} Days { this.state.hours } Hours { this.state.minutes} Minutes { this.state.seconds } Seconds
      </div>
    )
  }
};
