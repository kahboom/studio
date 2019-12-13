import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MultiSelect from './MultiSelect';

storiesOf('MultiSelect', module)
  .addDecorator(withKnobs)
  .add('default',
    () => <MultiSelect/>
  );
