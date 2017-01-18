import React from 'react'

const renderBlog = ({id, title, categories}) => {
  return(
    <tr key={id} valign="bottom">
      <td>{title}</td>
      <td>{categories}</td>
    </tr>
  );
}

export default (props) => {
  console.log(props);
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
          {props.posts.map(renderBlog)}
        </tbody>
      </table>
    </div>
  );
}