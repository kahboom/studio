import React from 'react';
import {IntegrationMap} from "./IntegrationMap";
import {
    PageSection,
    TextContent,
    Text
} from '@patternfly/react-core';

import './Integrations.css';

export const Integrations: React.FunctionComponent = () => {
    return (
        <>
            <PageSection>
                <TextContent>
                    <Text>Examples.</Text>
                    <IntegrationMap/>
                </TextContent>
            </PageSection>
        </>
    );
};
