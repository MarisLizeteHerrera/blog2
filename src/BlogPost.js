import React from 'react';
import { connect, } from 'react-redux';

const BlogPost = ({ blogs }) => (

  <ul>
    { blogs.map((b,i) => {
      return(
        <li key={i}>
          {b}
        </li>
      )
    })
  }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.blogs, };
}

export default connect(mapStateToProps)(TodoList);