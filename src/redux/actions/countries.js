export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const GET_COUNTRY_BY_NAME='GET_COUNTRY_BY_NAME;'
export const FILTER='FILTER';
export const ORDER_ALPHABETICAL='ORDER_ALPHABETICAL';
export const ORDER_POPULATION ='ORDER_POPULATION';
export const  PAGE_NEXT = 'PAGE_NEXT';
export const PAGE_BACK='PAGE_BACK';
export const CLEAR_DETAILS = 'CLEAR_DETAILS';

//const apiURL = 'https://appcountries-api.up.railway.app';
const apiURL = 'http://localhost:3001';
export const getAllCountries = ()=>{
    return function(dispatch){
        fetch(`${apiURL}/countries/`)
            .then(resp => resp.json())
            .then(countries=>{
                dispatch({
                    type:GET_ALL_COUNTRIES,
                    payload:countries
                })
            })
    }
}

export const getCountryDetails= (id) =>{
    return function(dispatch){
        fetch(`${apiURL}/countries/${id}`)
            .then(resp => resp.json())
            .then(countryDetails=>{
                dispatch({
                    type: GET_COUNTRY_DETAILS,
                    payload:countryDetails
                })
            })
    }
}

export const getCountryByName = (name)=>{
    return async function(dispatch){
        await fetch(`${apiURL}/countries?name=${name}`)
            .then(resp=>resp.json())
            .then(countryByName=>{
                dispatch({
                    type:GET_COUNTRY_BY_NAME,
                    payload:countryByName
                })
            })
    }
}

export const clearDetails = ()=>{
    return function(dispatch){
        return dispatch({
            type:CLEAR_DETAILS,
            payload:'',
        })
    }
}

export const filter = (filtro) => {
    return {
      type: FILTER,
      payload:filtro,
    };
};

export const alphabeticalOrder = (order)=>{
    return{
        type:ORDER_ALPHABETICAL,
        payload:order,
    }
}

export const populationOrder = (order) => {
    return{
        type:ORDER_POPULATION,
        payload:order,
    }
}

export const pageNext = ()=>{
    return {
        type:PAGE_NEXT,
        
    }
}

export const pageBack = ()=>{
    return{
        type:PAGE_BACK,
    }
}
