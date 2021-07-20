import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "../TextError/TextError";

const DatePicker = ({label, name, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field type="date" className="form-control" id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default DatePicker;