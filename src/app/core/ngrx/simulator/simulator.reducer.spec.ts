import { INITIAL_STATE } from "./simulator.state";
import { simulatorReducer } from "./simulator.reducer";
import {
  LoadAction,
  LoadFailAction,
  LoadSuccessAction,
} from "./simulator.actions";

describe("SimulatorReducer", () => {
  describe("undefined state", () => {
    it("should return the default state", () => {
      const action = { type: "NOOP" } as any;
      const result = simulatorReducer(undefined, action);

      expect(result).toBe(INITIAL_STATE);
    });
  });

  describe("[Simulator] Simulator LOAD", () => {
    it("should load", () => {
      const simulatorRequest = {
        quota: 20,
        amount: 2000,
      };
      const action = new LoadAction(simulatorRequest);
      const result = simulatorReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loading: true,
        error: null,
      });
    });
  });

  describe("[Simulator] Simulator FAIL", () => {
    it("should load fail", () => {
      const action = new LoadFailAction("state");
      const result = simulatorReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loaded: false,
        loading: false,
        error: action.payload,
      });
    });
  });

  describe("[Simulator] Simulator SUCCESS", () => {
    it("should load success", () => {
      const simulatorResponse = {
        monthly_amount: 382.5912,
      };
      const action = new LoadSuccessAction(simulatorResponse);
      const result = simulatorReducer(INITIAL_STATE, action);

      expect(result).toEqual({
        ...INITIAL_STATE,
        loading: false,
        loaded: true,
        data: action.payload,
      });
    });
  });
});
