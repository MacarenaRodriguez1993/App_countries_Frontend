/* eslint-disable jsx-a11y/alt-text */
import './App.css';

import {Route} from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/home/Home';
import CountryDetails from './components/countryDetails/countryDetails';
import CreateActivity from './components/Activities/CreateActivity/CreateActivity';
import ShowActivities from './components/Activities/ShowActivities/ShowActivities'

function App() {
  return (
    <div className='App'>
      <Route path exact='/'component={Landing}/>
      <Route path='/home' component={Home}/>
      <Route path='/countryDatails/:id' component={CountryDetails}/>
      <Route path='/createActivity' component={CreateActivity} />
      <Route path='/showActivities' component={ShowActivities} />
    </div>
  );
}

export default App;
