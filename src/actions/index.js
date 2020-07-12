import axios from "axios";

export function employeeList(employees) {
    return {
        type: "EMPLOYEE_LIST",
        employees: employees
    }
}

export function companyList(companies) {
    return {
        type: "COMPANY_DETAILS",
        payload: companies
    }
}

export function addToCompanyList(companyData) {
    return {
        type: "ADD_COMPANY",
        payload: companyData
    }
}


export function loadCompanyData() {
    return function(dispatch) {
        // return axios.get("https://9670e73hjj.execute-api.ap-south-1.amazonaws.com/dev/companies").then(response => {
        //     dispatch(companyList(response.data))
        // })

        dispatch(companyList([
            {
                companyName:"Reliance Digital",
                companyDetails: "Telecom Company",
                label: "Reliance",
                data: [10, 23, 13, 68, 57, 46, 37, 58,79 , 11,12, 33, 44, 56, 16, 10, 23, 23, 64, 57, 46, 37, 58,19 , 31,12, 33, 64, 16, 46]
            },
            {
                companyName:"Airtel",
                companyDetails: "Telecom Company",
                label: "Airtel",
                data: [20, 34, 34, 66, 43, 75, 35, 68, 42, 35,64, 86, 42, 36, 24, 46, 26, 72, 47, 36, 47, 52, 36,47 , 62,63, 33, 32, 8, 42]
            }
        ]))
    }
}

export function addEmployee(employeeData) {
    return {
        type: "ADD_EMPLOYEE",
        employeeData: employeeData
    }
}