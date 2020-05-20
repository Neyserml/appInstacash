import * as actions from "./simulator.actions";
import { ISimulationResponse } from "../../interfaces/simulation.interface";
import { SimulatorState } from "./simulator.state";
import { INITIAL_STATE } from "./simulator.state";

export function simulatorReducer(
  state = INITIAL_STATE,
  action: actions.Actions
): SimulatorState {
  switch (action.type) {
    case actions.LOAD:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actions.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.payload,
      };

    case actions.LOAD_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
