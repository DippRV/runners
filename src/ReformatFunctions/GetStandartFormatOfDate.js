const GetStandartFormatOfDate = (date) => {
    const [Day, Month, Year] = date.split('.');

    if (Year && Month && Day && parseInt(Year) && parseInt(Month) && parseInt(Day)) {
        const FormattedDate =
            Year +
            "-" +
            Month +
            "-" +
            Day;
        return FormattedDate;
    }
    else {
        return null;
    }
}

export default GetStandartFormatOfDate;