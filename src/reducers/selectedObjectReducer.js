import { SET_SELECTED_OBJECT } from "../actions";

const selectedObjectReducer = (state = false, action) => {

  switch (action.type) {
    case SET_SELECTED_OBJECT:
      return action.payload.obj

    default:
      return state
  }
}

export default selectedObjectReducer