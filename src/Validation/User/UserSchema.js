import * as Yup from "yup";
import 'yup-phone';

const UserSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    date: Yup.string()
        .matches(/^\d{4}\-\d{1,2}\-\d{1,2}$/, 'Invalid date format')
        .required('Required'),
    phone: Yup.string()
        .phone(null, false,'Invalid phone format')
        .min(17, 'Must be exactly 11 digits')
        .max(17, 'Must be exactly 11 digits')
        .required('Required'),
    distance: Yup.number()
        .positive('Required')
        .integer('Required')
        .required('Required'),
    payment: Yup.number()
        .integer('Enter an integer number')
        .positive('Enter a positive number')
        .required('Required')
});

export default UserSchema;