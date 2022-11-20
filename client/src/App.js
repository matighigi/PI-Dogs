import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import DogCreate from './components/DogCreate/DogCreate'
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path= '/' component= {LandingPage}/>
        <Route exact path= '/home' component= {Home}/>
        <Route exact path= '/home/:id' component= {Detail}/>
        <Route exact path= '/dog' component= {DogCreate}/>
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
