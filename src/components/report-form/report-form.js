import React from 'react';

import moment from 'moment';
import Select from 'react-select';

import Block, { HiddenBlock } from './block';

import * as data from '../../data';

import "./report-form.css";

export default class ReportForm extends React.Component {
  state = {
    patients: [],
    patient: '',
    dateFrom: '',
    dateTo: moment().format("YYYY-MM-DD"),
    stool: '',
    vomit: '',
    appetite: '',
    nausea: '',
    PN: '',
    mixtureS: '',
    volumeOneS: '',
    howOftenS: '',
    taste: '',
    reasonForChangeS: '',
    tube: '',
    mixtureEN: '',
    volumeOneEN: '',
    howOftenEN: '',
    reasonForChangeEN: '',
    doctor: '',
    disabled: true
  };

  componentDidMount() {
    const patients = ['Иванов 001', 'Сидоров 002', 'Петров 003']; // TODO: get via fetch
    this.setState({patients: patients})
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };

  handleSelected = ({label, name}) => {
    this.setState({[name]: label});
  };

  handleSubmit = () => {
    console.log(this.state);
  };

  _makeOptionsForSelect = (items, name) => {
    return items.map(item => {
      return {value: item, label: item, name: name};
    })
  };

  render() {
    return (
      <div className="report-form">
        <Block>
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(this.state.patients, 'patient')}
            placeholder={"Пациент"}
          />
          <input
            className="form-group form-control border-radius input-item"
            type="date"
            name="dateFrom"
            value={this.state.dateFrom}
            onChange={this.handleChange}
          />
          <input
            className="form-group form-control border-radius input-item"
            type="date"
            name="dateTo"
            value={this.state.dateTo}
            onChange={this.handleChange}
          />
        </Block>

        <Block>
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.stool, 'stool')}
            placeholder={"Стул"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.vomit, 'vomit')}
            placeholder={"Рвота"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.nausea, 'nausea')}
            placeholder={"Тошнота"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.appetite, 'appetite')}
            placeholder={"Аппетит"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.PN, 'PN')}
            placeholder={"Парантеральное питание"}
          />
        </Block>

        <HiddenBlock header="Сипинг">
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.mixture, 'mixtureS')}
            placeholder={"Смесь"}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="volumeOneS"
            placeholder="Объем за раз (мл)"
            value={this.state.volumeOneS}
            onChange={this.handleChange}
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control input-item"
            type="number"
            name="howOftenS"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.howOftenS}
            onChange={this.handleChange}
            min={1}
            max={12}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.taste, 'taste')}
            placeholder={"Вкус"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.reasonForChange, 'reasonForChangeS')}
            placeholder={"Причина замены"}
          />
        </HiddenBlock>


        <HiddenBlock header="Энтеральное питание">
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.tube, 'tube')}
            placeholder={"Доступ"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.mixture, 'mixtureEN')}
            placeholder={"Смесь"}
          />
          <input
            className="form-group form-control border-radius input-item"
            type="number"
            name="volumeOneEN"
            placeholder="Объем за раз (мл)"
            value={this.state.volumeOneEN}
            onChange={this.handleChange}
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control border-radius input-item"
            type="number"
            name="howOftenEN"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.howOftenEN}
            onChange={this.handleChange}
            min={1}
            max={12}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.ration, 'ration')}
            placeholder={"Основной рацион"}
          />
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.reasonForChange, 'reasonForChangeEN')}
            placeholder={"Причина замены"}
          />
        </HiddenBlock>

        <Block>
          <div className="d-flex">
            <Select
              className="form-group flex-grow-1 m-1 border-radius"
              onChange={this.handleSelected}
              options={this._makeOptionsForSelect(data.doctors, 'doctor')}
              placeholder={"Диетолог"}
            />
            <button className="btn btn-success m-1 border-radius"
                    type="submit"
                    onClick={this.handleSubmit}>
              Добавить
            </button>
          </div>
        </Block>
      </div>


    )
  }
}

