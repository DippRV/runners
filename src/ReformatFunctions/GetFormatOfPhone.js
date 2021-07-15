const GetFormatOfPhone= (phone) => {
    const FormattedPhone = phone.replace(/[^+\d]/g, '');
    return FormattedPhone;
}

export default GetFormatOfPhone;