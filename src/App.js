
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './pages/Home';
import AddEdit from './pages/AddEdit';
function App() {
  return (
    <BrowserRouter>
       <div className="App">
            <Route exact path='/' component={Home}/>
            <Route path='/add' component={AddEdit}/>
            <Route path='/update/:id' component={AddEdit}/>
            <Route path='/add' component={AddEdit}/>

       </div>
    </BrowserRouter>
 
  );
}

export default App;
