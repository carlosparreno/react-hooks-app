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
    setLastEffect('PropUpdateTimes');
  }, [props.updateTimes]);

  // This useEfect will be triggered on componentDidUnmount
  useEffect(() => {
    return () => console.log('ComponentDidUnmount');
  }, []);

  renderTimes++;
  lifeCicle = [...lifeCicle, 'Render'];

  return (
    <div className="ha-card">
      <div>{`Render number: ${renderTimes}`}</div>
      <div>{`Props updates: ${props.updateTimes}`}</div>
      <div>{`Last effect: ${lastEffect}`}</div>
      <h4>React Life Cicle events:</h4>
      {lifeCicle.map((event, index) => {
        return <div key={index}>{`- ${event}`}</div>;
      })}
    </div>
  );
};

export default CardWithUseEffects;
