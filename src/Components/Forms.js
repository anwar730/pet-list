import React,{useState} from 'react'

function Forms({addData}) {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    

    function handleChange(e){
        if (e.target.id==='email'){
            setEmail (e.target.value)
            // console.log (email)
        }
        else if (e.target.id==='password'){
            setPassword(e.target.value)
            // console.log (password)
        }
        // setEmail (e.target.value)
        // setPassword(e.target.value)
        
        
        
    }
    

    function handleSubmit(e){
        e.preventDefault()
        const formData={
            email,
            password
        }
        // console.log (formData)
        addData(formData)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type='text' value={email} placeholder="Enter email" onChange={handleChange} id='email'/>
      <input type='text' value={password} placeholder="Enter password" onChange={handleChange} id='password'/>
      <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Forms
