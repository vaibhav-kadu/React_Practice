
import './App.css';
import Home from './components/Home';
import { Student } from './components/task2/Student';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Subject } from './components/task3/Subject';
import Loginbtn from './components/task4/Loginbtn';
import { DateTime } from './components/task5/DateTime';
import { CounterApp } from './components/task6/CounterApp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task2' element={<Student/>}/>
        <Route path='/task3' element={<Subject/>}/>
        <Route path='/task4' element={<Loginbtn/>}/>
        <Route path='/task5' element={<DateTime/>}/>
        <Route path='/task6' element={<CounterApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
