import {
    TOKENIZATION_INITIAL_LOAD,
    PENDING_NEW_TOKEN
} from "../constants/GaiaActions";

const INIT_STATE = {
    pending:[]
};

export default (state = INIT_STATE, action) => {
    switch(action.type){
        case PENDING_NEW_TOKEN:  {

            const currentState = { ...state };

            currentState.pending.push(action.payload);

            return currentState;

        }

        default:
            return state;
    }
}


