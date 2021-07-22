const GetRuFormatOfDate = (date) => {
    const [Year, Month, Day] = date.split('-');

    if (Year && Month && Day && parseInt(Year) && parseInt(Month) && parseInt(Day)) {
        const FormattedDate =
            Day +
            "." +
            Month +
            "." +
            Year;
        return FormattedDate;
    }
   else {
       return null;
    }
}

export default GetRuFormatOfDate;