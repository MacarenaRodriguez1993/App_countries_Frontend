import { CREATE_ACTIVITY } from "../actions/activities";
import { 
    GET_ALL_COUNTRIES,
    GET_COUNTRY_DETAILS,
    GET_COUNTRY_BY_NAME,
    FILTER,ORDER_ALPHABETICAL,
    ORDER_POPULATION,PAGE_NEXT,
    PAGE_BACK,
    CLEAR_DETAILS,
} from "../actions/countries";
import {GET_ACTIVITIES,FILTER_ACTIVITY,DELETE_ACTIVITY} from '../actions/activities'

const initialState ={
    allCountries: [],
    countryDetails:{},
    activities:[],
    countries:[],
    filterByCountry:'ALL',
    filterByActivity:'ALL',
    orderAlphabetical:'ALL',
    orderPopulation:'ALL',
    page:0,

};

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                allCountries:action.payload,
                countries:action.payload
            };

        case GET_COUNTRY_DETAILS:
            return{
                ...state,
                countryDetails:action.payload
            }
        case CLEAR_DETAILS:
            return{
                ...state,
                countryDetails:action.payload
                    
            }
        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries:action.payload,
                page:0
            }

        case CREATE_ACTIVITY:
            return{
                ...state,
                activities:[...state.activities,action.payload]
            }
       
        case GET_ACTIVITIES:
            return{
                ...state,
                activities:action.payload
            }
        // case DELETE_ACTIVITY:
        //     const actFilt=state.countryDetails
        //     console.log('ola'+actFilt)
        //     return{
        //         ...state,
        //         activities:actFilt
        //     }
        case DELETE_ACTIVITY:
            console.log('payload'+ action.payload.id)
            return {
                ...state,
                activities: state.activities.filter((a) => a.id !== action.payload.id),
            };
        case FILTER:
            let filterByCountry=action.payload;
            let allCountries = [...state.allCountries]

            if(filterByCountry !== 'ALL'){
                allCountries = allCountries.filter((c)=> c.continent === filterByCountry)
            }

            return{
                ...state,
                countries:allCountries,
                page:0
            }
        case FILTER_ACTIVITY:
            let filterByActivity=action.payload;
            let allCountriesByActivity =[...state.allCountries]
                if(filterByActivity && filterByActivity!=='ALL'){
                     allCountriesByActivity=allCountriesByActivity.filter(c=> {
                     const activiti = c.activities.filter(a=>{
                     return a.name===filterByActivity; 
                     });
                     return activiti.length && activiti
                })
                
            }
            return{
                ...state,
                countries:allCountriesByActivity,
                page:0
            }
        case ORDER_ALPHABETICAL:
            let order=action.payload;
            if(order==='ALL'){
                return{
                    ...state,
                    countries:[...state.allCountries]
                }
            }
            let countriesOrder;
            let aux=[...state.countries]
            if(order==='A-Z'){
                aux.sort((a,b)=>(a.name < b.name ? -1 : 1));
                countriesOrder = aux;
            }
            if(order==='Z-A'){
                aux.sort((a,b)=>(a.name > b.name ? -1 : 1));
                countriesOrder=aux;
            }
            return{
                ...state,
                countries:countriesOrder,
                orderAlphabetical:order,
                page:0
            }
        case ORDER_POPULATION:
            let orderPopulat=action.payload;
            if(orderPopulat==='ALL'){
                return{
                    ...state,
                    countries:[...state.allCountries]
                }
            }
            let countriesOrderPopulation;
            let auxPopulation=[...state.countries]
            if(orderPopulat==='HIGH - LOW'){
                auxPopulation.sort((a,b)=> (a.population > b.population ? -1 : 1));
                countriesOrderPopulation=auxPopulation;
                
            }
            if(orderPopulat==='LOW - HIGH'){
                auxPopulation.sort((a,b)=>(a.population < b.population ? -1 : 1))
                countriesOrderPopulation=auxPopulation;
            }
            return{
                ...state,
                countries:countriesOrderPopulation,
                orderPopulation:orderPopulat,
                page:0,
            }
        case PAGE_NEXT:
      
            return{
                ...state,
                page:state.page+1,
                
            }
        case PAGE_BACK:
            return{
                ...state,
                page:state.page-1,
            }
        default:
            return {...state}
    }
}

export default rootReducer;