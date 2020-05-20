import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromSimulatorState from "./simulator.state";

export const selectSimulatorState = createFeatureSelector<
  fromSimulatorState.SimulatorState
>(fromSimulatorState.storeFeatureKey);

export const getSimulator = createSelector(
  selectSimulatorState,
  (state: fromSimulatorState.SimulatorState) => state.data
);
export const getSimulatorLoading = createSelector(
  selectSimulatorState,
  (state: fromSimulatorState.SimulatorState) => state.loading
);
export const getSimulatorFailed = createSelector(
  selectSimulatorState,
  (state: fromSimulatorState.SimulatorState) => state.error
);
