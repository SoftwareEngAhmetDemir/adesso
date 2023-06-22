import { Fragment, useLayoutEffect } from 'react';
import Header from './Header';
import AgeFilter from './AgeFilter';
import CostFilter from './CostFilter';
import FiteredTable from './FiteredTable';
import { action, store } from '../redux/store';
import { SET_FILTER, SET_INITIAL_STATE } from '../redux/actions';

function Units() {
  let state = store.getState();
  let { FoodIsActive, WoodIsActive, GoldIsActive } = state.costsActive;

  useLayoutEffect(() => {
    if (FoodIsActive || GoldIsActive || WoodIsActive || state.st === 'B') {
      action(SET_FILTER, { ...state } );
      action(SET_INITIAL_STATE,null);
    }
  }, [action, state.costsActive]);
  return (
    <Fragment>
      <Header title="Units Page" />
      <div className="container">
        <AgeFilter />
        <CostFilter />
        <FiteredTable />
      </div>
    </Fragment>
  );
}

export default Units;
