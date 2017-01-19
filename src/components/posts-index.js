import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { fetchPosts } from '../actions/index'

class PostsIndex extends Component{
  componentWillMount() {
    this.props.fetchPosts();
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
        </tr>
      );
    });
  }

  render(){
    console.log(this.props);
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">Add a Post</Link>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                Title
              </th>
              <th>
                Categories
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

export default connect(mapStateToProps,  {fetchPosts})(PostsIndex);