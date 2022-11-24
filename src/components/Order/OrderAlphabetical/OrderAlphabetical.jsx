import React from "react";
import { useDispatch } from "react-redux";
import {alphabeticalOrder} from '../../../redux/actions/countries'



const OrderAlphabetical = () =>{

    const dispatch = useDispatch();
    const handleOrder = (event)=>{
        dispatch(alphabeticalOrder(event.target.value))
        document.getElementById('orderPopulation').selectedIndex=0;
    }

    return(
        <>
            <label>Order Alphabetical
            <select id='orderAlphabetical' onChange={e=>handleOrder(e)}>
                <option value='ALL'>None</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
            </select>
            </label>
           
        </>
    )
}

export default OrderAlphabetical;