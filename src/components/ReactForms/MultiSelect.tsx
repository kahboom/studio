/**
 * Example borrowed from gist
 * https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706
 */

import React from 'react';
import { Field, FieldProps, Form, Formik, FormikHelpers, FormikProps } from 'formik';
import Select from 'react-select';
import { OptionsType, ValueType } from 'react-select/src/types';

import './MultiSelect.scss';

export interface IMultiSelect {}


export interface FormValues {
  singleLanguage: string;
  multiLanguages: string[];
}

const defaultValues: FormValues = {
  singleLanguage: '',
  multiLanguages: []
};

// Some dummy language data
const languageOptions = [
  {
    label: 'Chinese',
    value: 'zh-CN'
  },
  {
    label: 'English (US)',
    value: 'en-US'
  },
  {
    label: 'English (GB)',
    value: 'en-GB'
  },
  {
    label: 'French',
    value: 'fr-FR'
  },
  {
    label: 'Spanish',
    value: 'es-ES'
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
      <div className='more'>
        <p>
          This sandbox has been created to demonstrate the use of react-select's
          multi property with Formik. The field value is formatted as an array
          of strings.
        </p>
        <p>
          The code was initially shared in{' '}
          <a
            href='https://gist.github.com/hubgit/e394e9be07d95cd5e774989178139ae8#gistcomment-2887706'
            target='_blank'
            rel='noopener'
          >
            this gist
          </a>
          .
        </p>
      </div>
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
        name='singleLanguage'
        options={languageOptions}
        component={CustomSelect}
        placeholder='Select a language...'
        isMulti={false}
      />
      <Field
        className='custom-select'
        name='multiLanguages'
        options={languageOptions}
        component={CustomSelect}
        placeholder='Select multi languages...'
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
      <button type='submit'>Submit Form</button>
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

const MultiSelect: React.FunctionComponent<IMultiSelect> = () => {
  return (

    <div className='app'>
      <h1 className='title'>Mutliselect form</h1>
      <p className='subtitle'>
        Using{' '}
        <a
          href='https://github.com/jaredpalmer/formik'
          target='_blank'
          rel='noopener'
        >
          Formik
        </a>{' '}
        &{' '}
        <a
          href='https://github.com/JedWatson/react-select'
          target='_blank'
          rel='noopener'
        >
          react-select
        </a>
      </p>
      <MultiSelectForm />
      <MoreInfo />
    </div>
  );
};

export default MultiSelect;
