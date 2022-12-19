import { takeEvery, put } from "redux-saga/effects";
import { DEMO_LIST, SET_PRODUCT_LIST } from "../constants/homeConstants.js";

function* getDemoList(action) {
  console.log("this from saga", action.data);
  yield put({ type: SET_PRODUCT_LIST, data: action.data });
}

function* rootSaga() {
  // add your action and their corresponding functions
  yield takeEvery(DEMO_LIST, getDemoList);
}
export default rootSaga;
