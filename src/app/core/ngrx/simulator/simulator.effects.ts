import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ISimulationRequest } from "../../interfaces/simulation.interface";
import { APIError, ERROR_MESSAGE } from "../../models";
import { SimulatorModel } from "../../models/simulator.model";
import { CompaignApiService } from "../../services/compaign/compaign.service";
import * as simulatorActions from "./simulator.actions";

@Injectable()
export class SimulatorEffects {
  constructor(
    private actions$: Actions,
    public compaignApiService: CompaignApiService
  ) {}

  @Effect()
  cargarUsuarios$ = this.actions$.pipe(
    ofType(simulatorActions.LOAD),
    switchMap((payload: ISimulationRequest) => {
      return this.compaignApiService.simulation(payload).pipe(
        map(
          (res) =>
            new simulatorActions.LoadSuccessAction(new SimulatorModel(res))
        ),
        catchError((payload: any) => {
          if (payload.error?.mensaje) {
            return of(
              new simulatorActions.LoadFailAction(payload.error.mensaje)
            );
          } else {
            return of(new simulatorActions.LoadFailAction(ERROR_MESSAGE));
          }
        })
      );
    })
  );
}
