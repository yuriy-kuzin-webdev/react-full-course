import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./reducers/dialogs-reducer";
import profileReducer from "./reducers/profile-reducer";
import sidebarReducer from "./reducers/sidebar-reducer";

const reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  sidebarReducer,
});

const reduxStore = createStore(reducers);

export default reduxStore;
