import React from 'react'
import {Link} from 'react-router-dom'

function Smurf({smurf}){

    return(
        <div>
                <Link to={`/smurf/${smurf.id}?name=${smurf.name}`}>{smurf.name}</Link>
             {/* <a href={`http://localhost:3000/smurf/${smurf.id}?name=${smurf.name}`}>{smurf.name}</a> */}
             <p>{smurf.age}</p>
             <p>{smurf.height}</p>
        </div>
    )
}

export default Smurf;