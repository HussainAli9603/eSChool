import {
  ALL_COURSES_FAIL,
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,

  NEW_COURSES_REQUEST,
  NEW_COURSES_SUCCESS,
  NEW_COURSES_RESET,
  NEW_COURSES_FAIL,

  COURSES_DETAILS_FAIL,
  COURSES_DETAILS_REQUEST,
  COURSES_DETAILS_SUCCESS,

  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
  DELETE_COURSES_RESET,
  DELETE_COURSES_FAIL,
  
  ALL_CALANDER_FAIL,
  ALL_CALANDER_REQUEST,
  ALL_CALANDER_SUCCESS,

  ALL_CALANDER2_FAIL,
  ALL_CALANDER2_REQUEST,
  ALL_CALANDER2_SUCCESS,

  NEW_CALANDER_FAIL,
  NEW_CALANDER_REQUEST,
  NEW_CALANDER_SUCCESS,
  NEW_CALANDER_RESET,

  TOPIC_DETAILS_FAIL,
  TOPIC_DETAILS_REQUEST,
  TOPIC_DETAILS_SUCCESS,

  TOPICS_DETAILS_FAIL,
  TOPICS_DETAILS_REQUEST,
  TOPICS_DETAILS_SUCCESS,

  NEW_COURSESS_REQUEST,
  NEW_COURSESS_SUCCESS,
  NEW_COURSESS_FAIL,
  NEW_COURSESS_RESET,

  CLEAR_ERRORS,
} from "../constants/courseConstants";
  

export const coursesReducer = (state = { courses: [] }, action) => {
  switch (action.type) {
    case ALL_COURSES_REQUEST: 
      return {
        loading: true,
        courses: [],
      };
    case ALL_COURSES_SUCCESS:
      return {
        loading: false,
        courses: action.payload,
      };
    
    case ALL_COURSES_FAIL: 
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

export const coursesDetailsReducer = (state = { courses: {} }, action) => {
  switch (action.type) {
    case COURSES_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case COURSES_DETAILS_SUCCESS:
      return {
        loading: false,
        courses: action.payload,        
      };
    case COURSES_DETAILS_FAIL:
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

export const coursesTopicDetailsReducer = (state = { courses: {} }, action) => {
  switch (action.type) {
    case TOPIC_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TOPIC_DETAILS_SUCCESS:
      return {
        loading: false,
        courses: action.payload,        
      };
    case TOPIC_DETAILS_FAIL:
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

export const coursesTopicsDetailsReducer = (state = { coursess: {} }, action) => {
  switch (action.type) {
    case TOPICS_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TOPICS_DETAILS_SUCCESS:
      return {
        loading: false,
        coursess: action.payload,        
      };
    case TOPICS_DETAILS_FAIL:
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

export const newCoursesReducer = (state = {course:{}}, action) => {
  switch (action.type) {
    case NEW_COURSES_REQUEST:
      return {
        ...state, 
        loading: true,
      };
    case NEW_COURSES_SUCCESS:
      return {
        loading: false,
        success:action.payload.success,
        course:action.payload.course        
      };
    case NEW_COURSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_COURSES_RESET:
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

export const newCoursesTopicReducer = (state = {course:{}}, action) => {
  switch (action.type) {
    case NEW_COURSESS_REQUEST:
      return {
        ...state, 
        loading: true,
      };
    case NEW_COURSESS_SUCCESS:
      return {
        loading: false,
        success:action.payload.success,
        course:action.payload.course        
      };
    case NEW_COURSESS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_COURSESS_RESET:
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
export const courseReducer = (state = { }, action) => {
  switch (action.type) {
    case DELETE_COURSES_REQUEST:  
      return {
        ...state,
        loading: true,
      };
    case DELETE_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_COURSES_FAIL:  
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_COURSES_RESET:  
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

export const calanderReducer = (state = { calander: [] }, action) => {
  switch (action.type) {
    case ALL_CALANDER_REQUEST: 
      return {
        loading: true,
        calander: [],
      };
    case ALL_CALANDER_SUCCESS:
      return {
        loading: false,
        calander: action.payload,
      };
    
    case ALL_CALANDER_FAIL: 
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

export const calander2Reducer = (state = { calander: [] }, action) => {
  switch (action.type) {
    case ALL_CALANDER2_REQUEST: 
      return {
        loading: true,
        calander: [],
      };
    case ALL_CALANDER2_SUCCESS:
      return {
        loading: false,
        calander: action.payload,
      };
    
    case ALL_CALANDER2_FAIL: 
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

export const newCalanderReducer = (state = {calander:{}}, action) => {
  switch (action.type) {
    case NEW_CALANDER_REQUEST:
      return {
        ...state, 
        loading: true,
      };
    case NEW_CALANDER_SUCCESS:
      return {
        loading: false,
        success:action.payload.success,
        calander:action.payload.newCalander        
      };
    case NEW_CALANDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_CALANDER_RESET:
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


