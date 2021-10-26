interface IDefault {
  info: string;
  description: string;
}

export interface IResCategories extends IDefault {
  currencies: {[key: string]: string};
}

export interface IResRates extends IDefault {
  timestamp: string;
  rates: {[key: string]: string};
}