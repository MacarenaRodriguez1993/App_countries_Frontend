import React from "react";
import { Link } from "react-router-dom";
import '../../components/country/country.css'


const  Country= ({id,name,image,continent})=>{

    return(
        
            <div className="card">
                <Link className="click" to={`/countryDatails/${id}`}>
                    <img className="flag" src={image} alt={name} />
                    <h3>{name}</h3>
                    <p>{continent}</p>
                </Link>
            </div>

      
    );
}
export default Country;