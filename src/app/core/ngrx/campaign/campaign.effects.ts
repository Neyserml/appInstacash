import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import * as compaignActions from "./campaign.actions";
import { CompaignApiService } from "../../services/compaign/compaign.service";
import { APIError, CampaignModel, ERROR_MESSAGE } from "../../models";

@Injectable()
export class CampaignEffects {
  constructor(
    private actions$: Actions,
    public compaignApiService: CompaignApiService
  ) {}

  @Effect()
  loadCampaing$ = this.actions$.pipe(
    ofType(compaignActions.LOAD),
    switchMap(() => {
      return this.compaignApiService.getCompaigns().pipe(
        map(
          (res) => new compaignActions.LoadSuccessAction(new CampaignModel(res))
        ),
        catchError((payload: any) => {
          if (payload.error?.mensaje) {
            return of(
              new compaignActions.LoadFailAction(payload.error.mensaje)
            );
          } else {
            return of(new compaignActions.LoadFailAction(ERROR_MESSAGE));
          }
        })
      );
    })
  );
}
