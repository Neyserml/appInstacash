import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/internal/operators/takeUntil";
import { ICompaignResponse } from "src/app/core/interfaces/compaign.interface";
import {
  ISimulationRequest,
  ISimulationResponse,
} from "src/app/core/interfaces/simulation.interface";
import { CampaignStoreFacade } from "src/app/core/ngrx/campaign/campaign.facade";
import { SimulatorStoreFacade } from "src/app/core/ngrx/simulator/simulator.facade";
import { currencyFormat } from "src/app/shared/utils/helpers";

@Component({
  selector: "app-home",
  templateUrl: "./simulator.component.html",
  styleUrls: ["./simulator.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class SimulatorComponent implements OnInit {
  public loadingCampaign$ = this._campaignStoreFacade.loading$;
  public failedCampaign$ = this._campaignStoreFacade.failed$;
  public loadingSimulator$ = this._simulatorStoreFacade.loading$;
  public failedSimulator$ = this._simulatorStoreFacade.failed$;

  public destroy$: Subject<void> = new Subject<void>();
  public campaign: ICompaignResponse;
  public monthlyAmount: ISimulationResponse;
  public amount: string;
  public quota: number;
  public errormessageamount: string;
  public _currencyFormat = currencyFormat;
  @ViewChild("amountInput") amountInput: ElementRef;
  constructor(
    private _campaignStoreFacade: CampaignStoreFacade,
    private _simulatorStoreFacade: SimulatorStoreFacade
  ) {}

  ngOnInit(): void {
    this.loadCompaign();
    this.registerEvents();
  }

  public onKeyAmount(): void {
    if (
      parseInt(this.amount) <= this.campaign.max_amount &&
      parseInt(this.amount) >= this.campaign.min_amount
    ) {
      this.errormessageamount = "";
    } else if (parseInt(this.amount) > this.campaign.max_amount) {
      this.errormessageamount =
        "Error el monto ingresado supera al monto máximo";
    } else if (parseInt(this.amount) < this.campaign.min_amount) {
      this.errormessageamount =
        "Error el monto ingresado es menor al monto mínimo";
    }
    this.amountInput.nativeElement.focus();
  }
  public getSimulation() {
    if (parseInt(this.amount) > this.campaign.max_amount) {
      return false;
    } else if (parseInt(this.amount) < this.campaign.min_amount) {
      return false;
    }
    if (this.amount && this.quota) {
      let amount_ = parseInt(this.amount);
      var request: ISimulationRequest = {
        quota: this.quota,
        amount: amount_,
      };
      this._simulatorStoreFacade.dispatchLoadSimulator(request);
      this._simulatorStoreFacade.getSimulation$
        .pipe(takeUntil(this.destroy$))
        .subscribe((response: ISimulationResponse) => {
          if (response) {
            this.monthlyAmount = response;
          }
        });
    }
  }
  public loadCompaign(): void {
    this._campaignStoreFacade.dispatchLoadCompaign();
  }
  public registerEvents(): void {
    this._campaignStoreFacade.getCompaign$
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: ICompaignResponse) => {
        if (response) {
          this.campaign = response;
        }
      });
  }
  ngOnDestroy(): void {
    this.unsubscribeSuscriptions();
  }
  public unsubscribeSuscriptions() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
