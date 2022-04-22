import { useState } from 'react';
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

  return (
    <>
    <center><h2 className='text-primary'>To Do List</h2></center>
    <div className='container w-50 mt-3'>
      
      <div className="mb-3">
        <label htmlFor="task" className="form-label"><b>Enter your item</b></label>
        <input type="task" onChange={(e) => handle(e)} value={data.task} className="form-control" id="task" aria-describedby="task"/>
      </div>
      <button onClick={submitTask} className="btn btn-primary" disabled={data.task.length === 0}>Submit</button>&nbsp;
      <button onClick={clear} className="btn btn-danger mx-2">Clear</button><br/>
    
    </div>
    <hr/>
    <div className='container w-50 text-primary p-3 ' >
      {
        objArr.map((element)=>{
          return <span key={element.key} className='lead rounded-3' style={{fontSize:"30px"}} >{element.key+1}. {element.task} <button onClick={() => remove(element.key)} className='btn btn-danger' style={{float:"right"}}>Remove</button><br/></span>
        })
      }
     
    </div>
    </>
  );
}

export default App;
