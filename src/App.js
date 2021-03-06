import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [id, setId] = useState(0);

  const [data, setData] = useState({
    key: id,
    task:""
  })

  const clear = () =>{
    setData({
      key: id+1,
      task:""
    });
  }
 
  const handle = (e) =>{
    const newData = {...data};
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  
  const [objArr, setObjArr] = useState([]);
  
  const submitTask = () =>{
      objArr.push(data);
      setId(id+1);
      clear();
      setObjArr(objArr);
  }

  const remove = (val) =>{
    let res = objArr.filter((element)=>{
      return element.key !== val});
    setObjArr(res);
    
  }

  useEffect(()=>{
    if(id >= 1){
      document.title = `ToDoList (${objArr.length})`;
    }else{
      document.title = `ToDoList`;
    }
  },[id,objArr])
  // const [style, setStyle] = useState("lead rounded-3 text-light bg-success p-2");

  return (
    <>
    <center><h2 className='text-primary'>To Do List</h2></center>
    <div className='container w-50 mt-3'>
      
      <div className="mb-3">
        <label htmlFor="task" className="form-label"><b>Enter your item</b></label>
        <input type="task" onChange={(e) => handle(e)} value={data.task} className="form-control" id="task" aria-describedby="task"/>
      </div>
      <button onClick={submitTask} className="btn btn-primary" disabled={data.task.length === 0}>Submit</button>&nbsp;
      <button onClick={clear} className="btn btn-danger mx-2 my-2">Clear</button>
      <div className='mt-3' style={{float:"right"}}>
      <b className='text-primary'>Total Task: {id}</b>
      <b className='mx-2 text-success'>Completed: {id - objArr.length}</b>
      </div>
    </div>
    <hr className='text-primary'/>
    <div className='container w-50 text-primary p-3' >
    
      {
        objArr.map((element)=>{
          return <p key={element.key} className="lead rounded-3 text-light bg-primary p-2" style={{fontSize:"30px",overflow:"auto"}} >{element.key+1}. {element.task} 
          <button onClick={() => remove(element.key)} className='btn btn-danger my-1 mx-2' style={{float:"right"}}>Remove</button>
          {/* <button onClick={() => console.log("testing")} className='btn btn-success mx-2 my-1' style={{float:"right"}}>Completed</button> */}
          <br/>
          </p>
        })
      }
     
    </div>
    </>
  );
}

export default App;
