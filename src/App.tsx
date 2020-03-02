import 'react-app-polyfill/ie11';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppLayout, LazyRoute, SwitchWith404 } from './components/usePatternfly';
import './App.scss';

const navItems = [
  {
    title: 'Overview',
    to: '/',
    exact: true,
  },
  {
    title: 'Examples',
    to: '/examples',
    items: [
      { to: '/examples/integrations', title: 'Integrations' },
    ],
  }
];

const getOverviewPage = () => import('./pages/OverviewPage');
const getIntegrationsPage = () => import('./pages/examples/IntegrationsPage');

export const App = () => {
  const history = useHistory();
  const logoProps = React.useMemo(
    () => ({
      onClick: () => history.push('/'),
    }),
    [history]
  );
  return (
    <AppLayout
      logo={'Syndesis D3'}
      logoProps={logoProps}
      navVariant={'vertical'}
      navItems={navItems}
      navGroupsStyle={'expandable'}
    >
      <SwitchWith404>
        <LazyRoute path="/" exact={true} getComponent={getOverviewPage} />
        <LazyRoute
          path="/examples/integrations/:page?"
          getComponent={getIntegrationsPage}
        />
      </SwitchWith404>
    </AppLayout>
  );
};
