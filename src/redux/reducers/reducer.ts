import { combineReducers } from 'redux';
import { categoriesReducer } from './categories.reducer';
import { ratesReducer } from './rates.reducer';

export const rootReducer = combineReducers({
  categories: categoriesReducer,
  rates:ratesReducer
});

export type RootState = ReturnType<typeof rootReducer>;