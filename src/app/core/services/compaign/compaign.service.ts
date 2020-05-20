import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ICompaignResponse } from "../../interfaces/compaign.interface";
import {
  ISimulationRequest,
  ISimulationResponse,
} from "../../interfaces/simulation.interface";

@Injectable()
export class CompaignApiService {
  private url = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getCompaigns(): Observable<ICompaignResponse> {
    const endpoint = `${this.url}/scotiabank/campaingns`;

    return this.http.get<ICompaignResponse>(endpoint);
  }

  public simulation(
    simulation: ISimulationRequest
  ): Observable<ISimulationResponse> {
    const endpoint = `${this.url}/scotiabank/simulation`;

    return this.http.post<ISimulationResponse>(endpoint, simulation);
  }
}
