import React from 'react';
import {Formik, Form} from 'formik'
import GetEmptyUserData from "./GetEmptyUserData";
import UserSchema from "./UserSchema";
import GetRuFormatOfDate from "../../../ReformatFunctions/GetRuFormatOfDate";
import GetFormatOfPhone from "../../../ReformatFunctions/GetFormatOfPhone";
import FormikControl from "../../form/FormikControl";

const AddUserFormik = (props) => {
    const initialValues = GetEmptyUserData();
    const validationSchema = UserSchema;
    const distanceOptions = [
        {key: '', value: 0},
        {key: '3 km', value: 3},
        {key: '5 km', value: 5},
        {key: '10 km', value: 10}
    ];
    const onSubmit = async (values, onSubmitProps) => {
        const date = GetRuFormatOfDate(values.date);
        const phone = GetFormatOfPhone(values.phone);
        const updatedValues = {...values, date, phone};
        const status = await props.AddUser(updatedValues);
        if (status)
        {
            onSubmitProps.resetForm();
            alert("Data added");
        }
        else {
            alert("Server error");
        }
        onSubmitProps.setSubmitting(false);
    };
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form>
                            <legend>Contact info:</legend>
                            <div className='row'>
                                <div className={'col'}>
                                    <FormikControl label='Name' type='text' control='input' name='name' placeholder='Full name'/>
                                </div>
                                <div className={'col'}>
                                    <FormikControl label='Email address'
                                                   name='email' type='email'
                                                   control='input' placeholder='name@example.com'/>
                                </div>
                            </div>


                            <div className='row mt-2'>
                                <div className={'col'}>
                                    <FormikControl label='Calendar' type='date' control='input' name='date'/>
                                </div>

                                <div className={'col'}>
                                    <FormikControl control='inputmask' name='phone' label='Phone number:'
                                    type='tel' mask='+7 (999) 999-9999' alwaysShowMask={true} />
                                </div>
                            </div>

                            <div className={'row mt-2'}>
                                <div className={'col'}>
                                    <FormikControl type="number" control='select'
                                                   name='distance' label='Distance:'
                                                   options={distanceOptions}/>
                                </div>
                                <div className={'col'}>
                                    <FormikControl type="number" control='input' name='payment' label='Payment:' placeholder="500"/>
                                </div>
                            </div>

                            <div className="form-group mt-4">
                                <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Add user</button>
                            </div>
                        </Form>
                    );
                }}
        </Formik>
    );
};

export default AddUserFormik;
