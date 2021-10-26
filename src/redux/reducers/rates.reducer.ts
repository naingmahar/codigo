import { IRatesState, TRatesAction, UPDATE_RATES } from "../types";

const initialFeedState: IRatesState = {
  rates: {},
  timestamp: new Date()
};

  
export function ratesReducer(
  state: IRatesState = initialFeedState,
  action: TRatesAction
): IRatesState {

    switch (action.type) {
      case UPDATE_RATES: {
        return {
          ...state,
          ...action.payload
        };
      }
      default:
        return state
    }
  };