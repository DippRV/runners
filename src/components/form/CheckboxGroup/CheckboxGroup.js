import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../../TextError/TextError";
import './CheckboxGroup.scss'


const CheckboxGroup = ({name, label, options, ...rest}) => {

    return (
        <div className='form-group' >
            <label>{label}</label>
            <div className='checkboxes'>
                <Field name={name} {...rest}>
                    {
                        ({field}) => {
                            return options.map(option => {
                                return (
                                    <React.Fragment key={option.key}>
                                        <input type='checkbox' className={'distanceCheckbox'} id={option.value} {...field} value={option.value}
                                               checked={field.value && field.value.includes(option.value.toString())}/>
                                        <label className={'form-check-label'} htmlFor={option.value}>{option.key}</label>
                                    </React.Fragment>
                                );
                            });
                        }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default CheckboxGroup;