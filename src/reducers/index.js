import { combineReducers } from "redux";
import canvasObjectsReducer from "./canvasObjectsReducer";
import selectedObjectReducer from "./selectedObjectReducer"

export default combineReducers({
  canvasObjects: canvasObjectsReducer,
  selectedObject: selectedObjectReducer
})