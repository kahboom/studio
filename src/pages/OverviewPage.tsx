import React from 'react';
import { useA11yRouteChange } from '../components/usePatternfly';
import { useDocumentTitle } from '../components/usePatternfly';
import { Overview } from '../components';

export default function OverviewPage() {
  useA11yRouteChange();
  useDocumentTitle('Overview');
  return <Overview />;
}
