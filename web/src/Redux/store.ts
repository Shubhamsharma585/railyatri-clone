
import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import busreducer from "./Buses/busreducer"
 


const rootreducer = combineReducers({
    bus: busreducer,
})



const store = createStore(rootreducer,
    compose(applyMiddleware(thunk),
    ))

console.log(store.getState())
export default store;


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch