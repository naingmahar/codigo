import { ADD_CATEGORIES,CHOOSE_CATEGORY,TCategoriesAction,TCategories, TChooseCategory, TStringObject } from '../types';
import { APIService } from '../../lib/API';
import { request, failure } from './common.actions';
import { ActionCreator } from 'redux';

const addCategorySuccess: ActionCreator<TCategoriesAction> = (categories:TCategories) => {
  return { type: ADD_CATEGORIES, payload: categories };
}

export const chooseCategory: ActionCreator<TCategoriesAction> = (choose: TChooseCategory) => {
  return { type: CHOOSE_CATEGORY, payload: choose };
}


const formatCategories = (res:TStringObject):TCategories => {
  return Object.keys(res).map(data => ({ [data] : res[data] }))
}


export function addCategories() {
  return dispatch => { 
    dispatch(request());
    return APIService.getCategories()
      .then(
        response => {
          const data = formatCategories(response.currencies)
          dispatch(addCategorySuccess(data))
        },
        error => {
          dispatch(failure(error||'Server error.'))
        })
  }
}
