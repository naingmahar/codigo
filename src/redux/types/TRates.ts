import { TStringObject } from "./Type";

export const UPDATE_RATES = "UPDATE_RATES"

export type TRates =TStringObject
    


export interface IRatesState{
    rates: TRates,
    timestamp: string|Date
}

interface updateRateAction{
    type: typeof UPDATE_RATES,
    payload: IRatesState
}


export type TRatesAction = updateRateAction