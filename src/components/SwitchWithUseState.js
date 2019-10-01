import React, { useState } from 'react';

const Switch = props => {
  const [switchStatus, setSwitchStatus] = useState(true);

  const handleOnClick = () => {
    setSwitchStatus(!switchStatus);
  }
  return (
    <>
    <button className="ha-button" onClick={handleOnClick}>Switch</button>
    <span>{switchStatus ? 'ON' : 'OFF'}</span>
    </>
  );
};

export default Switch;
