import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index'
import { Link } from 'react-router'

class PostsShow extends Component {
  
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(id) {
    
  }
  
  render() {
    const { post } = this.props;
    if (!post) return <div>Loading ....</div>

    return (
      <div>
        <h3>{post.title}</h3>
        <h6>{post.categories}</h6>
        <p>{post.content}</p>
        <Link to="/">Back</Link>
        <button 
          className={"btn-danger pull-xs-right"}
          onClick={this.onDeleteClick.bind(this)}>
          Delete</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    post: state.posts.post
  }
}
export default connect(mapStateToProps, {fetchPost})(PostsShow);