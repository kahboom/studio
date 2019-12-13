import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';
import { create } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

addParameters({
  options: {
    theme: create({
      base: 'light',
    }),
  },
});

/* load the accessibility check addon */
addDecorator(withA11y);

/* load the knobs addon */
addDecorator(withKnobs);

/* load the notes addon */
addDecorator(withNotes);

/* add a responsive viewport */
const newViewports = {
  bp768: {
    name: 'Breakpoint: 768px',
    styles: {
      width: '768px',
      height: '432px',
    },
  },
  bp992: {
    name: 'Breakpoint: 992px',
    styles: {
      width: '992px',
      height: '558px',
    },
  },
  bp1200: {
    name: 'Breakpoint: 1200px',
    styles: {
      width: '1200px',
      height: '675px',
    },
  },
};

addParameters({
  viewport: {
    viewports: {
      ...newViewports,
      ...INITIAL_VIEWPORTS,
    },
  },
});

const req = require.context('../src/components', true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

