import React,{useState} from 'react'
import Forms from './Forms'
import PetCard from './PetCard'
const petData=[
    {
        email:"yh",
        password:"kwenda"
    },
    {
        email:"th",
        password:"nda" 
    }
]

function Petlist() {

    const [pets,setPet]=useState (petData)

    

    const pet=pets.map ((eachPet)=>{
        return <PetCard eachPet={eachPet} key={eachPet.email}/>
    })
    const addData =(data)=>{
        // console.log ("adding",data)
        let id = pets.length +1
        let newPet={...data,id:id}
        console.log (newPet)
        setPet([...pets,newPet])
    }
  return (
    <div>
      <Forms addData={addData}/>
      {pet}
    </div>
  )
}

export default Petlist
