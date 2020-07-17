import React from 'react'
import { useParams } from 'react-router-dom'
import {connect} from 'react-redux'

function SmurfProfile(props){
 const params = useParams()
 console.log('global smurfs state', props.smurfs);
 console.log(params.id);
 console.log(props.smurfs);
    return(
        <div>
            <h1>{props.smurfs[params.id].name}</h1>
            <h2>{props.smurfs[params.id].age}</h2>
            <h2>{props.smurfs[params.id].height}</h2>
        
        </div>
    )
}

const mapStateToProps =state =>{
    return{
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps,{})(SmurfProfile);