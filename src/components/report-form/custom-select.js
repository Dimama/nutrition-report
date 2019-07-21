import React from "react";

import Select from 'react-select';


const CustomSelect = ({name, placeholder, options, handleSelected}) => {

  return (<div title={ placeholder }>
            <Select
              className="form-group border-radius"
              onChange={ (option, {action}) => handleSelected(option, action, name) }
              options={ options }
              placeholder={ placeholder }
              blurInputOnSelect={ true }
              isClearable={ true }
            />
          </div>)
};

export default CustomSelect;
