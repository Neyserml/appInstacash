import { ISimulationResponse } from "../../interfaces/simulation.interface";
export const storeFeatureKey = "simulator";
export interface SimulatorState {
  data: ISimulationResponse;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const INITIAL_STATE: SimulatorState = {
  data: null,
  loaded: false,
  loading: false,
  error: null,
};
