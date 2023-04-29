import React, { useState } from 'react'

export default function AddUser() {
const[id,setId]=useState("");
const [name,setName]=useState("")
const [username,setUserName]=useState("");
const[email,setEmail]=useState("");
const[city,setCity]=useState("");
const[addBtn,setAddBtn]=useState(false);

const handleSubmit=(event)=>{
    event.preventDefault();
    alert(id);
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:id,
            name: name,
            username: username,
            email:email,
       
           
        })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

}

  const ShowAddBtn=()=>{
    if(addBtn){
      setAddBtn(false);
    }
    else{
      setAddBtn(true);
    }
  }

  return (
    <>
    <button onClick={ShowAddBtn} type='submit'>Add User</button>
<div>
    {addBtn &&(
    <form onSubmit={handleSubmit}>
        <input className='input'
          type="text"
          placeholder="Id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          />
        <input className='input'
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          />
        <input className='input'
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          />
        <input className='input'
          type="text"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          />
       
        <button type="submit">Add user</button>
      </form>
    )}

   </div>
          </>
  )
}
