import { combineReducers } from "redux";
import canvasObjectsReducer from "./canvasObjectsReducer";

export default combineReducers({
  canvasObjects: canvasObjectsReducer
})