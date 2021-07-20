import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../../TextError/TextError";
import '../../FilterUserFormikContainer/FilterForm.scss'

const CheckboxGroup = ({name, label, options, ...rest}) => {
    return (
        <div className='form-group checkboxes'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input type='checkbox' className={'distanceCheckbox'} id={option.value} {...field} value={option.value}
                                           checked={field.value.includes(option.value)}/>
                                    <label className={'form-check-label'} htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            );
                        });
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default CheckboxGroup;