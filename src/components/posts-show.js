import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router'

class PostsShow extends Component {
  
  static contextTypes = {
    router: PropTypes.object
  };
  
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  onDeleteClick(id) {
    this.props.deletePost(this.props.params.id);
    this.context.router.push('/');
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);