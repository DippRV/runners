import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../Validation/TextError/TextError";

const Select = ({name, label, options, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field as="select" className="form-control" id={name} name={name}
                   style={{appearance: 'auto'}} {...rest}>
                {
                    options.map(option => {
                       return (
                            <option value={option.value} key={option.value}>{option.key}</option>
                       );
                    })
                }
            </Field>
            <ErrorMessage name={name}  component={TextError}/>
        </div>
    );
};

export default Select;