import React from "react";
import '../Pagination/pagination.css'
import { useSelector,useDispatch } from "react-redux";
import{pageNext,pageBack} from '../../redux/actions/countries';


const Pagination = ({allCountries}) =>{
    const dispatch =useDispatch();
    const page=useSelector((state)=> state.page)
    let numberPage=Math.ceil(allCountries/10)
    if(numberPage===0){
        numberPage=1;
    }

    const handleNext =()=>{
        if(page+1 !==numberPage) dispatch(pageNext())
    }
    const handleBack = () =>{
        if(page+1!==1)  dispatch(pageBack())
    }
    return(
        <div className="paginator">
            <button className="pageButton" onClick={handleBack} >←back</button>
                {
                    `Page ${page+1} by ${numberPage}`
                }
            <button className="pageButton" onClick={handleNext}>next→</button>
        </div>
    )
}

export default Pagination;