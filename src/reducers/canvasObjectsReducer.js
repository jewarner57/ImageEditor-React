import { ADD_OBJECT, REMOVE_OBJECT, CLEAR_OBJECTS } from "../actions";

const canvasObjectsReducer = (state = [], action) => {


  switch (action.type) {
    case ADD_OBJECT:

      const obj = action.payload.obj
      // Layer the new object on top
      obj.zIndex = state.length

      return [obj, ...state]

    case REMOVE_OBJECT:

      return state

    case CLEAR_OBJECTS:

      return state

    default:
      return state
  }
}

export default canvasObjectsReducer