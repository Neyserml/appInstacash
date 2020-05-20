import { Action } from "@ngrx/store";
import {
  ISimulationResponse,
  ISimulationRequest,
} from "../../interfaces/simulation.interface";

export const LOAD = "[Simulator] Simulator LOAD";
export const LOAD_FAIL = "[Simulator] Simulator FAIL";
export const LOAD_SUCCESS = "[Simulator] Simulator SUCCESS";

export class LoadAction implements Action {
  readonly type = LOAD;
  constructor(public payload: ISimulationRequest) {}
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: ISimulationResponse) {}
}

export type Actions = LoadAction | LoadFailAction | LoadSuccessAction;
