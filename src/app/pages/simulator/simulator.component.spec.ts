import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { SimulatorComponent } from "./simulator.component";
import { CampaignStoreFacade } from "src/app/core/ngrx/campaign/campaign.facade";
import { SimulatorStoreFacade } from "src/app/core/ngrx/simulator/simulator.facade";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { StoreModuleForRootTest } from "src/app/core/ngrx/utils/utils-test";
import { StoreModule } from "@ngrx/store";
import { storeFeatureKey } from "src/app/core/ngrx/campaign/campaign.state";
import { campaignReducer } from "src/app/core/ngrx/campaign/campaign.reducers";
import { PreloaderComponent } from "src/app/shared/components";
import { of } from "rxjs/internal/observable/of";
import { ICompaignResponse } from "src/app/core/interfaces/compaign.interface";

describe("SimulatorComponent", () => {
  let component: SimulatorComponent;
  let fixture: ComponentFixture<SimulatorComponent>;
  let _campaignStoreFacade;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModuleForRootTest,
        StoreModule.forFeature(storeFeatureKey, campaignReducer),
      ],
      declarations: [SimulatorComponent, PreloaderComponent],
      providers: [CampaignStoreFacade, SimulatorStoreFacade],
    }).compileComponents();
  }));

  beforeEach(() => {
    _campaignStoreFacade = TestBed.get(CampaignStoreFacade) as jasmine.SpyObj<
      CampaignStoreFacade
    >;
    fixture = TestBed.createComponent(SimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should  loadCompaign on ngOnInit", () => {
    spyOn(component as any, "loadCompaign");
    component.ngOnInit();
    expect((component as any).loadCompaign).toHaveBeenCalled();
  });
  it("should registerEvents on ngOnInit", () => {
    spyOn(component as any, "registerEvents");
    component.ngOnInit();
    expect((component as any).registerEvents).toHaveBeenCalled();
  });
  it("should unsubscribe events on destroy", () => {
    spyOn(component as any, "unsubscribeSuscriptions");
    component.ngOnDestroy();

    expect((component as any).unsubscribeSuscriptions).toHaveBeenCalled();
  });

  describe("#registerEvents", () => {
    it("should return null response getCompaign", () => {
      _campaignStoreFacade.getCompaign$.subscribe(
        (response: ICompaignResponse) => {
          expect(response).toEqual(null);
        }
      );
    });
  });
});
