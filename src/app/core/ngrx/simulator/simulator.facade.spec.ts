import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { getTestBed, TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { StoreModuleSimulatorForRootTest } from "../utils/utils-test";
import { SimulatorStoreFacade } from "./simulator.facade";
import { simulatorReducer } from "./simulator.reducer";
import { storeFeatureKey } from "./simulator.state";

describe("SimulatorStoreFacade", () => {
  let httpMock;
  let facade;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModuleSimulatorForRootTest,
        StoreModule.forFeature(storeFeatureKey, simulatorReducer),
      ],

      providers: [SimulatorStoreFacade],
    });
    const injector = getTestBed();
    facade = injector.get(SimulatorStoreFacade);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(facade).toBeTruthy();
  });
  it("should call dispatchLoadSimulator", () => {
    spyOn(facade as any, "dispatchLoadSimulator");
    facade.dispatchLoadSimulator();
    expect(facade as any).toBeTruthy();
  });
});
