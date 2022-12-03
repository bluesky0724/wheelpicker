import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import './App.css';
import Main from './Components/Main';
import Total from './Components/Total';
import YesNo from './Components/YesNo';
import Letter from './Components/Letter';
import Team from './Components/Team';


function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/Total' element={<Total />}/>
            <Route path='/YesNo' element={<YesNo />}/>
            <Route path='/Letter' element={<Letter />}/>
            <Route path='/Team' element={<Team />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
