import {
  ADD_CATEGORIES,
  CHOOSE_CATEGORY,
  ICategoriesState,
  TCategoriesAction
} from "../types/TCategories";

const initialFeedState: ICategoriesState = {
  categories: [],
  choose:""
};

  
export function categoriesReducer(
  state: ICategoriesState = initialFeedState,
  action: TCategoriesAction
): ICategoriesState {

    switch (action.type) {
      case ADD_CATEGORIES: {
        return {
          ...state,
          categories: action.payload
        };
      }
      case CHOOSE_CATEGORY: {
        return {
          ...state,
          choose: action.payload
        };
      }
      default:
        return state
    }
  };