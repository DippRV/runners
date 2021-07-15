const GetRuFormatOfDate = (date) => {
    const [Year, Month, Day] = date.split('-');
    const FormattedDate =
        Day +
        "." +
        Month +
        "." +
        Year;
    return FormattedDate;
}

export default GetRuFormatOfDate;