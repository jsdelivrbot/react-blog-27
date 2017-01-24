import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import SelectPostsSelector from '../selectors/selected-posts'

class SelectedPostsList extends Component{

  renderPosts () {
    return this.props.posts.map( (post) => {
      return(
        <tr key={post.id} valign="bottom">
            <td>
              <Link to={"/posts/" + post.id}> 
                <strong> {post.title} </strong> 
              </Link>
            </td>
        </tr>
      );
    });
  }

  render(){
    return(
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>
                Title
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

const mapStateToProps = state => {
  return { posts: SelectPostsSelector(state) };
};

export default connect(mapStateToProps)(SelectedPostsList);