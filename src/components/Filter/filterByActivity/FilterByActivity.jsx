import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../filterByActivity/filterByActivity.css'
import { filterActivity } from '../../../redux/actions/activities'


const FilterByActivity = ()=>{

    const dispatch =useDispatch();
    let allActivities = useSelector((state)=>state.activities)
    let [filterByActivity,setFilterByActivity] = useState({
        filterActivity:'',
    })
    
    useEffect(()=>{
        dispatch(filterActivity(filterByActivity.filterActivity))
    },[dispatch,filterByActivity.filterActivity])

    const activities = Array.from(
        new Set (allActivities?.map((act)=>act.name)))
        .sort();
    const handleChange = (event)=>{
        
        setFilterByActivity((state)=>{
            return {
                ...state,
                filterActivity:event.target.value
            }
        })
    }
    return(
        <>
            <label>Filter by Activity
            <select id="activity" onChange={(event)=> handleChange(event)} >
                <option value="ALL">All</option>
                {
                    activities?.map((activity,i)=>{
                        return(
                            <option key={i} value={activity}>
                                {activity}
                            </option>
                        )
                    })
                }
            </select>
            </label>
         
        </>
    );
}

export default FilterByActivity;