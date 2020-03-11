import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes.js';
import axios from 'axios';
import store from './index.js';

import { initListAction } from './actionCreators.js';



function* getInitList() {
	const res = yield axios.get('http://localhost.charlesproxy.com:3000/api/todolist');
	const data = res.data;
	const action = initListAction(data);
	yield put(action)		
	
}

function* mySaga() {

  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;