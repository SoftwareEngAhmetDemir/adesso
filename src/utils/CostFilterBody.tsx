import React from 'react';

import MultiRangeSlider from 'multi-range-slider-react';
import { action, store } from '../redux/store';
import { SET_COSTS_ACTIVES, SET_COSTS_VALUE, SET_FILTER } from '../redux/actions';
function CostFilterBody() {
    let state = store.getState();
  let { FoodIsActive, WoodIsActive, GoldIsActive } = state.costsActive;
  let { FoodMin, FoodMax, WoodMax, WoodMin, GoldMax, GoldMin } =
    state.costsValues;
  return (
    <div>
    <div className="form-check d-flex align-center position-relative">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          checked={WoodIsActive}
          id="flexCheckDefault"
          onChange={(e) => {
            action(
              "SET_COSTS_ACTIVES",
               {
                ...state.costsActive,
                WoodIsActive: e.target.checked,
              },
            );
          }}
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Wood
        </label>
      </div>
      <div className={!WoodIsActive ? 'disabledThumb' : ''}>
        <MultiRangeSlider
          min={0}
          max={200}
          step={5}
          minValue={WoodMin}
          maxValue={WoodMax}
          onInput={(e) => {
           action(
              SET_COSTS_VALUE,
               {
                ...state.costsValues,
                WoodMin: e.minValue,
                WoodMax: e.maxValue,
              },
            );
            return action(SET_FILTER, { ...state } );
          }}
        />
        <div className="ranges">
          <div style={{ marginLeft: '10px' }}>
            {WoodIsActive ? WoodMin + '-' : '-'}
          </div>
          <div style={{ marginLeft: '0px' }}>
            {WoodIsActive ? WoodMax : ''}
          </div>
        </div>
      </div>
    </div>

    <div className="form-check d-flex align-center position-relative">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault1"
          checked={FoodIsActive}
          onChange={(e) => {
            action(
              SET_COSTS_ACTIVES,
               {
                ...state.costsActive,
                FoodIsActive: e.target.checked,
              },
            );
          }}
        />
        <label className="form-check-label1" htmlFor="flexCheckDefault1">
          Food
        </label>
      </div>
      <div className={!FoodIsActive ? 'disabledThumb' : ''}>
        <MultiRangeSlider
          min={0}
          max={200}
          step={5}
          minValue={FoodMin}
          maxValue={FoodMax}
          onInput={(e) => {
            action(
               SET_COSTS_VALUE,
               {
                ...state.costsValues,
                FoodMin: e.minValue,
                FoodMax: e.maxValue,
              },
            );
            return action(SET_FILTER,  { ...state } );
          }}
        />
        <div className="ranges">
          <div style={{ marginLeft: '10px' }}>
            {FoodIsActive ? FoodMin + '-' : '-'}
          </div>
          <div style={{ marginLeft: '0px' }}>
            {FoodIsActive ? FoodMax : ''}
          </div>
        </div>
      </div>
    </div>

    <div className="form-check d-flex align-center position-relative">
      <div>
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault2"
          checked={GoldIsActive}
          onChange={(e) => {
            action(
              SET_COSTS_ACTIVES,
               {
                ...state.costsActive,
                GoldIsActive: e.target.checked,
              },
            );
          }}
        />
        <label className="form-check-label2" htmlFor="flexCheckDefault2">
          Gold
        </label>
      </div>
      <div className={!GoldIsActive ? 'disabledThumb' : ''}>
        <MultiRangeSlider
          min={0}
          max={200}
          step={5}
          minValue={GoldMin}
          maxValue={GoldMax}
          onChange={() => {
            return action(SET_FILTER,  { ...state } );
          }}
          onInput={(e) => {
            action(
             SET_COSTS_VALUE,
               {
                ...state.costsValues,
                GoldMin: e.minValue,
                GoldMax: e.maxValue,
              },
            );
          }}
        />
        <div className="ranges">
          <div style={{ marginLeft: '10px' }}>
            {GoldIsActive ? GoldMin + '-' : '-'}
          </div>
          <div style={{ marginLeft: '0px' }}>
            {GoldIsActive ? GoldMax : ''}
          </div>
        </div>
      </div>
    </div>

    <div className="d-none">
      <div className={!GoldIsActive ? 'disabledThumb' : ''}>
        <MultiRangeSlider
          min={0}
          max={200}
          step={5}
          minValue={GoldMin}
          maxValue={GoldMax}
          onInput={(e) => {
            // return dispatch({ type: "SET_FILTER", payload: { ...state } });
          }}
        />
      </div>
    </div>
  </div>
  )
}

export default CostFilterBody