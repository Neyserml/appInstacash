import { TestBed, getTestBed } from "@angular/core/testing";

import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { CompaignApiService } from "./compaign.service";

describe("CompaignApiService", () => {
  let httpMock;
  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompaignApiService],
    });
    const injector = getTestBed();
    service = injector.get(CompaignApiService);
    httpMock = injector.get(HttpTestingController);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call api get on Compaigns", () => {
    spyOn((service as any).http, "get");
    const endpoint = (service as any).url + "/scotiabank/campaingns";
    service.getCompaigns();
    expect((service as any).http.get).toHaveBeenCalledWith(endpoint);
  });

  it("should call api post on simulation", () => {
    spyOn((service as any).http, "post");
    var payload = {
      quota: 10,
      amount: 2500,
    };
    const endpoint = (service as any).url + "/scotiabank/simulation";
    service.simulation(payload);
    expect((service as any).http.post).toHaveBeenCalledWith(endpoint, payload);
  });
});
