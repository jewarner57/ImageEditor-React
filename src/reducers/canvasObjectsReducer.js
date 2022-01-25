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

          // Delete all objectURLs to free up memory 
          // from deleted images
          if (canvasObject.type === 'image') {
            URL.revokeObjectURL(canvasObject.url)
          }

          return false
        }
        return true
      })

    case CLEAR_OBJECTS:

      // Delete all objectURLs to free up memory
      // from deleted images
      state.forEach((canvasObject) => {
        if (canvasObject.type === 'image') {
          URL.revokeObjectURL(canvasObject.url)
        }
      })

      return []

    default:
      return state
  }
}

export default canvasObjectsReducer