import React from 'react';

const Switch = props => {
  return (
    <>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        Create a state: 'switchStatus' (defaulted to true)
      </p>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        Create a button with text = Switch that inverts the value of switchStatus
      </p>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        Display in a span the text ON when switchStatus is true. Otherwise: OFF
      </p>
    </>
  );
};

export default Switch;
