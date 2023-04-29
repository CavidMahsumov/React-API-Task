import React, {useEffect, useState } from 'react'

export default function GetAllUsers() {
    const[users,setUsers]=useState([]);
    const[getuserbtn,setgetuserbtn]=useState(false)

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setUsers(data);
        })
        .catch(error => {
          console.error('There was a problem with the fetch request:', error);
        });
    }, []);

  //  const handleclick=(event)=>{
  //   event.preventDefault();
  //   fetch(`https://jsonplaceholder.typicode.com/users/`)
  //       .then(response => response.json())
  //       .then(data => setUser(data))
  //       .catch(error => console.error(error));
  //  }
    const ShowGetBtn=()=>{
      if(getuserbtn){
        setgetuserbtn(false);
      }
      else{
        setgetuserbtn(true);
      }
    }
  return (
    <>
      <button onClick={ShowGetBtn} type='submit'>Get All Users</button>
      {getuserbtn &&(
    <div>

     {/* <form onSubmit={handleclick}>

<button type="submit" >Get All Users</button>

     </form> */}
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <div className='card'>
           <h1>Name :{user.name}</h1>
           <h2>UserName :{user.username}</h2>
           <h2>Email :{user.email}</h2>

       </div>
        ))}
      </ul>
    </div>  
    
    </div>
    )}
     </>   
  )
}
