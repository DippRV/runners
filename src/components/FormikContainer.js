import React from 'react';
import {Formik, Form} from 'formik'

const FormikContainer = (props) => {
    const {initialValues, validationSchema, onSubmit, ...rest} = props;
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
        >
            {
                () => {
                return (
                    <Form {...rest}>
                    </Form>
                );
            }}
        </Formik>
    );
};

export default FormikContainer;
