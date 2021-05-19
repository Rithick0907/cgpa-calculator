import { combineReducers } from "redux";
import curriculum from "./curriculumSlice";
import course from "./courseSlice";

export default combineReducers({ course, curriculum });
