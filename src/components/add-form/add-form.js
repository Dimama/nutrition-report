import React from 'react';

import './add-form.css';
import APIService from "../../api-service";


export default class AddForm extends React.Component{

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  apiService = new APIService();

  state = {
    name: '',
    disabled: true
  };

  async onSubmit (e)  {
    e.preventDefault();
    const { name } = this.state;
    try {
      const message = await this.apiService.addPatient(name);
      alert(message);
    } catch (e) {
      alert(e);
    }
  };

  onChangeId = (e) => {
    const disabled = (e.target.value === "");
    this.setState({name: e.target.value, disabled: disabled})
  };

  render() {
    return (
      <form className="add-form d-flex" onSubmit={ this.onSubmit }>
        <input className="mr-1 border-success border-radius"
               name="name"
               value={ this.state.name }
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