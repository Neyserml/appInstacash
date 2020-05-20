import { Component, Input, OnInit } from "@angular/core";
import { ICompaignResponse } from "src/app/core/interfaces/compaign.interface";
import { ISimulationResponse } from "src/app/core/interfaces/simulation.interface";
import { currencyFormat } from "src/app/shared/utils/helpers";

@Component({
  selector: "app-result-simulator",
  templateUrl: "./result-simulator.component.html",
  styleUrls: ["./result-simulator.component.css"],
})
export class ResultSimulatorComponent implements OnInit {
  @Input() public campaign: ICompaignResponse;
  @Input() public monthlyAmount: ISimulationResponse;
  public _currencyFormat = currencyFormat;
  constructor() {}

  ngOnInit(): void {}
}
