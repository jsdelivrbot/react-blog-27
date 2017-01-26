import React, { Component } from 'react'

class GoogleMap extends Component {
  shouldComponentUpdate(){
    return false;
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
    this.map.panTo(nextProps);
  }

  componentDidMount() {
    console.log('GoogleMap componentDidMount', this.refs);
    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng},
      zoom: 8
    });
  }

  render() {
    console.log('GoogleMap render');
    return (
      <div id="map" ref="map" style={{height: "300px", width: "300px"}}></div>
    );
  }
}

export default GoogleMap;