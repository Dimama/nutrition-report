import React from 'react';

import './add-form.css';


export default class AddForm extends React.Component{
  state = {
    id: '',
    disabled: true
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    console.log("Post to api");
  };

  onChangeId = (e) => {
    const disabled = (e.target.value === "");
    this.setState({id: e.target.value, disabled: disabled})
  };

  render() {
    return (
      <form className="add-form d-flex" onSubmit={ this.onSubmit }>
        <input className="mr-1 border-success border-radius"
               name="id"
               value={ this.state.id }
               onChange={ this.onChangeId }
               placeholder={ "Номер" }
        />
        <button type="submit"
                className="btn btn-success border-radius"
                disabled={ this.state.disabled }
        >
          Добавить
        </button>
      </form>
    )
  }

}