import React from 'react';
import FilterUserFormik from "./FilterUserFormik/FilterUserFormik";
import GetStandartFormatOfDate from "../../ReformatFunctions/GetStandartFormatOfDate";

const FilterUserFormikContainer = ({handleFilteredUsers, ResetFilter, getUsers}) => {

    const FilterData = (values) => {

        const FilterActions = {
            FilterDistance: 'FilterDistance',
            FilterStartPayment: 'FilterStartPayment',
            FilterEndPayment: 'FilterEndPayment',
            FilterStartDate: 'FilterStartDate',
            FilterEndDate: 'FilterEndDate'
        };

        let {startDate, endDate, startPayment, endPayment, distances} = values;
        startPayment = parseInt(startPayment);
        endPayment = parseInt(endPayment);
        startDate =  Date.parse(startDate);
        endDate= Date.parse(endDate);

        let filterActions = [];

        filterActions.push((distances.length > 0) ? FilterActions.FilterDistance : null);
        filterActions.push(!isNaN(startPayment) ? FilterActions.FilterStartPayment : null);
        filterActions.push(!isNaN(endPayment) ? FilterActions.FilterEndPayment : null);
        filterActions.push(!isNaN(startDate) ? FilterActions.FilterStartDate : null);
        filterActions.push(!isNaN(endDate) ? FilterActions.FilterEndDate : null);

        let arrForFiltered = getUsers();

        for (let i=0; i <filterActions.length; i++) {
            switch (filterActions[i]) {
                case FilterActions.FilterDistance:
                    arrForFiltered = arrForFiltered.filter(user => {
                        return distances.includes(user.distance.toString());

                    })
                    break;
                case FilterActions.FilterStartPayment:
                    arrForFiltered = arrForFiltered.filter(user => {
                        return user.payment >= startPayment;
                    })
                    break;
                case FilterActions.FilterEndPayment:
                    arrForFiltered = arrForFiltered.filter(user => {
                        return user.payment <= endPayment;
                    })
                    break;
                case FilterActions.FilterStartDate:
                    arrForFiltered = arrForFiltered.filter(user => {
                        return Date.parse(GetStandartFormatOfDate(user.date)) >= startDate;
                    })
                    break;
                case FilterActions.FilterEndDate:
                    arrForFiltered = arrForFiltered.filter(user => {
                        return  Date.parse(GetStandartFormatOfDate(user.date)) <=  endDate;
                    })
                    break;
                default:
                    break;

            }
        }
        handleFilteredUsers(arrForFiltered);
    }

    return (
        <FilterUserFormik FilterData={FilterData} ResetFilter={ResetFilter} />
    );
};

export default FilterUserFormikContainer;