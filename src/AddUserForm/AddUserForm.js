import {Formik, Form, Field, ErrorMessage} from 'formik';
import InputMask from 'react-input-mask';
import UserSchema from "../Validation/User/UserSchema";
import GetEmptyUserData from "../Validation/User/GetEmptyUserData";
import GetRuFormatOfDate from "../ReformatFunctions/GetRuFormatOfDate";
import GetFormatOfPhone from "../ReformatFunctions/GetFormatOfPhone";
import TextError from "../Validation/TextError/TextError";

const AddUserForm = ({AddUser}) => {
    const onSubmit = (values, onSubmitProps) => {
        const date = GetRuFormatOfDate(values.date);
        const phone = GetFormatOfPhone(values.phone);
        const updatedValues = { ...values, date, phone};
        if (AddUser(updatedValues)) {
            onSubmitProps.resetForm();
            alert("Data added");
        }
        else {
            alert("Server error");
        }
        onSubmitProps.setSubmitting(false);

    };

    return (
        <Formik initialValues={GetEmptyUserData()}
                onSubmit={onSubmit}
                validationSchema={UserSchema}>
            {
                formik => {
                    return (
                        <Form className={'mt-3'}>
                            <legend>Contact info:</legend>
                            <div className='row'>
                                <div className={'col'}>
                                    <div className="form-group">
                                        <label htmlFor={"name-key"}>Name</label>
                                        <Field type="text" className="form-control" id="name-key" name="name" placeholder="Full name"/>
                                    </div>
                                    <ErrorMessage name='name' component={TextError}/>
                                </div>
                                <div className={'col'}>
                                    <div className="form-group col">
                                        <label htmlFor="email-key">Email address</label>
                                        <Field type="email" className="form-control" id="email-key" name="email" placeholder="name@example.com"/>
                                    </div>
                                    <ErrorMessage name='email' component={TextError}/>
                                </div>
                            </div>


                            <div className='row mt-2'>
                                <div className={'col'}>
                                    <div className="form-group">
                                        <label htmlFor="date-key">Calendar</label>
                                        <Field type="date" className="form-control" id="date-key" name="date" />
                                    </div>
                                    <ErrorMessage name='date' component={TextError}/>
                                </div>

                                <div className={'col'}>
                                    <div className="form-group">
                                        <label htmlFor="phone-key">Phone number:</label>
                                        <Field name='phone'>
                                            {
                                                props => {
                                                    const {field, form, meta} = props;
                                                    console.log(props);
                                                    return (
                                                        <InputMask type={"tel"} id="phone-key" className={"form-control"}
                                                                   mask={"+7 (999) 999-9999"}  alwaysShowMask={true} value='' {...field} />
                                                    )
                                                }
                                            }
                                        </Field>
                                    </div>
                                    <ErrorMessage name='phone' component={TextError}/>
                                </div>
                            </div>

                            <div className={'row mt-2'}>
                                <div className={'col'}>
                                    <div className="form-group">
                                        <label htmlFor="distance-key">Distance:</label>
                                        <Field as="select" type={'number'} className="form-control" id="distance-key" name="distance"
                                               style={{appearance: 'auto'}}>
                                            <option value={0}></option>
                                            <option value={3}>3 km</option>
                                            <option value={5}>5 km</option>
                                            <option value={10}>10 km</option>
                                        </Field>
                                    </div>
                                    <ErrorMessage name='distance'  component={TextError}/>
                                </div>

                                <div className={'col'}>
                                    <div className="form-group">
                                        <label htmlFor="payment-key">Payment:</label>
                                        <Field type="number" className="form-control" id="payment-key" placeholder="500" name="payment" />
                                    </div>
                                    <ErrorMessage name='payment' component={TextError}/>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty)}>Add user</button>
                            </div>
                        </Form>
                    );
                }
            }
    </Formik>
    );
}

export default AddUserForm;