import { ADD, TOGGLE, CLEAR } from './../actions'

const reducer = (state, action) => {
    switch(action.type){
        case(ADD):
            return [...state, action.payload]
        case(TOGGLE):
            return state.map((item) => {
                return item.id === action.payload ? { ...item, completed: !item.completed } : item
            })
        case(CLEAR):
            return state.filter((item) => !item.completed)
        default:
            return(state)
    }
}

export default reducer;