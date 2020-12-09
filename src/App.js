import {Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/nav/Header';
import Home from './Home';


const App = () => {
  return (
    <>
    <Header/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
    </Switch>
    </>


  );
}

export default App;
