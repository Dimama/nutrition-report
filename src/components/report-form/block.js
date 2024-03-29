import React from 'react';

import './report-form.css';

const Block = ({children, header}) => {
  return (
    <div className="card border-success mb-1 select border-radius">
      <div className="card-header">{ header }</div>
      <div className="card-body">
        { children }
      </div>
    </div>
  );
};

class HiddenBlock extends React.Component {

  state = {
    isHidden: this.props.isHidden
  };

  handleClick = () => {
    this.setState({isHidden: !this.state.isHidden})
  };

  render() {
    const {children, header} = this.props;
    const bodyStyle = this.state.isHidden ? "card-body my-hidden" : "card-body";
    const btnStyle = this.state.isHidden ? "btn-success fa fa-caret-down border-radius" :
                                           "btn-success fa fa-caret-up border-radius";

    return (
      <div className="card border-success mb-1 select border-radius">
        <div className="card-header d-flex justify-content-between">
          { header }
          <button className={btnStyle} onClick={this.handleClick} />
        </div>
        <div className={bodyStyle}>
          { children }
        </div>
      </div>
    );
  }
}

export default Block;
export { HiddenBlock };