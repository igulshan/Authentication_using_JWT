import './App.css';
import Login from './login';
import Register from './register';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
