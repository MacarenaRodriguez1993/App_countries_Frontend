import React from 'react';
import '../FormCardCountry/formCardCountry.css'

const FormCardCountry = ({id,name,image , state, setState})=>{

    const handleClose = ()=>{
        setState({
            ...state,
            countries:state.countries.filter(c=> c!==id)
        })
    }

    return(
        <div className='formCardCountry'>
            <div className='headerCardCountry'>
                <button id='exitActiv' onClick={handleClose}>x</button>
                <h3>{name}</h3>
            </div>
            <div className='content'>
                <img className='imgFlag' src={image} alt="" />
            </div>
          
        </div>
    )
}

export default FormCardCountry;