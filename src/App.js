import './App.css';
import { Inc ,Dec } from './states/reducers/index';
import { useDispatch } from 'react-redux';
import {useSelector } from 'react-redux/es/hooks/useSelector';
function App() {
  const curState=useSelector((state)=>state.number);
  const dispacth=useDispatch(); 
  return (
    
    <>
   <div className="App">
      <div className='main'>
       
<h1 className='heading'>Redux in React</h1>
<h1>{curState}</h1>
<div className='buttons'>
<button className='btn' onClick={()=>dispacth(Inc(10))}  >Increment</button>
<button className='btn' onClick={()=>dispacth(Dec(5))}  >Decriment</button>
</div>
      </div>
      
    </div>
    </>
  )
}

export default App;
