import {
  ALL_CLASS_FAIL,
  ALL_CLASS_REQUEST,
  ALL_CLASS_SUCCESS,

  NEW_CLASS_REQUEST,
  NEW_CLASS_SUCCESS,
  NEW_CLASS_RESET,
  NEW_CLASS_FAIL,

  CLASS_DETAILS_FAIL,
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_SUCCESS,

  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_RESET,
  DELETE_CLASS_FAIL,

  CLEAR_ERRORS,
} from "../constants/classConstants";
  

export const classesReducer = (state = { classes: [] }, action) => {
  switch (action.type) {
    case ALL_CLASS_REQUEST: 
      return {
        loading: true,
        classes: [],
      };
    case ALL_CLASS_SUCCESS:
      return {
        loading: false,
        classes: action.payload,
      };
    
    case ALL_CLASS_FAIL: 
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const classesDetailsReducer = (state = { classes: {} }, action) => {
  switch (action.type) {
    case CLASS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CLASS_DETAILS_SUCCESS:
      return {
        loading: false,
        classes: action.payload,        
      };
    case CLASS_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newClassesReducer = (state = {class:{}}, action) => {
  switch (action.type) {
    case NEW_CLASS_REQUEST:
      return {
        ...state, 
        loading: true,
      };
    case NEW_CLASS_SUCCESS:
      return {
        loading: false,
        success:action.payload.success,
        class:action.payload.class        
      };
    case NEW_CLASS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CLASS_RESET:
      return {
        ...state,
        success: false,
      };  

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const classReducer = (state = { }, action) => {
  switch (action.type) {
    case DELETE_CLASS_REQUEST:  
      return {
        ...state,
        loading: true,
      };
    case DELETE_CLASS_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_CLASS_FAIL:  
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_CLASS_RESET:  
    return {
      ...state,
      isDeleted: false,
    }; 

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};




