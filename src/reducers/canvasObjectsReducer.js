import { ADD_OBJECT, REMOVE_OBJECT, CLEAR_OBJECTS, UPDATE_OBJECT } from "../actions";

const canvasObjectsReducer = (state = [], action) => {


  switch (action.type) {
    case ADD_OBJECT:

      const obj = action.payload.obj
      // Layer the new object on top
      obj.zIndex = state.length

      return [obj, ...state]

    case UPDATE_OBJECT:
      console.log(action.payload.obj)
      const objForUpdate = action.payload.obj

      return state.map((obj) => {
        if (obj.id === objForUpdate.id) {
          return objForUpdate
        }
        return obj
      })

    case REMOVE_OBJECT:

      const objToRemove = action.payload.obj

      return state.filter((canvasObject) => {
        if (canvasObject.id === objToRemove.id) {
          return false
        }
        return true
      })

    case CLEAR_OBJECTS:

      return []

    default:
      return state
  }
}

export default canvasObjectsReducer