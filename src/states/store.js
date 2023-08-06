import { configureStore } from "@reduxjs/toolkit";
import incdecReducer from './reducers/index';


export default configureStore({
    reducer: {
        number: incdecReducer,


    }
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());