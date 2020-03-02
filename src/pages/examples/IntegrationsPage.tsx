import React from 'react';
import { useA11yRouteChange, useDocumentTitle } from '../../components/usePatternfly';
import { Integrations } from '../../components';

export default function IntegrationsPage() {
    useA11yRouteChange();
    useDocumentTitle('Examples: Integrations');
    return <Integrations />;
}
