import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer.js'
import rootSaga from './saga/rootSaga.js';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;