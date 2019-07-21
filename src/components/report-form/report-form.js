import React from 'react';

import moment from 'moment';

import CustomSelect from  './custom-select';
import Select from 'react-select'; // TODO: remove
import Block, { HiddenBlock } from './block';

import * as data from '../../data';

import "./report-form.css";


export default class ReportForm extends React.Component {
  state = {
    patients: [],
    patient: '',
    dateFrom: moment().format("YYYY-MM-DD"),
    dateTo: moment().format("YYYY-MM-DD"),
    stool: '',
    vomit: '',
    appetite: '',
    mucositis: '',
    nausea: '',
    sipping: [{
      mixture: '',
      volumeOne: '',
      howOften: '',
      taste: '',
      reasonForChange: '',
    }],
    tube: '',
    EN: [{
      mixture: '',
      volumeOne: '',
      howOften: '',
    }],
    components: '',
    interval: '',
    needs: '',
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
    this._checkFill();
  };

  handleSelected = (option, action, name)   => {
    if (action === 'select-option') {
      this.setState({[name]: option.label});
    } else if (action === 'clear') {
      this.setState({[name]: ''})
    }
    this._checkFill();
  };

  handleSubmit = () => {

    if (this._checkDates(this.state.dateTo, this.state.dateFrom)) {
      console.log(this.state);
    } else {
      alert("Введите корректные даты")
    }

  };

  handleClickAddSipping = () => {

    let sipping = this.state.sipping;
    sipping.push({
      mixture: '',
      volumeOne: '',
      howOften: '',
      taste: '',
      reasonForChangeS: '',
    });

    this.setState({
      sipping: sipping
    })
  };

  handleClickAddEN = () => {
    let EN = this.state.EN;
    EN.push({
      mixture: '',
      volumeOne: '',
      howOften: '',
    });

    this.setState({
      EN: EN
    })
  };

  _makeSippingList = () => {
    return  this.state.sipping.map((item, index) => {
      return (
        <HiddenBlock header={`Cмесь ${index+1}`}>
          <CustomSelect
            name="mixtureS" placeholder="Cмесь"
            options={this._makeOptionsForSelect(data.mixture)}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="volumeOne"
            placeholder="Объем за раз (мл)"
            value={this.state.sipping[index].volumeOne}
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control input-item"
            type="number"
            name="howOftenS"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.sipping[index].howOften}
            min={1}
            max={12}
          />
          <CustomSelect
            name="taste" placeholder="Вкус"
            options={this._makeOptionsForSelect(data.taste)}
          />
          <CustomSelect
            name="reasonForChangeS" placeholder="Причина замены"
            options={this._makeOptionsForSelect(data.reasonForChange)}
          />
        </HiddenBlock>
      )
    })
  };

  _makeENList = () => {
    return  this.state.EN.map((item, index) => {
      return (
        <HiddenBlock header={`Cмесь ${index+1}`}>
          <CustomSelect
            name="mixtureS" placeholder="Cмесь"
            options={this._makeOptionsForSelect(data.mixture)}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="volumeOne"
            placeholder="Объем за раз (мл)"
            value={this.state.EN[index].volumeOne}
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control input-item"
            type="number"
            name="howOftenS"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.EN[index].howOften}
            min={1}
            max={12}
          />
        </HiddenBlock>)
    })
  };

  _checkDates = (dateTo, dateFrom) => {
    return true;
  };

  _checkFill = () => {
    const {patient, doctor, dateTo, dateFrom} = this.state;
    console.log(doctor);
    console.log(!patient, !doctor, !dateTo, !dateFrom);
    this.setState({disabled: (!patient || !doctor || !dateTo || !dateFrom)})
  };

  _makeOptionsForSelect = (items) => {
    return items.map(item => {
      return {value: item, label: item};
    })
  };

  render() {
    return (
      <div className="report-form">
        <Block>
          <CustomSelect
            name="patient" placeholder="Пациент" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(this.state.patients)}
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
          <CustomSelect
            name="appetite" placeholder="Аппетит" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.appetite)}
          />
          <CustomSelect
            name="mucositis" placeholder="Мукозит" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.mucositis)}
          />
          <CustomSelect
            name="nausea" placeholder="Тошнота" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.nausea)}
          />
          <CustomSelect
            name="vomit" placeholder="Рвота" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.vomit)}
          />
          <CustomSelect
            name="stool" placeholder="Стул" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.stool)}
          />
          <CustomSelect
            name="ration" placeholder="Обычная пища" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.ration)}
          />
        </Block>

        <HiddenBlock header="Сипинг">
          { this._makeSippingList()}
          <button className="btn-success fa fa-plus border-radius" onClick={ this.handleClickAddSipping }/>
        </HiddenBlock>

        <HiddenBlock header="Энтеральное питание">
          <Select
            className="form-group border-radius"
            onChange={this.handleSelected}
            options={this._makeOptionsForSelect(data.tube, 'tube')}
            placeholder={"Доступ"}
          />
          { this._makeENList() }
          <button className="btn-success fa fa-plus border-radius" onClick={ this.handleClickAddEN }/>
        </HiddenBlock>

        <HiddenBlock header="Парентеральное питание">
          <CustomSelect
            name="components" placeholder="Компоненты" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.components)}
          />
          <CustomSelect
            name="interval" placeholder="Интервал" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.interval)}
          />
          <CustomSelect
            name="needs" placeholder="Приблизительное обеспечение потребности" handleSelected={this.handleSelected}
            options={this._makeOptionsForSelect(data.needs)}
          />
        </HiddenBlock>

        <Block>
          <div className="d-flex">
            <Select
              className="form-group flex-grow-1 m-1 border-radius"
              onChange={this.handleSelected}
              options={this._makeOptionsForSelect(data.doctors, 'doctor')}
              placeholder={"Врач"}
            />
            <button className="btn btn-success m-1 border-radius"
                    type="submit"
                    onClick={this.handleSubmit}
                    disabled={this.state.disabled}
            >
              Сохранить
            </button>
          </div>
        </Block>
      </div>
    )
  }
}

