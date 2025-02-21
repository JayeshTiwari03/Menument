import { LOADING_CATEGORIES, SET_CATEGORY_DATA } from "./actions";

const initialState = {
  loading: false,
  apiData: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CATEGORIES:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CATEGORY_DATA: {
      return {
        ...state,
        apiData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export const setLoadingCategories = (isLoading) => ({
  type: LOADING_CATEGORIES,
  payload: isLoading,
});

export const setCategoryData = (data) => ({
  type: SET_CATEGORY_DATA,
  payload: data,
});

export default categoryReducer;
