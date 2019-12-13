import React from 'react';
import './BasicHover.scss';

export interface IBasicHover {}

// @ts-ignore
const Hover = ({ onHover, children }) => (
  <div className={'hover'}>
    <div className={'hover__no-hover'}>{children}</div>
    <div className={'hover__hover'}>{onHover}</div>
  </div>
);

const BasicHover: React.FunctionComponent<IBasicHover> = () => {
  return (
    <Hover onHover={<div> Show this on hover </div>}>
      <div> Show on no hover </div>
    </Hover>
  );
};

export default BasicHover;
