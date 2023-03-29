
import {action} from './action'


const initialState = {
    sendMessage: 'salam',

    selectedCount: 0,
}

const {sayHello, select, addOrremove} = action

export const reducer = (state = initialState, action)=>{

    switch(action.type){
        case sayHello: {
            console.log('reducer function ready')
            return {
                ...state,
                sendMessage: state.sendMessage
            }
        }

        case select: {
            
            if(action.isSelect){
                return {
                    ...state,
                selectedCount: state.selectedCount + 1,
                
                }
            }
            else {
                return {
                    ...state,
                selectedCount: state.selectedCount - 1
                }
            }
           
        }

        default: return state
    }
}