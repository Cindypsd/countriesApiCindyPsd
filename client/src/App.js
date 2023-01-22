import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useLocation } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { getCountries } from './redux/actions';
import { Detail, Form, Home, Landing } from './views/index.js';


function App() {

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]) 


  return (
    <div className="App">
      
    
      {location.pathname !== "/" && <NavBar/>}
      <Route exact path="/" render={() => <Landing/>}/>
      <Route path="/home" render={() => <Home/>}/>
      <Route path="/create" render={() => <Form/>}/>
      <Route path="/detail/:id" render={() => <Detail/>}/>
        

    </div>
  );
}

export default App;
