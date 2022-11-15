import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import libraryReducer from "@/Store/Library/Library.reducer"
import liveReducer from "@/Store/Live/Live.reducer"

const rootReducer = combineReducers({
  live: liveReducer,
  library: libraryReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))
export default store
