import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

//import CheckboxSelect from './CheckboxSelect';
//import GroupedSelect from './GroupedSelect';
import TagSelect from './TagSelect';

const stories = storiesOf('Connection/Kafka Broker Selector', module);

stories.addDecorator(withKnobs);

stories.add('Grouped Select', () => {
  return (
    <p>Grouped Select</p>
  );
});

stories.add('Tag Select', () => {
  return (
    <TagSelect/>
  );
});

stories.add('Checkbox Select', () => {
  return (
    <p>Checkbox Select</p>
  );
});
