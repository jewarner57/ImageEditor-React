import { SET_SELECTED_OBJECT } from "../actions";

const selectedObjectReducer = (state = '0', action) => {

  switch (action.type) {
    case SET_SELECTED_OBJECT:
      return { id: action.payload.id }

    default:
      return state
  }
}

export default selectedObjectReducer