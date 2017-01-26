import React, { Component } from 'react';
import { connect } from 'react-redux'

import GoogleMap from './google-map'

export default class Map extends Component {
  onClick(event) {
    const tongo = {lat: -21.2576638, lng:-175.4094311};
    this.setState(tongo);
  }

  render() {
    return (
      <div>
        <button onClick={this.onClick.bind(this)}>Tonga</button>
        <GoogleMap lat={-4.6837899} lng={55.3090386}/>
      </div>
    );
  }
}
