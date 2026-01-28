
import { useNavigate } from 'react-router-dom';
import '../App.css';


function Home() {
    const negavite=useNavigate();
  return (
    <div className="App">
      <header className="container">
        <h1>Welcome to React Application</h1>
        <div className='col'>

      <div className='cards'>
        <button className='card'>Task 1</button>
        <button className='card' onClick={()=>negavite("/task2")}>Task 2</button> 
        <button className='card' onClick={()=>negavite("/task3")}>Task 3</button> 
        <button className='card' onClick={()=>negavite("/task4")}>Task 4</button> 
        <button className='card' onClick={()=>negavite("/task5")}>Task 5</button> 
        <button className='card' onClick={()=>negavite("/task6")}>Task 6</button> 
        <button className='card' onClick={()=>negavite("/task7")}>Task 7</button> 
        <button className='card' onClick={()=>negavite("/task8")}>Task 8</button> 
        <button className='card' onClick={()=>negavite("/task9")}>Task 9</button> 
      </div>
      </div>
      </header>
    </div>
  );
}

export default Home;
