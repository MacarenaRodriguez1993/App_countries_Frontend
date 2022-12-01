import React, { useState } from "react";
import '../filterByName/filter.css';
import {useDispatch} from 'react-redux';
import {getCountryByName} from '../../../redux/actions/countries'



const Filtros = ()=>{

    const dispatch=useDispatch();

    let [state,setState] = useState({
        search:'', 
    })

    const handleChange =(event)=>{
        setState({
            search:event.target.value
        });
        dispatch(getCountryByName(event.target.value));
    }
    
    return(
        <>
            <form className="formSearch" onSubmit={e=>e.preventDefault()}>
                <label>Search :</label>
                <input 
                    type="search"
                    name='country'
                    placeholder="ex.argentina"  
                    value={state.search}
                    onChange={(event)=>handleChange(event)}
                />
            </form>
        </>
    );
}

export default Filtros;