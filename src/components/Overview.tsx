import React from 'react';
import {
    PageSection,
    TextContent,
    Title,
    Text
} from '@patternfly/react-core';

export const Overview: React.FunctionComponent = () => {
    return (
        <>
            <PageSection>
                <TextContent>
                    <Title size={'3xl'}>Overview</Title>
                    <Text>
                        <code>syndesis-d3</code> is Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </Text>

                    <Title size={'xl'} headingLevel={'h2'}>
                        Cursus Mattis
                    </Title>
                    <Text>
                        Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Curabitur blandit tempus porttitor.
                    </Text>
                </TextContent>
            </PageSection>
        </>
    );
};
