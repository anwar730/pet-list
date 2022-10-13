import React from 'react'

function PetCard({eachPet}) {
  return (
    <div>
      <h3>{eachPet.email}</h3>
      <h4>{eachPet.password}</h4>
    </div>
  )
}

export default PetCard
