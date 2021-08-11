import { types } from '../types/types';

const initialState = {
  loading: false,
  msjError: null,
  uploading: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiSetError:
      return {
        ...state,
        msjError: action.payload,
      };
    case types.uiRemoveError:
      return {
        ...state,
        msjError: null,
      };
    case types.uiStartLoading:
      return {
        ...state,
        loading: true,
      };
    case types.uiFinishLoading:
      return {
        ...state,
        loading: false,
      };
    case types.uiStartUploading:
      return {
        ...state,
        uploading: true,
      }
    case types.uiFinishUploading:
      return {
        ...state,
        uploading: false,
      }
    default:
      return state;
  }
};
