import { Action } from "@ngrx/store";
import { ICompaignResponse } from "../../interfaces/compaign.interface";

export const LOAD = "[Compaign] Compaign LOAD";
export const LOAD_FAIL = "[Compaign] Compaign FAIL";
export const LOAD_SUCCESS = "[Compaign] CCompaign SUCCESS";

export class LoadAction implements Action {
  readonly type = LOAD;
}

export class LoadFailAction implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

export class LoadSuccessAction implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: ICompaignResponse) {}
}

export type Actions = LoadAction | LoadFailAction | LoadSuccessAction;
