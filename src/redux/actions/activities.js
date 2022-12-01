//import axios from "axios";
export const CREATE_ACTIVITY ='CREATE_ACTIVITY';
export const GET_ACTIVITIES='GET_ACTIVITIES';
export const FILTER_ACTIVITY='FILTER_ACTIVITY';
export const DELETE_ACTIVITY='DELETE_ACTIVITY'; 
export const UPDATE_ACTIVITY ='UPDATE_ACTIVITY';
export const DELETE_ACTIVITY_OF_COUNTRY='DELETE_ACTIVITY_OF_COUNTRY';
export const ERRORA='ERROR';

const apiURL = 'https://appcountries-api.up.railway.app';
//const apiURL = 'http://localhost:3001'

export const createActivity = (activity) =>{
    return async function(dispatch){
         const newActivity = await fetch(`${apiURL}/activities`,{
             method:'POST',
             headers:{
                'Content-type':'application/json',
             },
             body:JSON.stringify(activity) 
         }).then(res=>res.json())
        // const newActivity = await axios.post('http://localhost:3001/activities', activity);

        return dispatch({
             type:CREATE_ACTIVITY,
             payload:newActivity,
         })
    }
}
export const getActivities = ()=>{
    return async function(dispatch){
        await fetch(`${apiURL}/activities`)
            .then(resp => resp.json())
            .then(activity=>{
                dispatch({
                    type:GET_ACTIVITIES,
                    payload:activity
                })
            })
    }
}

export const deleteActivity = (id) => {
  return async function (dispatch) {
    try {
    //const activity = await axios.delete(`http://localhost:3001/activities/${id}`, id);
      await fetch(`${apiURL}/activities/${id}`,{
        method:'DELETE',
        headers:{'Content-type':'application/json'}
        })
        .then(res=>res.json())
      dispatch({
        type: DELETE_ACTIVITY,
        payload: id,
      });
    }catch (e) {
      dispatch({
        type:ERRORA,
        payload:e.message,
      })
    }
  } 
};

export const updateActivity = (act)=>{
  return async function(dispatch){
     const request={
      method: 'PUT',
      headers:{'Content-type':'application/json'},
      body:JSON.stringify(act) 
     }
    try {
      const activUpdate=await fetch(`${apiURL}/activities/update`,request).then(resp=>resp.json())
      // const res = await axios.put(`${apiURL}/activities/update`,act);
      
      dispatch({
        type:UPDATE_ACTIVITY,
        payload:activUpdate,
      })
    } catch (err) {
      dispatch({
        type:ERRORA,
        payloade:err
      })
    }
  }
}


export const filterActivity = (payload) => {
  return {
    type: FILTER_ACTIVITY,
    payload,
  };
};

export const deleteActivityOfCountry = (id)=>{
  return{
    type:DELETE_ACTIVITY_OF_COUNTRY,
    payload:id,
  }
}

