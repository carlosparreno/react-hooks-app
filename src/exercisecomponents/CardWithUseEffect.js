import React, { useState, useEffect } from 'react';

let lifeCicle = ['To be rendered'];
let renderTimes = 0;

const CardWithUseEffects = props => {
  const [lastEffect, setLastEffect] = useState('Nothing yet');

  // This useEfect will be triggered on componentDidMount
  useEffect(() => {
    lifeCicle = [...lifeCicle, 'ComponentDidMount'];
    setLastEffect('ComponentDidMount');
  }, []);

  // This useEfect will be triggered when props.updateTimes changes
  useEffect(() => {
    lifeCicle = [...lifeCicle, 'Props updated'];
  }, [props.updateTimes]);

  // This useEfect will be triggered on componentDidUnmount
  useEffect(() => {
    return () => {};
  }, []);

  renderTimes++;
  lifeCicle = [...lifeCicle, 'Render'];

  return (
    <>
      <p>
        <span role="img" aria-label="emoji">
          👉🏽
        </span>
        This component already receives a prop named 'updateTimes' (defaulted to 0) that will
        increase clicking 'Update Component'
        <br />
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        Create a state: 'lastEffect' (defaulted to 'Nothing yet')
      </p>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        When the component mounts call setLastEffect('ComponentDidMount');
      </p>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        When the component is updated by prop 'updateTimes', call setLastEffect('PropUpdateTimes');
      </p>
      <p>
        <span role="img" aria-label="emoji">
          💪🏻
        </span>
        When the component Unmounts output in the console the message 'ComponentDidUnmount'
      </p>
      <div className="ha-card">
        <div>{`Render number: ${renderTimes}`}</div>
        <div>{`Props updates: ${props.updateTimes}`}</div>
        <div>{`Last effect: ${lastEffect}`}</div>
        <h4>React Life Cicle events:</h4>
        {lifeCicle.map((event, index) => {
          return <div key={index}>{`- ${event}`}</div>;
        })}
      </div>
    </>
  );
};

export default CardWithUseEffects;
