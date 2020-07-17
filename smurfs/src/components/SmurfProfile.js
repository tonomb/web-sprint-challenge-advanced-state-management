import React from 'react'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'

function SmurfProfile(props){
 const params = useParams()
 console.log(props.smurfs);
 console.log(params);
    return(
        <div>
             <h3>Smurf profile</h3>
             {/* <p>{smurf.age}</p>
             <p>{smurf.height}</p> */}
        </div>
    )
}

const mapStateToProps =state =>{
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{})(SmurfProfile);