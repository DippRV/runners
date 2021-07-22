import {Formik, Form} from 'formik';
import GetEmptyUserFilterData from "./GetEmptyUserFilterData";
import UserFilterSchema from "./UserFilterSchema";
import FormikControl from "../../form/FormikControl";
import React from "react";

const FilterUserFormik = (props) => {
    const initialValues = GetEmptyUserFilterData();
    const validationSchema = UserFilterSchema;
    const distanceOptions = [
        {key: '3 km', value: 3},
        {key: '5 km', value: 5},
        {key: '10 km', value: 10}
    ];
    const onSubmit = (values, onSubmitProps) => {
        if (props.FilterData(values)) {
            alert("Data is filtered");
        } else {
            alert("Server error");
        }
        onSubmitProps.setSubmitting(false);
    }
    const handleReset = (resetForm) => {
        props.ResetFilter();
        resetForm();
    }
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {
                (formik) => {
                    return (
                        <Form className='mt-3'>
                            <legend>Filters:</legend>
                            <div className={'row'}>
                                <div className='col-4'>
                                    <FormikControl name='startDate' label='Earliest date' type='date' control='input'/>
                                </div>
                                <div className='col-4'>
                                    <FormikControl name='endDate' label='Latest date' type='date' control='input' />
                                </div>
                                <div className='col-4'>
                                    <FormikControl control='checkbox' label='Distance' options={distanceOptions} name='distances'/>
                                </div>
                            </div>
                            <div className={'row mt-4'}>
                                <div className='col-4'>
                                    <FormikControl label='Minimum payment' name='startPayment' type='number' control='input'/>
                                </div>
                                <div className='col-4'>
                                    <FormikControl label='Maximum payment' name='endPayment' type='number' control='input'/>
                                </div>
                                <div style={{display: 'flex', alignItems: 'flex-end'}} className={'form-group col-4'}>
                                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={'btn btn-primary'}>Filter data</button>
                                    <button type="reset" className={'btn btn-primary mx-3'} onClick={handleReset.bind(null, formik.resetForm)}>Reset</button>
                                </div>
                            </div>
                        </Form>
                    );
                }}
        </Formik>
    );
};

export default FilterUserFormik;