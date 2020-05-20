import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Actions } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { of, ReplaySubject, throwError } from "rxjs";
import { APIError, CampaignModel, ERROR_MESSAGE } from "../../models";
import { CompaignApiService } from "../../services/compaign";
import { StoreModuleForRootTest } from "../utils/utils-test";
import * as campaignActions from "./campaign.actions";
import { CampaignEffects } from "./campaign.effects";
import { campaignReducer } from "./campaign.reducers";
import { storeFeatureKey } from "./campaign.state";
xdescribe("CampaignEffects", () => {
  let effects: CampaignEffects;
  let campaignApi;
  let actions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModuleForRootTest,
        StoreModule.forFeature(storeFeatureKey, campaignReducer),
        HttpClientTestingModule,
      ],
      providers: [
        Actions,
        CampaignEffects,
        {
          provide: CompaignApiService,
          useValue: jasmine.createSpyObj("myCampaignApi", ["getCompaigns"]),
        },
      ],
    });

    effects = TestBed.get(CampaignEffects);
    actions = new ReplaySubject(1);

    campaignApi = TestBed.get(CompaignApiService) as jasmine.SpyObj<
      CompaignApiService
    >;
  });

  it("should return a error", (done) => {
    campaignApi.getCompaigns.and.returnValue(
      throwError(new APIError(500, { mensaje: ERROR_MESSAGE }))
    );
    actions.next(new campaignActions.LoadAction());
    effects.loadCampaing$.subscribe((result) => {
      expect(result).toEqual(new campaignActions.LoadFailAction(ERROR_MESSAGE));
      done();
    });
  });

  it("should return success", (done) => {
    const compaigResponse = {
      campaign_name: "InstaCash",
      min_quota: 1,
      max_quota: 48,
      max_amount: 19600,
      min_amount: 1500,
      tea: 26.5612,
      payment_date: "2019-12-26T16:30:04.591Z",
      currency: "PEN",
    };
    campaignApi.getCompaigns.and.returnValue(of(compaigResponse));

    actions.next(new campaignActions.LoadAction());

    effects.loadCampaing$.subscribe((result) => {
      expect(result).toEqual(
        new campaignActions.LoadSuccessAction(
          new CampaignModel(compaigResponse)
        )
      );
      done();
    });
  });
});
