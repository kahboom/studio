import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import BasicHover from './BasicHover';

storiesOf('BasicHover', module)
  .addDecorator(withKnobs)
  .add('default',
    () => <BasicHover/>
  );
