import { SimulatorModel } from "./simulator.model";
import { ISimulationResponse } from "../interfaces/simulation.interface";

describe("SimulatorModel", () => {
  let model: SimulatorModel;
  const simulatorResponse: ISimulationResponse = {
    monthly_amount: 382.5912,
  };

  it("should create model", () => {
    model = new SimulatorModel(simulatorResponse);
    expect(model).toBeDefined();
  });

  it("should create without parameter", () => {
    model = new SimulatorModel();
    expect(model).toBeDefined();
  });
});
