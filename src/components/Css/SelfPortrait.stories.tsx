import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SelfPortrait from './SelfPortrait';

storiesOf('SelfPortrait', module)
  .addDecorator(withKnobs)
  .add('testing',
    () => <SelfPortrait/>
  );
