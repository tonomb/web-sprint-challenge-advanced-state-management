
import {ADDED_SMURF, SMURFS_SUCCESS} from '../actions/actions'



const initialState= {
    smurfs: ['initial Smurf state'],
    newSmurf: false
}

export const rootReducer = (state = initialState, action )=>{
    switch(action.type){
        case SMURFS_SUCCESS:
            console.log('Getting data back from api, setting it to state');
            console.log('data from api', action.payload.smurfs);
            return{
                ...state,
                smurfs: action.payload.smurfs,
                newSmurf: false
            }
        case ADDED_SMURF:
            console.log('new Smurf Added');
            console.log('new sumer array in api', action.payload.smurfs);
            return{
                ...state,
                smurfs:[
                    ...state.smurfs,
                    action.payload.smurfs
                ],
                newSmurf: true
            }
        default:
            return state
    }
}