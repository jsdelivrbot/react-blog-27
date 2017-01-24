import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router'
import _ from 'lodash'

import { createPost } from '../actions/index'

const FIELDS = {
  title:{
    type: 'input',
    label: 'Title for post'
  },
  categories: {
    type: 'input',
    label: 'Enter some categories for this post'
  },
  content: {
    type: 'textarea',
    label: 'Post Content'
  }
};

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  getClassName(fieldHelper){
    return `form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`;
  }

  onSubmit() {
    this.props.createPost(this.props)
      .then(() => {
        // blog post has been created
        // navigate to user to index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        alert('Post is successfully created!');
        this.context.router.push('/');
      })
      .catch((err) => {
        console.error(err);
        alert('Failed to post', err);
        // TODO: Add Alert
      });
  }

  renderField(fieldConfig, field) {
    const fieldHelper = this.props.fields[field]; // object provided by redux-form

    return(
        <div className={this.getClassName(fieldHelper)}>
          <label>{fieldConfig.label}</label>
          <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
          <div className="text-help">
            {fieldHelper.touched ? fieldHelper.error : ''}
          </div>
        </div>
    );
  }

  render(){
    // handle submit is injected by redux-forms
    const { handleSubmit } = this.props;

    return(
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create a New Post</h3>
        {_.map(FIELDS, this.renderField.bind(this))}
        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  _.each(FIELDS, (type, field) => {
    if (!values[field]){
      errors[field] = `Enter a ${field}`;
    }
  });

  return errors;
}

// connect: first argument is mapStateToProps, second is mapDispathToProps
// reduxForm: fist is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostNewForm',
  fields: _.keys(FIELDS),
  validate
}, null, {createPost})(PostsNew);

