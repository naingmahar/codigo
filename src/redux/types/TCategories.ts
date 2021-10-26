import { TStringObject } from "./Type";

export const ADD_CATEGORIES = "ADD_CATEGORIES"
export const CHOOSE_CATEGORY = "CHOOSE_CATEGORY"

export type TCategory = TStringObject
export type TCategories = TCategory[]

export type TChooseCategory = string

export interface ICategoriesState{
    categories: TStringObject[]
    choose:string
}

interface addCategoryAction{
    type: typeof ADD_CATEGORIES,
    payload: TCategories
}

interface chooseCategoryAction{
    type: typeof CHOOSE_CATEGORY,
    payload: TChooseCategory
}

export type TCategoriesAction = addCategoryAction|chooseCategoryAction