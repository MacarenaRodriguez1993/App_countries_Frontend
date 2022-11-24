
import React from "react";
import { Link } from "react-router-dom";
import '../home/home.css'
import Country from '../../components/country/Country'
import Filtros from '../Filter/filterByName/filter'
import{useSelector, useDispatch} from 'react-redux';
import {getAllCountries,clearDetails} from '../../redux/actions/countries'
import {getActivities} from '../../redux/actions/activities'
import FilterByContinent from '../Filter/filterByContinent/FilterByContinent'
import FilterByActivity from "../Filter/filterByActivity/FilterByActivity";
import { useEffect } from "react";
import OrderAlphabetical from "../Order/OrderAlphabetical/OrderAlphabetical";
import OrderPopulation from '../Order/OrderPopulation/OrderPopulation'
import Pagination from "../Pagination/Pagination";


const  Home =()=> {

    const allCountries = useSelector((state)=>state.countries)
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getAllCountries());
        dispatch(getActivities())
        dispatch(clearDetails())
    },[dispatch])

    const openActivities = ()=>{
        const a = document.getElementById('bubble');
        a.style.display='grid'
        a.style.position='absolute'
    }

    const currentPage = useSelector((state)=>state.page)
    const  firstIndex = currentPage*10;
    const lastIndex = firstIndex+10;
    const countriesForPage=allCountries?.slice(firstIndex,lastIndex)
   
        return( 
            <div className="home">
                <div className="navBar">
                    <div >
                        <Link className="goBackHome" to='/'>
                            <h3 className="goBackHome"><b>Henry Countries</b></h3>                       
                        </Link>
                    </div>
                   <div>
                    <Filtros/>
                   </div>
                  
                </div>
                
                <div className="filter">
                    <FilterByContinent/>
                    <FilterByActivity/>
                    <OrderAlphabetical/>
                    <OrderPopulation/>
                    <div className="activ">
                        <button className="butActiv" onClick={openActivities}>Activities</button>
                        <div className="bubble" id='bubble'>
                            <Link to='/showActivities'>
                                <button className="createOrShow">Show activities</button>
                            </Link>
                            <Link to='/createActivity'>
                                <button className="createOrShow"> Create Activity</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="home_countries">

                    <div className="countryCard">
                        
                        {
                            countriesForPage?.map((country)=> {
                                return(
                                    
                                    <Country
                                        key={country.id}
                                        id={country.id}
                                        name={country.name}
                                        image={country.flagImage}
                                        continent={country.continent}
                                    />
                                )                
                            })
                        }
                    </div>
                </div>
               
                <Pagination allCountries={allCountries?.length}/> 
            </div>
        );
  };
  
  export default Home;
