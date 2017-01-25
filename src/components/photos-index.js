import React, { Component } from 'react'
import { connect }  from 'react-redux'
import { Link } from 'react-router'

class PhotosIndex extends Component {
  renderPhotos(){
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
        <div className="text-xs-right">
          <Link to="/" className="btn btn-link">Posts</Link>
          <ul className="list-group">
              {this.renderPhotos()}
          </ul>
        </div>
    );
  }
}

const mapStateToProps = ({photos}) => {
  return { photos };
}

export default connect(mapStateToProps)(PhotosIndex);