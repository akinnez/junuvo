import apiStore from "@/apiClient/apiStore";
import { getDataBundleList, getNetworkProviders, postAirtime, postData } from "@/services/Bills/airtimeDataService";
import {
  getProviders,
  getValidateBettingService,
  getVerifyBettingTransaction
} from "@/services/Bills/bettingService";
import { Airtime, Data } from "@/types/bills/airtimeData";
import { action, asReadonly, resource } from "nabd";

const _airtimeProvider = resource({
  fetch: async () => {
    const res = await getNetworkProviders('airtime');
    return res.data;
  },
});

export const dataBundle = action((datatype)=>{
resource({
  fetch: async () => {
    const res = await getDataBundleList('buypower', datatype);
    return res.data;
  },
})
}) 

const _dataProvider = resource({
  fetch: async () => {
    const res = await getNetworkProviders('data');
    return res.data;
  },
});
export const dataStore = apiStore(
  {
    mutation: (data: { data: Data }) => postData(data),
    onSuccess: (res: DataResponse<any>) => res
  }
);
export const airtimeStore = apiStore(
  {
    mutation: (airtime: { airtime: Airtime }) => postAirtime(airtime),
    onSuccess: (res: DataResponse<any>) => res
  }
);


export const airtimeProvider = asReadonly(_airtimeProvider.data);
export const dataProvider = asReadonly(_dataProvider.data);























