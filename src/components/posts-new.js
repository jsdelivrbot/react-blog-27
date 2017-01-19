import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'


import { createPost } from '../actions/index'

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  getClassName(field){
    return `form-group ${field.touched && field.invalid ? 'has-danger' : ''}`;
  }

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created
        // navigate to user to index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      })
      .catch((err) => {
        console.error(err);
        // TODO: Add Alert
      });
  }

  render(){
    const {fields: {title, categories, content}, handleSubmit} = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        <div className={this.getClassName(title)}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>

        <div className={this.getClassName(categories)}  >
          <label>Categories</label>
          <input type="text" className="form-control" {...categories}/>
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={this.getClassName(categories)} >
          <label>Content</label>
          <textarea className="form-control" {...content}/>
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>

      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};

  if (!values.title || values.title === '') {
    errors.title = "Enter a title!";
  }

  if (!values.categories || values.categories === '') {
    errors.categories = "Enter a categories!"
  }
  
  if (!values.content || values.content === '') {
    errors.content = "Enter a content!"
  }

  return errors;
}

// connect: first argument is mapStateToProps, second is mapDispathToProps
// reduxForm: fist is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, {createPost})(PostsNew);

