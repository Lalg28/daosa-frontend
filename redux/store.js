import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga';
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './ducks/userDuck';

const rootReducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware()

export default function generateStore(){
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
    sagaMiddleware.run(rootSaga)
    return store
}