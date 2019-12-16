/**
 * Example borrowed from gist
 * https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706
 */

import React from 'react';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import Select from 'react-select';
import { OptionsType, ValueType } from 'react-select/src/types';

import './TagSelect.scss';

export interface IMultiSelect {}

export interface FormValues {
  hosts: string[];
}

const defaultValues: FormValues = {
  hosts: []
};

const hostOptions = [
  {
    label: '172.0.0.1',
    value: '172.0.0.1'
  },
  {
    label: '172.0.0.2',
    value: '172.0.0.2'
  },
  {
    label: '172.0.0.3',
    value: '172.0.0.3'
  }
];

interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: OptionsType<Option>;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

export const CustomSelect = ({
                               className,
                               placeholder,
                               field,
                               form,
                               options,
                               isMulti = false
                             }: CustomSelectProps) => {
  const onChange = (option: ValueType<Option | Option[]>) => {
    form.setFieldValue(
      field.name,
      isMulti
        ? (option as Option[]).map((item: Option) => item.value)
        : (option as Option).value
    );
  };

  const getValue = () => {
    if (options) {
      return isMulti
        ? options.filter(option => field.value.indexOf(option.value) >= 0)
        : options.find(option => option.value === field.value);
    } else {
      return isMulti ? [] : ('' as any);
    }
  };

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={options}
      isMulti={isMulti}
    />
  );
};

const MoreInfo = () => {
  return (
    <>
      <hr />
    </>
  );
};

const MultiSelectForm = () => {
  const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  };

  const renderForm = (formikBag: FormikProps<FormValues>) => (
    // @ts-ignore
    <Form>
      <Field
        className='custom-select'
        name='hosts'
        options={hostOptions}
        component={CustomSelect}
        placeholder='Select hosts...'
        isMulti={true}
      />
      <button
        type='button'
        className='outline'
        onClick={formikBag.handleReset}
        disabled={!formikBag.dirty || formikBag.isSubmitting}
      >
        Reset
      </button>
      <button type='submit'>Submit</button>
    </Form>
  );

  return (
    <Formik
      initialValues={defaultValues}
      render={renderForm}
      onSubmit={onSubmit}
    />
  );
};

const TagSelect: React.FunctionComponent<IMultiSelect> = () => {
  return (

    <div className='app'>
      <h1 className='title'>Mutliselect form with tags</h1>
      <p className='subtitle'>
        Using{' '}
        <a
          href='https://github.com/jaredpalmer/formik'
          target='_blank'
          rel='noopener noreferrer'
        >
          Formik
        </a>{' '}
        &{' '}
        <a
          href='https://github.com/JedWatson/react-select'
          target='_blank'
          rel='noopener noreferrer'
        >
          react-select
        </a>
      </p>
      <MultiSelectForm />
      <MoreInfo />
    </div>
  );
};

export default TagSelect;
