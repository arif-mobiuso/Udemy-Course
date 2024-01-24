import React , {useState , useEffect} from 'react'
import axios from 'axios';
const DataFetching =  () => {

    const [posts ,setPosts] = useState([]);
    useEffect(async  ()=>{
        console.log("use effect triggered");
  
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            setPosts(res.data) ; 
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    } , [])


  return (
    <>

      <ul>
      {
        posts.map(post=> {
            return <li>{post.title}</li> ; 
        })
      }
      </ul>
    </>

  )
}

export default DataFetching
