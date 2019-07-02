import React from 'react';


const Block = ({children, header}) => {
  return (
    <div className="card border-success mb-1 select">
      <div className="card-header">{ header }</div>
      <div className="card-body">
        { children }
      </div>
    </div>
  );
};

export default Block;