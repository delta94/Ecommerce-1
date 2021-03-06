import { ProductProps } from "../types/app_types";
import * as actions from "../constants/productConstant";

const productsState = {
  products: [] as ProductProps[],
  loading: false,
};

export const productReducer = (
  state = productsState,
  action: actions.productAction
) => {
  switch (action.type) {
    case actions.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case actions.PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case actions.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productState = {
  products: {} as ProductProps,
  loading: false,
};

export const productDetailsReducer = (
  state = productState,
  action: actions.productDetailAction
) => {
  switch (action.type) {
    case actions.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actions.PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case actions.PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return { state };
  }
};
