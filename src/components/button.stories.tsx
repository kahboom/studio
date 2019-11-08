import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('red',
    () => <Button color={select('color', { Red: 'red', Dark: 'darkred' }, 'red')} onClick={action('clicked')}/>
  )
  .add('blue',
    () => <Button color={text('color', 'blue')} onClick={action('clicked')}/>
  )
  .add('purple', () => <Button color='purple' onClick={action('clicked')}/>);
