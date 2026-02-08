import {api} from "@/apiClient/api"
import { Airtime, Data } from "@/types/bills/airtimeData";



export async function getNetworkProviders(type:'airtime' | 'data') {
    if(type === "airtime") {
        const res = await api.get(`/bill-payment/airtime/networks`);
        return res.data;
    } else if(type === "data") {
        const res = await api.get(`/bill-payment/data/networks`);
        return res.data;
    }
}

export async function getDataBundleList(providerslug:string, billerProductSlug:string) {
  const res = await api.get(`/bill-payment/data/bundles?billerProviderSlug=${providerslug}&billerProductSlug=${billerProductSlug}`);
  return res.data;
}

export async function postAirtime(airtime:{airtime:Airtime}) {
  const res = await api.post(`/bill-payment/airtime/vend`, airtime);
  return res.data;
}

export async function postData(data:{data:Data}) {
  const res = await api.post(`/bill-payment/data/vend`, data);
  return res.data;
}