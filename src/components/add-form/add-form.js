import React from 'react';


import './add-form.css';

export default class AddForm extends React.Component{
  state = {
    name: '',
    id: ''
  };

  onSubmit = (e) => {
    e.preventDefault();
    const {name, id} = this.state;
    console.log("Post to api");
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    })
  };

  onChangeId = (e) => {
    this.setState({
      id: e.target.value
    })
  };

  render() {
    return (
      <form className="add-form d-flex" onSubmit={ this.onSubmit }>
        <input className="mr-1"
               type="text"
               value={ this.state.name }
               onChange={ this.onChangeName }
               placeholder={ "Имя" }
        />
        <input className="mr-1"
               type="number"
               value={ this.state.id }
               onChange={ this.onChangeId }
               placeholder={ "Номер" }
        />
        <button type="submit" className="btn btn-dark"> Добавить </button>
      </form>
    )
  }

}