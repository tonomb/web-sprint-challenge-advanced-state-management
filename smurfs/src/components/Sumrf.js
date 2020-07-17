import React from 'react'

function Smurf({smurf}){

    return(
        <div>
             <a href={`http://localhost:3000/smurf/${smurf.id}?name=${smurf.name}`}>{smurf.name}</a>
             <p>{smurf.age}</p>
             <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;