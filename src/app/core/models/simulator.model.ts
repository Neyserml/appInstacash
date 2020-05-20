import { ISimulationResponse } from "../interfaces/simulation.interface";

export class SimulatorModel implements ISimulationResponse {
  monthly_amount: number;
  constructor(response: ISimulationResponse = null) {
    if (response) {
      this.monthly_amount = response.monthly_amount
        ? response.monthly_amount
        : 0;
    } else {
      this.monthly_amount = 0;
    }
  }
}
