import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes} from "react-router-dom"
import './app.css';
import main from './Components/pages/main';
import main1 from './Components/pages1/main1';
import { UserProvider } from './Components/UserContext';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Booking from './Components/Booking/Booking';
import Destiny from './Components/Destinations/Destiny';
import famous from './Components/Destinations/Famous/famous';
import spiritual from './Components/Destinations/Spiritual/spiritual'
import hills from './Components/Destinations/Hills/hills'
import heritage from './Components/Destinations/Heritage/heritage'
import beach from './Components/Destinations/Beach/beach'
import tajmahal from './Components/Destinations/Places/taj/tajmahal';
import baga from './Components/Destinations/Places/baga/baga';
import munnar from './Components/Destinations/Places/munnar/munnar';
import ladakh from './Components/Destinations/Places/ladakh/ladakh';
import red from './Components/Destinations/Places/redfort/red';
import gate from './Components/Destinations/Places/gate/gate';
import char from './Components/Destinations/Places/char/char';
import mysore from './Components/Destinations/Places/mysore/mysore';
import packages from './Components/pages/packages/package';
import evisa from './Components/evisa/evisa';
import Blog from './Components/Blog/Blog';
import login1 from './Components/login1/Login1'

const App = () => {
  return (
    <UserProvider>
    <Router>
      <switch>
        <Routes>
        <Route path='/' exact Component={main} />
        <Route path='/home' exact Component={main1} />
        <Route path='/login' Component={Login} />
       <Route path='/signup' Component={Signup} />
       <Route path='/booking' Component={Booking}/> 
        <Route path='/destiny' Component={Destiny} />
        <Route path='/famous' Component={famous} />
        <Route path='/spiritual' Component={spiritual} />
        <Route path='/hills' Component={hills} />
        <Route path='/heritage' Component={heritage} />
        <Route path='/beach' Component={beach} />
        <Route path='/tajmahal' Component={tajmahal} />
        <Route path='/baga' Component={baga} />
        <Route path='/munnar' Component={munnar} />
        <Route path='/ladakh' Component={ladakh} />
        <Route path='/red' Component={red} />
        <Route path='/gate' Component={gate} />
        <Route path='/char' Component={char} />
        <Route path='/mysore' Component={mysore} />
        <Route path='/pack' Component={packages} />
        <Route path='/visa' Component={evisa} />
        <Route path='/blog' Component={Blog} />
        <Route path='/login1' Component={login1} />

        </Routes>
      </switch>
    </Router>
    </UserProvider>
  );
};

export default App;