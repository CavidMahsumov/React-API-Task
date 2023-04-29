import React, { useState } from 'react'


export default function FindUser() {
    const [id,setId]=useState("");
    const[user,setUser]=useState({});
    const [FindBtn, setFindBtn] = useState(false);

    const handleSubmit=(event)=>{
        event.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error(error));

    }

    const ShowFindBtn=()=>{
      if(FindBtn){
        setFindBtn(false);
      }
      else{
        setFindBtn(true);
      }
      
      
    }
  return (
    <>
    <button onClick={ShowFindBtn} type='submit'>Find User</button>
    {FindBtn &&(
    <div className='mdiv'>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          
          />
        <button type="submit">Find User</button>
      </form>

        <div class="card">
            <h1>Name :{user.name}</h1>
            <h2>UserName :{user.username}</h2>
            <h2>Email :{user.email}</h2>

            </div>

    </div>
    )}

          </>
  )
}
