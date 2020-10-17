import React, {Component} from 'react';
import './post-add-form.css'

export default class PostAddForm extends Component {

  state = {
    value: ''
  }

  onValueChange = (e) => {
    this.setState({
      value:e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onAddItem(this.state.value)
    this.setState({
      value:''
    });
  }

  render() {

    return (
      <form
        className="bottom-panel d-flex"
        onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="О чем Вы думаете сейчас?"
          className="form-control new-post-label"
          onChange = {this.onValueChange}
          value={this.state.value}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary">
          Добавить
        </button>
      </form>
    );
  };
}
