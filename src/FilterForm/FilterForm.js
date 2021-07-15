import {Formik, Field, Form, ErrorMessage} from 'formik';
import GetEmptyUserFilterData from "../Validation/UserFilter/GetEmptyUserFilterData";
import UserFilterSchema from "../Validation/UserFilter/UserFilterSchema";
import TextError from "../Validation/TextError/TextError";
import './FilterForm.scss'

const FilterForm = ({FilterData}) => {
    const onSubmit = (values, onSubmitProps) => {
        if (FilterData(values)) {
            alert("Data is filtered");
        } else {
            alert("Server error");
        }
        onSubmitProps.setSubmitting(false);
    }
    return (
        <Formik onSubmit={onSubmit}
                validationSchema={UserFilterSchema}
                initialValues={GetEmptyUserFilterData()}
        >
            {
                formik => {
                    return (
                        <Form className='mt-3'>
                            <legend>Filters:</legend>
                            <div className={'row'}>
                                <div className={'form-group col-4'}>
                                    <label htmlFor={'key-startDate'}>Earliest date</label>
                                    <Field type="date" name={'startDate'} id={'key-startDate'} className={'form-control'}/>
                                    <ErrorMessage name='startDate' component={TextError}/>
                                </div>
                                <div className={'form-group col-4'}>
                                    <label htmlFor={'key-endDate'}>Latest date</label>
                                    <Field type="date" name={'endDate'} id={'key-endDate'} className={'form-control'}/>
                                    <ErrorMessage name='endDate' component={TextError}/>
                                </div>

                                <div className={'form-group col-4'}>
                                    <label htmlFor={'checkboxes'}>Distance</label>
                                    <div id={'checkboxes'}>
                                        <Field type="checkbox" id={'3km'} className={'distanceCheckbox'}/>
                                        <label htmlFor={'3km'} className={'form-check-label'}>3 km</label>
                                        <Field type="checkbox" id={'5km'} className={'distanceCheckbox'}/>
                                        <label htmlFor={'5km'} className={'form-check-label'}>5 km</label>
                                        <Field type="checkbox" id={'10km'} className={'distanceCheckbox'}/>
                                        <label htmlFor={'10km'} className={'form-check-label'}>10 km</label>
                                    </div>
                                </div>


                            </div>
                            <div className={'row mt-4'}>
                                <div className={'form-group col-4'}>
                                    <label htmlFor={'key-minPay'}>Minimum payment</label>
                                    <Field type="number" className={'form-control'} name={'minPay'} id={'key-minPay'}/>
                                    <ErrorMessage name='minPay' component={TextError}/>
                                </div>
                                <div className={' col-4 form-inline'}>
                                    <label htmlFor={'key-maxPay'}>Maximum payment</label>
                                    <Field type="number" className={'form-control'} name={'maxPay'} id={'key-maxPay'}/>
                                    <ErrorMessage name='maxPay' component={TextError}/>
                                </div>
                                <div className={'form-group col-4 divBtnFilter'}>
                                    <button type="submit" disabled={!(formik.isValid && formik.dirty)} className={'btn btn-primary btnFilter'}>Filter data</button>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default FilterForm;