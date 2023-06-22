const State = {
  st: 'A',
  data: [],
  status: 'ALL',
  costsValues: {
    FoodMin: 0,
    FoodMax: 5,
    WoodMin: 0,
    WoodMax: 5,
    GoldMin: 0,
    GoldMax: 5,
  },
  costsActive: {
    FoodIsActive: false,
    WoodIsActive: false,
    GoldIsActive: false,
  },
};
export default function Reducer(
  state = State,
  action: { type: string; payload: any }
): any {
  switch (action.type) {
    case 'SET_STATUS_VALUE':
      return { ...state, status: action.payload };
    case 'GET_USERS_SUCCESS':
      return { ...state, data: action.payload };
    case 'SET_COSTS_VALUES':
      return {
        ...state,
        costsValues: action.payload,
      };
    case 'SET_START_VALUE':
      return {
        ...state,
        st: 'B',
      };
    case 'SET_COSTS_ACTIVE':
      return {
        ...state,
        costsActive: action.payload,
      };
    default:
      return state;
  }
}
