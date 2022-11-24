import React ,{useState}from "react";
import { useDispatch, useSelector } from "react-redux";
import '../CreateActivity/createActivity.css'
import {createActivity} from '../../../redux/actions/activities';
import {Link} from 'react-router-dom';
import FormCardCountry from "../../FormCardCountry/FormCardCountry";



const CreateActivity = ()=>{

    const allCountries = useSelector((state)=>state.allCountries);
    const allActivities=useSelector((state)=> state.activities);

    const dispatch = useDispatch();
    const [formActivity,setFormActivity] = useState({
        name:'',
        difficult:0,
        duration:'',
        season:'',
        countries:[]
    });

    const [errors,setErrors]=useState({
        name:''
    })
    let nameActivities=allActivities.map(act=>act.name)
   
    const validate = (state)=>{
        let err={};
        let existingActivity= nameActivities.find(act=> act ===state.name)
       
        if(!state.name) err.name='You must enter a name for the activity';

        if(existingActivity!==undefined) err.name=`The activity " ${state.name} " was already created`;

        if(state.difficult==='0') err.difficult='You must enter a difficulty for the activity'

        if(!state.duration) err.duration='You must enter a duration for the activity'

        if(state.season==='Select Season') err.season = 'You must enter a season for the activity'
        return err;
    }
    const handleChange = (e)=>{
        const{name,value}=e.target;
        setFormActivity({
            ...formActivity,
            [name]:value
        });
        setErrors(validate({...formActivity,[name]:value}))
    }

    
    const onSubmit = (event) =>{
        event.preventDefault();
        dispatch(createActivity(formActivity))
        alert(`Activity "${formActivity.name}" successfully created!`)
        event.target.reset();
        setFormActivity({
            countries:[]
        });
        document.getElementById("countries").selectedIndex = 0;
    }
    const handlerClear=()=>{
        setFormActivity({
            name: "",
            difficult: 0,
            duration: "",
            season: "",
            countries: [],
          });
          document.getElementById('name').value=''
          document.getElementById("difficult").value = 0;
          document.getElementById("duration").value = '';
          document.getElementById("season").selectedIndex = 0;
          document.getElementById("countries").selectedIndex = 0;
    }
    
    const handleCountries = (event)=>{
        if(!formActivity.countries?.includes(event.target.value)){
            setFormActivity({
                ...formActivity,
                countries:[...formActivity.countries,event.target.value]
            })
        }
    }

    return(
        <div className="home">
            <h3 className="titleNav">Create Activity for countries</h3>
            <Link to='/home'><button className="buttonBack"> ← GO HOME</button></Link>
            <div  id='createActivities'>
                <form id='formActivity' onSubmit={(event)=> onSubmit(event)}>
                    <label>Activity name </label>
                    <input 
                        id='name'
                        type='text' 
                        name='name' 
                        value={formActivity.name}
                        placeholder="ex: senderismo" 
                        maxLength={25} 
                        onChange={(event)=>handleChange(event)}
                    />
                    <div className="msjError" >
                    {
                        errors.name && <p>{errors.name}</p>
                    }
                    </div>

                    <label>Difficult </label>
                    <input 
                        id='difficult'
                        type='range' 
                        name='difficult' 
                        value={formActivity.difficult}
                        min={0} 
                        max={5} 
                        step={1} 
                        defaultValue={0}
                        onChange={handleChange}
                    />
                    <div className="msjError" >
                    {
                        errors.difficult && <p>{errors.difficult}</p>
                    }
                    </div>

                    <label>Duration </label>
                    <input 
                        id='duration'
                        type='text' 
                        name='duration'
                        placeholder="ex: 1 hours" 
                        value={formActivity.duration}
                        onChange={handleChange}
                    />
                    <div className="msjError" >
                    {
                        errors.duration && <p>{errors.duration}</p>
                    }
                    </div>

                    <label>Season  </label>
                    <select 
                        id='season'
                        name="season"
                        value={formActivity.season}
                        onChange={handleChange}>
                        <option value="Select Season">Select Season</option>
                        <option value='summer'>Summer</option>
                        <option value='autumn'>Autumn</option>
                        <option value='winter'>Winter</option>
                        <option value='spring'>Spring</option>
                    </select> 
                    <div className="msjError" >
                    {
                        errors.season && <p>{errors.season}</p>
                    }
                    </div>
                    
                    <label>Add Countries</label>
                    <select 
                        id='countries'
                        name='countries'  
                        value={formActivity.countries}
                        onChange={(event)=>handleCountries(event)}>
                        <option value="">Select country</option>
                        {
                            allCountries?.sort((a,b)=>(a.name<b.name ? -1 :1))
                                .map((country)=>{
                                    return(
                                        <option key={country.id} value={country.id}>{country.name}</option>
                                    )
                                })
                        }
                    </select>
                
                    <div className="button">
                        <button type="submit"className="buttonSubmit" 
                            disabled={!formActivity.name ||!formActivity.difficult || !formActivity.duration|| !formActivity.season
                                || errors.name || errors.difficult || errors.duration || errors.season} 
                            >Submit
                        </button>   
                        <button type="button" className="buttonClear" onClick={handlerClear}>clear</button>   
                    </div>
                </form>

                <div className="cardC">
                    {
                        allCountries?.filter((country)=> formActivity.countries.includes(country.id))
                            .map(country=>{
                                return(
                                    <FormCardCountry
                                        key={country.id}
                                        id={country.id}
                                        name={country.name}
                                        image={country.flagImage}
                                        state={formActivity}
                                        setState={setFormActivity}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </div>
    );
}

export default CreateActivity;