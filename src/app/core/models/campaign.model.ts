import { ICompaignResponse } from "../interfaces/compaign.interface";
import * as moment from "moment";

export class CampaignModel implements ICompaignResponse {
  campaign_name: string;
  min_quota: number;
  max_quota: number;
  max_amount: number;
  min_amount: number;
  tea: number;
  payment_date: string;
  currency: string;
  constructor(response: ICompaignResponse = null) {
    if (response) {
      this.campaign_name = response.campaign_name ? response.campaign_name : "";
      this.min_quota = response.min_quota ? response.min_quota : 0;
      this.max_quota = response.max_quota ? response.max_quota : 0;
      this.max_amount = response.max_amount ? response.max_amount : 0;
      this.min_amount = response.min_amount ? response.min_amount : 0;
      this.tea = response.tea ? response.tea : 0;
      this.payment_date = response.payment_date
        ? moment(response.payment_date).format("D") +
          " " +
          moment(response.payment_date).format("MMM") +
          "."
        : "";
      this.currency = response.currency ? response.currency : "";
    } else {
      this.campaign_name = "";
      this.min_quota = 0;
      this.max_quota = 0;
      this.max_amount = 0;
      this.min_amount = 0;
      this.tea = 0;
      this.payment_date = "";
      this.currency = "";
    }
  }
}
