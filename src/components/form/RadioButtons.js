import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../TextError/TextError";

const RadioButtons = ({name, label, options, ...rest}) => {
    return (
        <div className={'form-group'}>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({field}) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key}>
                                    <input type='radio' id={option.value} {...field} value={option.value}
                                           checked={field.value === option.value}/>
                                    <label htmlFor={option.value}>{option.key}</label>
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

export default RadioButtons;