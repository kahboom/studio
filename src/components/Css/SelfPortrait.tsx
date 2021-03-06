import React from 'react';
import './SelfPortrait.scss';

export interface ISelfPortrait {}

const SelfPortrait: React.FunctionComponent<ISelfPortrait> = () => {
  //    <div className={'container'} onMouseOver={'makeVisible'}>
  return (
    <div className={'container'}>
      <div className={'heart'}></div>
      <div className={'avatar-ponytail'}></div>
      <div className={'avatar-body'}>
        <div className={'shirt-button'}></div>
        <div className={'heart-button'}>&#10084</div>
      </div>
      <div className={'avatar-hair'}></div>
      <div className={'avatar-head'}></div>
      <div className={'avatar-neck'}></div>
      <div className={'avatar-face'}>
        <div className={'eyes'}></div>
        <div className={'glasses'}>
          <div className={'left'}>
            <div className={'shine'}></div>
          </div>
          <div className={'right'}>
            <div className={'shine'}></div>
          </div>
        </div>
        <div className={'cheeks'}></div>
      </div>
    </div>
  );
};

export default SelfPortrait;
