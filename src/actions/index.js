export const ADD_OBJECT = 'ADD_OBJECT'
export const REMOVE_OBJECT = 'REMOVE_OBJECT'
export const CLEAR_OBJECTS = 'CLEAR_OBJECTS'

export const addToCanvas = (obj) => {
  return {
    type: ADD_OBJECT,
    payload: { obj }
  }
}

export const removeFromCanvas = (obj) => {
  return {
    type: REMOVE_OBJECT,
    payload: { obj }
  }
}

export const clearCanvas = (obj) => {
  return {
    type: CLEAR_OBJECTS,
    payload: { obj }
  }
}