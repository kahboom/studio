import React from 'react';
import { action } from '@storybook/addon-actions';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { AutoForm } from './AutoForm';
import {
  ActionGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  Grid,
  GridItem,
  PageSection,
} from '@patternfly/react-core';

//import CheckboxSelect from './CheckboxSelect';
//import GroupedSelect from './GroupedSelect';
import TagSelect from './TagSelect';

const stories = storiesOf('Connection/Kafka Broker Selector', module);

stories.addDecorator(withKnobs);

stories.add('Grouped Select', () => {
  const definition = {
    uris: {
      arrayDefinition: {
        cluster: {
          defaultValue: 'my-cluster',
          displayName: 'Cluster',
          enum: [
            {
              label: 'my-cluster',
              value: 'my-cluster',
            },
            {
              label: 'second-cluster',
              value: 'second-cluster',
            },
          ],
          order: 0,
          required: true,
          type: 'text',
        },
        host: {
          dataList: ['172.0.0.1', '172.0.0.2', '172.0.0.3'],
          //description: '* TLS is not currently supported',
          displayName: 'Host',
          order: 1,
          placeholder: 'Select a host',
          required: true,
          type: 'text',
          isMulti: true,
        },
        hostTest: {
          dataList: ['foo', 'bar', 'cheese'],
          displayName: 'Host Test',
          order: 1,
          placeholder: 'Property name',
          required: true,
          type: 'text',
          isMulti: true,
        },
        type: {
          defaultValue: 'plain',
          displayName: 'Type',
          enum: [
            {
              label: 'Plain',
              value: 'plain',
            },
            /*{
              label: 'TLS',
              value: 'tls',
            },*/
          ],
          order: 2,
          required: true,
          type: 'text',
        },
        port: {
          displayName: 'Port',
          order: 3,
          required: true,
          type: 'number',
        },
      },
      arrayDefinitionOptions: {
        arrayControlAttributes: {
          className: 'form-group with-rule-filter-form__action',
        },
        formGroupAttributes: {
          className: 'with-rule-filter-form__group',
        },
        i18nAddElementText: '+ Add another URI',
        minElements: 1,
      },
      required: true,
      type: 'array',
    },
  };

  const initialValue = {
    uris: [
      {
        type: 'plain',
        cluster: 'my-cluster',
        port: 9092
      },
      {
        type: 'plain',
        host: '172.0.0.1',
        cluster: 'my-cluster',
        port: 9093
      },
    ]
  };

  return (
    <PageSection>
      <Grid gutter={'md'}>
        <GridItem span={6}>
          <Card>
            <CardHeader>Kafka Message Broker URIs</CardHeader>
            <CardBody>
              <AutoForm
                definition={object('Definition', definition)}
                initialValue={object('Initial Value', initialValue)}
                i18nRequiredProperty={text(
                  'i18nRequiredProperty',
                  'This property is required'
                )}
                validate={action('validate')}
                validateInitial={action('validateInitial')}
                onSave={(val, bag) => {
                  bag.setSubmitting(false);
                  action('onSave')(val);
                }}
              >
                {({ fields, handleSubmit }) => (
                  <Form
                    isHorizontal={true}
                    className={''}
                    onSubmit={handleSubmit}
                  >
                    {fields}
                    <ActionGroup className='form-array-action'>
                      <Button type={'submit'} variant={'primary'}>
                        Submit
                      </Button>
                      <Button variant={'secondary'}>Cancel</Button>
                    </ActionGroup>
                  </Form>
                )}
              </AutoForm>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </PageSection>
  );
});

stories.add('Tag Select', () => {
  return (
    <TagSelect/>
  );
});

stories.add('Checkbox Select', () => {
  return (
    <></>
  );
});
