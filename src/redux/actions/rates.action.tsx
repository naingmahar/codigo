import {IRatesState, TRates,TRatesAction,TStringObject,UPDATE_RATES } from '..';
import { APIService } from '../../lib/API';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';

const addRatesSuccess: ActionCreator<TRatesAction> = (payload:IRatesState) => {
  return { type: UPDATE_RATES, payload };
}


export function addRates() {
  return dispatch => { 
    dispatch(request());
    
    return APIService.getRates()
      .then(
        response => {
          dispatch(addRatesSuccess({rates:response.rates,timestamp:new Date()}))
        },
        error => {
          dispatch(failure(error||'Server error.'))
        })
  }
}
