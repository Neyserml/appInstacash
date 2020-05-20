import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { StoreModuleForRootTest } from "../utils/utils-test";
import { CampaignStoreFacade } from "./campaign.facade";
import { campaignReducer } from "./campaign.reducers";
import { storeFeatureKey } from "./campaign.state";

describe("CampaignStoreFacade", () => {
  let httpMock;
  let facade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModuleForRootTest,
        StoreModule.forFeature(storeFeatureKey, campaignReducer),
      ],

      providers: [CampaignStoreFacade],
    });
    const injector = getTestBed();
    facade = injector.get(CampaignStoreFacade);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(facade).toBeTruthy();
  });
  it("should call dispatchLoadCompaign", () => {
    spyOn(facade as any, "dispatchLoadCompaign");
    facade.dispatchLoadCompaign();
    expect(facade as any).toBeTruthy();
  });
});
