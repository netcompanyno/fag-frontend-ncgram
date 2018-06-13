import {EKSEMPEL_TYPE} from "../types/eksempelTypes";

const defaultState = {
  test: 'test',
};

const eksempelReducer = (state = defaultState, action) => {
  switch (action.type) {

    case EKSEMPEL_TYPE: {
      alert("State har nå oppdatert seg")
      return {
        ...state,
        nyStateProp: "hei sveis"
      }
    }

    default:
      return state;
  }
};

export default eksempelReducer;
