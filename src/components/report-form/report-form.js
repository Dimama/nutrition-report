import React from 'react';
import moment from 'moment';

import CustomSelect from  './custom-select';
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
    ration: '',
    sipping: [{
      mixture: '',
      volumeOne: '',
      howOften: '',
      taste: '',
      reasonForChange: '',
    }],
    EN: [{
      tube: '',
      mixture: '',
      volumeOne: '',
      howOften: '',
      reasonForChange: '',
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
    this.setState({[name]: value}, () => {
      this._checkFill(this.state)});
  };

  handleChangeItem = (e, index, arrayName) => {
    const {name, value} = e.target;
    let changedArray = this.state[arrayName];

    changedArray[index][name] = value;
    this.setState({[arrayName]: changedArray});
  };

  handleSelected = (option, action, name)   => {
    if (action === 'select-option') {
      this.setState({[name]: option.label}, () => {
        this._checkFill(this.state)});
    } else if (action === 'clear') {
      this.setState({[name]: ''}, () => {
        this._checkFill(this.state)})
    }
  };

  handleSelectedItem = (option, action, name, index, arrayName)   => {
    let changedArray = this.state[arrayName];
    if (action === 'select-option') {
      changedArray[index][name] = option.label;
    } else if (action === 'clear') {
      changedArray[index][name] = '';
    }
    this.setState({[arrayName]: changedArray});
  };

  handleSubmit = () => {
    if (this._datesIsCorrect(this.state.dateTo, this.state.dateFrom)) {
      console.log(this.state); // TODO: send request to api
    } else {
      alert("Проверьте введенные даты")
    }
  };

  handleClickAddSipping = () => {
    let sipping = this.state.sipping;
    sipping.push({
      mixture: '',
      volumeOne: '',
      howOften: '',
      taste: '',
      reasonForChange: '',
    });

    this.setState({
      sipping: sipping
    })
  };

  handleClickAddEN = () => {
    let EN = this.state.EN;
    EN.push({
      tube: '',
      mixture: '',
      volumeOne: '',
      howOften: '',
      reasonForChange: '',
    });

    this.setState({
      EN: EN
    })
  };

  _makeSippingList = () => {
    return  this.state.sipping.map((item, index) => {
      return (
        <HiddenBlock header={`Cмесь ${index+1}`} key={index}>
          <CustomSelect
            name="mixture" placeholder="Cмесь" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.mixture)}
            arrayParams={{index: index, arrayName: "sipping"}}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="volumeOne"
            placeholder="Объем за раз (мл)"
            value={this.state.sipping[index].volumeOne}
            onChange={ (e) => this.handleChangeItem(e, index, "sipping") }
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="howOften"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.sipping[index].howOften}
            onChange={ (e) => this.handleChangeItem(e, index, "sipping") }
            min={1}
            max={12}
          />
          <CustomSelect
            name="taste" placeholder="Вкус" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.taste)}
            arrayParams={{index: index, arrayName: "sipping"}}
          />
          <CustomSelect
            name="reasonForChange" placeholder="Причина замены" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.reasonForChange)}
            arrayParams={{index: index, arrayName: "sipping"}}
          />
        </HiddenBlock>
      )
    })
  };

  _makeENList = () => {
    return  this.state.EN.map((item, index) => {
      return (
        <HiddenBlock header={`Cмесь ${index+1}`} key={index}>
          <CustomSelect
            name="tube" placeholder="Доступ" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.tube)}
            arrayParams={{index: index, arrayName: "EN"}}
          />
          <CustomSelect
            name="mixture" placeholder="Cмесь" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.mixture)}
            arrayParams={{index: index, arrayName: "EN"}}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="volumeOne"
            placeholder="Объем за раз (мл)"
            value={this.state.EN[index].volumeOne}
            onChange={ (e) => this.handleChangeItem(e, index, "EN") }
            min={10}
            max={3000}
          />
          <input
            className="form-group form-control input-item border-radius"
            type="number"
            name="howOften"
            placeholder="Частота приема (раз в сутки)"
            value={this.state.EN[index].howOften}
            onChange={ (e) => this.handleChangeItem(e, index, "EN") }
            min={1}
            max={12}
          />
          <CustomSelect
            name="reasonForChange" placeholder="Причина замены" handleSelected={this.handleSelectedItem}
            options={this._makeOptionsForSelect(data.reasonForChange)}
            arrayParams={{index: index, arrayName: "EN"}}
          />
        </HiddenBlock>)
    })
  };

  _datesIsCorrect = (dateTo, dateFrom) => {
    return (moment(dateFrom).isBefore(dateTo) || moment(dateFrom).isSame(dateTo))
  };

  _checkFill = ({patient, doctor, dateTo, dateFrom}) => {
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
            title="Начало периода"
            value={this.state.dateFrom}
            onChange={this.handleChange}
          />
          <input
            className="form-group form-control border-radius input-item"
            type="date"
            name="dateTo"
            title="Конец периода"
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
          <button className="btn btn-success fa fa-plus border-radius" onClick={ this.handleClickAddSipping }/>
        </HiddenBlock>

        <HiddenBlock header="Энтеральное питание">
          { this._makeENList() }
          <button className="btn btn-success fa fa-plus border-radius" onClick={ this.handleClickAddEN }/>
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
            <div className="flex-grow-1 mr-1">
              <CustomSelect
                name="doctor" placeholder="Врач" handleSelected={this.handleSelected}
                options={this._makeOptionsForSelect(data.doctors)}
              />
            </div>
            <button className="form-group btn btn-success fa fa-cloud-upload border-radius"
                    type="submit"
                    onClick={this.handleSubmit}
                    disabled={this.state.disabled}
            />
          </div>
        </Block>
      </div>
    )
  }
}
