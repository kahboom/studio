import { FormikErrors, FormikProps } from 'formik';
import * as React from 'react';
import { IAutoFormActions, IFormDefinition, IFormErrors } from './models';
export interface IAutoFormProps<T> {
  /**
   * A map of configuration properties as returned by the Syndesis API
   */
  definition: IFormDefinition;
  /**
   * The initial value that should be set on the form
   */
  initialValue?: T;
  /**
   * If the passed in value is valid or not
   */
  isInitialValid?: boolean;
  /**
   * If all fields in the form are required or not
   */
  allFieldsRequired?: boolean;
  /**
   * Map of custom components, each key maps to the 'type'
   * property of an IFormDefinitionProperty
   */
  customComponents?: {
    [type: string]: any;
  };
  /**
   * String to be displayed when a required field isn't set
   */
  i18nRequiredProperty: string;
  /**
   * String to be displayed when some or all properties are required
   */
  i18nFieldsStatusText?: string;
  /**
   * Callback function that will be called when the form is submitted
   */
  onSave?: (value: T, autoFormBag: IAutoFormActions<T>) => void;
  /**
   * Validation function called whenever a change or blur event occurs on the form
   */
  validate?: (value: T | any) => IFormErrors<T> | Promise<IFormErrors<T>> | undefined;
  /**
   * Validation function called to determine if the initial values are valid
   */
  validateInitial?: (value: T | any) => IFormErrors<T>;
  /**
   * Child component that will receive the form fields and submit handler
   */
  children: (props: IAutoFormChildrenProps<T> & FormikProps<T>) => any;
}
export interface IAutoFormChildrenProps<T> {
  /**
   * Fragment containing all of the form fields
   */
  fields: JSX.Element;
  /**
   * The same fields as an array of separate elements
   */
  fieldsAsArray: JSX.Element[];
  /**
   * Function to trigger a form submit which will then trigger onSave
   */
  validateForm: () => Promise<IFormErrors<T> | FormikErrors<T>>;
}
export declare const AutoForm: <T extends any>(props: IAutoFormProps<T>) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
