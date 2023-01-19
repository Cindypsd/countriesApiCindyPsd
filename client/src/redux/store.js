import { createStore, applyMiddleware, compose } from "redux"
//             modifica, mejorar el store ^
import rootReducer from "./reducer"
import thunkMiddleware from "redux-thunk"
//            ^ hace las req  


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
)

export default store