/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/home/Home';
import CountryDetails from './components/countryDetails/countryDetails';
import CreateActivity from './components/Activities/CreateActivity/CreateActivity';
import ShowActivities from './components/Activities/ShowActivities/ShowActivities';


function App() {
  return (
    <div className='App'>
      <Route exact strict path='/'component={Landing}/>
      <Route exact strict path='/home' component={Home}/>
      <Route exact strict path='/countryDatails/:id' component={CountryDetails}/>
      <Route exact strict path='/createActivity' component={CreateActivity} />
      <Route exact strict path='/updateActivity/:id' component={CreateActivity} />
      <Route exact strict path='/showActivities' component={ShowActivities} />
    </div>
  );
}

export default App;
