import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchPosts } from '../actions/index'

class PostIndex extends Component{
  componentWillMount() {
    console.log('Call Action creator to fetch blog posts.', this.props);
    this.props.fetchPosts();
  }

  renderBlog ({id, title, categories}) {
    return(
      <tr key={id} valign="bottom">
        <td>{title}</td>
        <td>{categories}</td>
      </tr>
    );
  }

  render(){
    console.log(this.props);
    return(
      <div>
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
            {this.props.posts.map(post => renderPost(post))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default connect(null, {fetchPosts: fetchPosts})(PostIndex);