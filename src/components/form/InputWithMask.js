import React from 'react';
import {ErrorMessage, Field} from 'formik';
import TextError from "../TextError/TextError";
import InputMask from "react-input-mask";

const InputWithMask = ({name, label, ...rest}) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <Field className="form-control" name={name}  >
                {
                    props => {
                        const {field} = props;
                        return (
                            <InputMask id={name} className={"form-control"} {...rest}
                                       value='' {...field} />
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    );
};

export default InputWithMask;