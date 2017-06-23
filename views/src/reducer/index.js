import todos from "./todos";
import visiblilityFilter from "./visiblityFilter";
import {combineReducers} from "redux";

const todoApp = combineReducers({
    todos,
    visiblilityFilter
});

export default todoApp
