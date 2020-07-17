import React, {useState} from 'react';
import {connect} from 'react-redux'
import { v4 as uuidv4 } from 'uuid';
import { addSmurf } from '../store/actions/actions';

const initialFormState = {
        name: "",
        age: '',
        height: '',
        id: ''
}

function AddSmurf(props){
    const [newSmurf, setNewSmurf] = useState(initialFormState)

    const handleChange = (e) =>{
        const {name, value} = e.target
        setNewSmurf({
            ...newSmurf,
            [name]: value,
            id: uuidv4()  //overwriten by api
        })
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        // setNewSmurf({ //this is nos synchronous
        //     ...newSmurf,
        //     height: newSmurf.height + 'cm'
        // })
        props.addSmurf(newSmurf);
        setNewSmurf(initialFormState)
    }

    return(
        <div>
            <form  onSubmit={submitHandler} >
                <label> name
                    <input
                        type='text'
                        value={newSmurf.name}
                        name='name'
                        onChange={handleChange}>
                    </input>
                </label>
                <label> age
                    <input
                        type='text'
                        value={newSmurf.age}
                        name='age'
                        onChange={handleChange}>
                    </input>
                </label>
                <label> height
                    <input
                        type='text'
                        value={newSmurf.height}
                        name='height'
                        placeholder='in cm'
                        onChange={handleChange}>
                    </input>
                </label>
               <button>Add Smurf</button>
            </form>
        </div>
    )
}

export default connect(null,{addSmurf})(AddSmurf);