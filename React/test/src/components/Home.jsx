import React  , {useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [counter , setCounter] = useState(0) ;
  const [name , setName] = useState("") ;
    const navigate = useNavigate() ;
    const incrementCounter = ()=>{
        setCounter(counter+1) ;
    }

    useEffect( ()=>{
      console.log("use effect triggered");
      document.title = `clicked ${counter} times`;
    } , [counter]) 
  return (
    <>
      Home Page
      <button  onClick={()=>navigate("/orderSummary")}>place order </button>
        <h2>{counter}</h2>
        <button onClick={incrementCounter}>increment</button>
        <h2>{name}</h2>
      <input type="text" placeholder='enter name' onChange={e => setName(e.target.value)}/>

    </>
  )
}

export default Home
