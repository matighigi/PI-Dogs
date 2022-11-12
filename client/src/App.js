import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <h1>Henry´s Dogs</h1>
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route exact path= '/home' component= {Home}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
