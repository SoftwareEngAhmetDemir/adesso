import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
import rootSaga from '../sagas';
import Reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware: any) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
  },
});
sagaMiddleware.run(rootSaga);
export const action = (type: any,payload:any) =>
  store.dispatch({
    type,
    payload: payload,
  });
