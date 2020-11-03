export const ADD = 'ADD';
export const TOGGLE = 'TOGGLE';
export const CLEAR = 'CLEAR';

export const addItem = (item) => {
    return({type:ADD, payload:item})
}

export const toggleItem = (toggle) => {
    return({type:TOGGLE, payload:toggle})
}

export const clearItem = () => {
    return({type:CLEAR})
}

export default {
    addItem:addItem,
    toggleItem:toggleItem,
    clearItem:clearItem,
}