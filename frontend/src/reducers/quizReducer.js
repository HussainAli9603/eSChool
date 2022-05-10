import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,

  ADMIN_STUDENTS_REQUEST,
  ADMIN_STUDENTS_SUCCESS,
  ADMIN_STUDENTS_FAIL,

  NEW_QUESTION_REQUEST,
  NEW_QUESTION_SUCCESS,
  NEW_QUESTION_RESET,
  NEW_QUESTION_FAIL,

  ALL_QUIZ_REQUEST,
  ALL_QUIZ_SUCCESS,
  ALL_QUIZ_FAIL,

  ALL_TEST_REQUEST,
  ALL_TEST_SUCCESS,
  ALL_TEST_FAIL,

  QUIZ_DETAILS_REQUEST,
  QUIZ_DETAILS_SUCCESS,
  QUIZ_DETAILS_FAIL,

  TEST_DETAILS_REQUEST,
  TEST_DETAILS_SUCCESS,
  TEST_DETAILS_FAIL,

  CLEAR_ERRORS,
} from "../constants/productConstants";
  

export const resultsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ADMIN_STUDENTS_REQUEST:  
      return {
        loading: true,
        results: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        results: action.payload.results,
        resultsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ADMIN_STUDENTS_SUCCESS:
      return {
        loading: false,
        results: action.payload,
      };  
    case ALL_PRODUCT_FAIL:
    case ADMIN_STUDENTS_FAIL:  
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

export const newQuestionReducer = (state = {questions:{}}, action) => {
  switch (action.type) {
    case NEW_QUESTION_REQUEST:
      return {
        ...state, 
        loading: true,
      };
    case NEW_QUESTION_SUCCESS:
      return {
        loading: false,
        success:action.payload.success,
        questions:action.payload.newQuestion        
      };
    case NEW_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_QUESTION_RESET:
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

export const studentsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
    case ADMIN_STUDENTS_REQUEST:  
      return {
        loading: true,
        results: [],
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        students: action.payload.students,
        resultsCount: action.payload.productsCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProductsCount: action.payload.filteredProductsCount,
      };
    case ADMIN_STUDENTS_SUCCESS:
      return {
        loading: false,
        students: action.payload,
      };  
    case ALL_PRODUCT_FAIL:
    case ADMIN_STUDENTS_FAIL:  
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

export const quizReducer = (state = { quiz: [] }, action) => {
  switch (action.type) {
    case ALL_QUIZ_REQUEST: 
      return {
        loading: true,
        quiz: [],
      };
    case ALL_QUIZ_SUCCESS:
      return {
        loading: false,
        quiz: action.payload.quiz,
        
      }; 
    case ALL_QUIZ_FAIL:  
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

export const testReducer = (state = { test: [] }, action) => {
  switch (action.type) {
    case ALL_TEST_REQUEST: 
      return {
        loading: true,
        test: [],
      };
    case ALL_TEST_SUCCESS:
      return {
        loading: false,
        test: action.payload.test,
        
      }; 
    case ALL_TEST_FAIL:  
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

export const quizDetailsReducer = (state = { quiz: {} }, action) => {
  switch (action.type) {
    case QUIZ_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case QUIZ_DETAILS_SUCCESS:
      return {
        loading: false,
        quiz: action.payload,
      };
    case QUIZ_DETAILS_FAIL:
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
export const testDetailsReducer = (state = { test: {} }, action) => {
  switch (action.type) {
    case TEST_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TEST_DETAILS_SUCCESS:
      return {
        loading: false,
        test: action.payload,
      };
    case TEST_DETAILS_FAIL:
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







