import SHOP_DATA from "./shop_data";
import { ShopActionTypes } from "./collections.types";

const INITIAL_STATE = {
  shop: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        shop: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
