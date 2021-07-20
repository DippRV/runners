import * as Yup from 'yup';

const UserFilterSchema = Yup.object({
    startData: Yup.string()
        .matches(/^\d{4}\-\d{1,2}\-\d{1,2}$/, 'Invalid date format'),
    endData: Yup.string()
        .matches(/^\d{4}\-\d{1,2}\-\d{1,2}$/, 'Invalid date format'),
    startPayment: Yup.number()
        .integer('Enter an integer number')
        .positive('Enter a positive number'),
    endPayment: Yup.number()
        .integer('Enter an integer number')
        .positive('Enter a positive number'),
    distances: Yup.array()
});

export default UserFilterSchema;