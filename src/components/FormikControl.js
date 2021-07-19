import React from 'react';
import Input from "./form/Input";
import Select from "./form/Select";
import RadioButtons from "./form/RadioButtons";
import CheckboxGroup from "./form/CheckboxGroup";
import DatePicker from "./form/DatePicker";
import InputWithMask from "./form/InputWithMask";

const FormikControl = (props) => {
    const {control, ...rest} = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />
        case 'inputmask':
            return <InputWithMask {...rest} />
        case 'select':
            return <Select {...rest} />
        case 'radio':
            return <RadioButtons {...rest} />
        case 'checkbox':
            return <CheckboxGroup {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default:
            return null;
    }
};

export default FormikControl;