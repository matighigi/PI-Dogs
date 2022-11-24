import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
//importamos los componentes a renderizar
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import DogCreate from './components/DogCreate/DogCreate'
import Detail from './components/Detail/Detail';

function App() {
  return (
    <div className="App">
      {/* el BrowserRouter nos permite acceder al historial de navegacion de rutas, realizar redirecciones, etc. */}
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
