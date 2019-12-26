import React from 'react';
import './App.css';
import Clock from './Clock';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      today: new Date(),
      toggleDate: true,
    }
  }


  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), 1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState(
      {
        today: new Date(),
      }

    )
  }

  tDate() {
    console.log('clicked');
    console.log(this.state.toggleDate);
    this.setState(
      {
        toggleDate: !this.state.toggleDate,
      }
    )

  }


  render() {
    return (
      <div className="App">
        <h1 className="Header w3-container">
          <i className="fa fa-clock-o"></i>
          &nbsp;Clock With React
        </h1>
        <p><input className="Button" type="Submit" onClick={this.tDate.bind(this)} value={this.state.toggleDate ? "Hide Date" : "Show Date"} /></p>

        <Clock today={this.state.today} toggleDate={this.state.toggleDate}></Clock>
      </div>
    );
  }

}

export default App;
