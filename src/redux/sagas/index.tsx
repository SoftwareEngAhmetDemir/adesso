/* eslint-disable no-constant-condition */

import {
  put,
  takeEvery,
  all,
  takeLatest,
  call,
} from 'redux-saga/effects';
import { Unit } from '../../entities/data-reponose';
import { GET_DATA_REQUEST, SET_COSTS_ACTIVES, SET_COSTS_VALUE, SET_FILTER, SET_INITIAL_STATE, SET_STATUS } from '../actions';

function* setStatus(action: any) {
  yield put({ type: 'SET_STATUS_VALUE', payload: action.payload });
}
function* setCostsActive(action: any) {
  yield put({ type: 'SET_COSTS_ACTIVE', payload: action.payload });
}
function* setCostsValues(action: any) {
  yield put({ type: 'SET_COSTS_VALUES', payload: { ...action.payload } });
}
const getUsers: any = async () => {
  return fetch('./database/age-of-empires-units.json')
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
// type TestType =   Generator<number, any, number>;
function* getUsersSaga(): any {
  const { response, error } = yield call(getUsers);

  if (response) {
    const data = yield response.json();
    yield put({ type: 'GET_USERS_SUCCESS', payload: data.units });
  } else {
    console.log('error: ', error.message);
    //yield put({ type: 'GET_USERS_FAILED', message: error.message })
  }
}

function* setFilter({ payload }: any): any {
  const { response } = yield call(getUsers);
  if (response) {
    const data = yield response.json();
    let units: any = data.units;
    var results: any = [];

    if (payload.costsActive.FoodIsActive) {
      units.map((e: Unit) => {
        if (!e.cost) {
          e.cost = { Food: 0, Wood: 0, Gold: 0 };
        }
        if (!e.cost.Food) {
          e.cost.Food = 0;
        }
        if (!e.cost.Wood) e.cost.Wood = 0;
        if (!e.cost.Gold) e.cost.Gold = 0;

        if (
          Number(payload.costsValues.FoodMin) <= Number(e.cost.Food) &&
          Number(e.cost.Food) <= Number(payload.costsValues.FoodMax)
        ) {
          if (e.cost.Food === 0) delete e.cost.Food;
          if (e.cost.Wood === 0) delete e.cost.Wood;
          if (e.cost.Gold === 0) delete e.cost.Gold;
          results.push(e);
        }
      });
      units = [...results];
      results = [];
    }

    if (payload.costsActive.WoodIsActive) {
      units.map((e: Unit) => {
        if (!e.cost) {
          e.cost = { Food: 0, Wood: 0, Gold: 0 };
        }
        if (!e.cost.Food) {
          e.cost.Food = 0;
        }
        if (!e.cost.Wood) e.cost.Wood = 0;
        if (!e.cost.Gold) e.cost.Gold = 0;
        if (
          Number(payload.costsValues.WoodMin) <= Number(e.cost.Wood) &&
          Number(e.cost.Wood) <= Number(payload.costsValues.WoodMax)
        ) {
          if (e.cost.Food === 0) delete e.cost.Food;
          if (e.cost.Wood === 0) delete e.cost.Wood;
          if (e.cost.Gold === 0) delete e.cost.Gold;
          results.push(e);
        }
      });
      units = [...results];
      results = [];
    }
    if (payload.costsActive.GoldIsActive) {
      units.map((e: Unit) => {
        if (!e.cost) {
          e.cost = { Food: 0, Wood: 0, Gold: 0 };
        }
        if (!e.cost.Food) {
          e.cost.Food = 0;
        }
        if (!e.cost.Wood) e.cost.Wood = 0;
        if (!e.cost.Gold) e.cost.Gold = 0;
        if (
          Number(payload.costsValues.GoldMin) <= Number(e.cost.Gold) &&
          Number(e.cost.Gold) <= Number(payload.costsValues.GoldMax)
        ) {
          if (e.cost.Food === 0) delete e.cost.Food;
          if (e.cost.Wood === 0) delete e.cost.Wood;
          if (e.cost.Gold === 0) delete e.cost.Gold;
          results.push(e);
        }
      });
      units = [...results];
      results = [];
    }

    // console.log(results);
    yield put({ type: 'GET_USERS_SUCCESS', payload: units });
  }
}
function* IntialState(): any {
  yield put({ type: 'SET_START_VALUE' });
}
export default function* rootSaga() {
  yield all([
    takeLatest(GET_DATA_REQUEST, getUsersSaga),
    takeEvery(SET_STATUS, setStatus),
    takeEvery(SET_COSTS_VALUE, setCostsValues),
    takeEvery(SET_COSTS_ACTIVES, setCostsActive),
    takeEvery(SET_FILTER, setFilter),
    takeLatest(SET_INITIAL_STATE, IntialState),
  ]);
}
