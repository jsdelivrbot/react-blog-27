import React, { Component } from 'react'
import { connect }  from 'react-redux'

class PhotosIndex extends Component {
  renderPhotos(){
    console.log('PhotosIndex', this.props.photos);
    return this.props.photos.map( photo => {
      return (
        <li className="list-group-item" key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title}/>
        </li>
      );
    }); 
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderPhotos()}
      </ul>
    );
  }
}

const mapStateToProps = ({photos}) => {
  return { photos };
}

export default connect(mapStateToProps)(PhotosIndex);