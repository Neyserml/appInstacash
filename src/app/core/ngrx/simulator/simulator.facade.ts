import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import * as simulatorActions from "./simulator.actions";
import * as fromSimulatorSelectors from "./simulador.selectors";
import * as fromSimulatorState from "./simulator.state";
import { ISimulationRequest } from "../../interfaces/simulation.interface";
@Injectable()
export class SimulatorStoreFacade {
  getSimulation$ = this.store.select(fromSimulatorSelectors.getSimulator);
  loading$ = this.store.select(fromSimulatorSelectors.getSimulatorLoading);
  failed$ = this.store.select(fromSimulatorSelectors.getSimulatorFailed);
  constructor(private store: Store<fromSimulatorState.SimulatorState>) {}
  public dispatchLoadSimulator(payload: ISimulationRequest) {
    this.store.dispatch(new simulatorActions.LoadAction(payload));
  }
}
