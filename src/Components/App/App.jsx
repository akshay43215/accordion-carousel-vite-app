
import { UsersList } from '../UsersList/UsersList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { Accordion } from '../Accordion/Accordion'

function App() {
  const [allUsers, setAllUsers] = useState([])
  const [allposts, setAllPosts] = useState([])


  const changeUsers = (pId)=> {
    console.log(pId,'cb in app del');
    const newUsers=allUsers.filter(user => user.id!==pId )
    setAllUsers(newUsers  )
  }
  const changeToggle = ()=>{
    // alert('togggle app fn')
    // setToggle(!toggle)
    console.log('nothing');
  }

  useEffect(() => {
    
    (async function getUser() {

      try {
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
        // const jsonResponse = await 
        //console.log( response.data);
        setAllUsers(usersResponse.data)
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setAllPosts(postsResponse.data)
        console.log(postsResponse.data);
      
      } catch (error) {
        console.error(error);
      }
    }) ();
    
    return () => {
      console.log('return useEffect')
    }
  }, [])
  
 // console.log(usersList);

  return (
   <div className="app-container">
      
     <div className="users-container">
        {
          allUsers.map((user)=>
           <UsersList user={user} changeUsers={changeUsers} key={user.id}/>
          )
        }
     </div>
     <div className="acccordion-container">
        {
          allposts.map( post=> 
            <Accordion post={post}  key={post.id}/>
          )
        }
     </div>
   
   </div>
  )
}

export default App
