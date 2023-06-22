import { Fragment, useLayoutEffect } from 'react';
import { action, store } from '../redux/store';
import Header from '../components/Header';
import AgeFilter from '../components/AgeFilter';
import CostFilter from '../components/CostFilter';
import FiteredTable from '../components/FiteredTable';
import { SET_FILTER, SET_INITIAL_STATE } from '../redux/actions';

function UnitsUtil() {
  let state = store.getState();
  let { FoodIsActive, WoodIsActive, GoldIsActive } = state.costsActive;


  useLayoutEffect(() => {
    if (FoodIsActive || GoldIsActive || WoodIsActive || state.st === 'B') {
     action(SET_FILTER,  { ...state } );
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

export default UnitsUtil;
