import React from 'react';
import { connect, } from 'react-redux';

class BlogForm extends React.Component{
  state = { name: '', };

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, } = this.props;
    const { name, } = this.state;
    dispatch({ type: 'ADD_BLOG', blog: name, });
    this.setState({ name: '', });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value, });
  }

  render() {
    const { name, } = this.state;

    return(
      <div>
        <h3> Add A Blog</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }

}

export default connect()(BlogForm);