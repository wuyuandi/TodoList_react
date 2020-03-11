import { createStore, applyMiddleware, compose } from 'redux';
//redux-thunk
import thunk from 'redux-thunk';

import reducer from './reducer';

//reudx-saga
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  // other store enhancers if any
);

const store = createStore(
	reducer, 
	enhancer
);
sagaMiddleware.run(mySaga)
export default store; 