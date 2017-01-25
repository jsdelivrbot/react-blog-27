import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { fetchPosts, selectPost, deselectPost } from '../actions/index'
import SelectedPostsList from './posts-selected-list'

class PostsIndex extends Component{
  componentDidMount() {
    console.log('componentDidMount');
    this.props.fetchPosts();
  }

  handlePostSelect({id}, event) {
    event.target.checked ? 
      this.props.selectPost(id) : 
      this.props.deselectPost(id)
  }

  renderPosts () {

    return this.props.posts.map( (post) => {
      return(
          <tr key={post.id} valign="bottom">
            <td>
              <Link to={"/posts/" + post.id}> 
                <strong> {post.title} </strong> 
              </Link>
            </td>
            <td>
              <span className="pull-xs-right">{post.categories}</span>
            </td>
            <td>
              <input 
                className="pull-xs-right" 
                type="checkbox" 
                value={post.title}
                onChange={this.handlePostSelect.bind(this, post)}/>
            </td>
          </tr>
      );
    });
  }

  render(){

    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <div className="text-xs-right">
          <Link to="/photos" className="btn btn-link">Photos</Link>
        </div>
        <div>
          <h3>Selected Posts </h3>
          <SelectedPostsList/>
        </div>
        <h3>All Posts </h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Categories
              </th>
              <th>
                Select
              </th>
            </tr>          
          </thead>
          <tbody>
              {this.renderPosts()}
          </tbody>
        </table>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { posts: state.posts.all };
};

export default connect(mapStateToProps,  {fetchPosts, selectPost, deselectPost})(PostsIndex);