
import './App.css';
import Home from './components/Home';
import { Student } from './components/task2/Student';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Subject } from './components/task3/Subject';
import Loginbtn from './components/task4/Loginbtn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/task2' element={<Student/>}/>
        <Route path='/task3' element={<Subject/>}/>
        <Route path='/task4' element={<Loginbtn/>}/>
        <Route path='/task2' element={<Student/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
