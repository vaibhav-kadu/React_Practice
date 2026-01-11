
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
        <button className='card' onClick={()=>negavite("/task2")}>Task 2</button> 
        <button className='card' onClick={()=>negavite("/task2")}>Task 2</button> 
      </div>
      </div>
      </header>
    </div>
  );
}

export default Home;
