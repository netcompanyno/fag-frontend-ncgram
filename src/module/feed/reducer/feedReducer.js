import {BUTTON_PRESS} from "../types/feedTypes";

const defaultState = {
  test: 'test',
};

const feedReducer = (state = defaultState, action) => {
  switch (action.type) {

    case BUTTON_PRESS: {
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

export default feedReducer;
