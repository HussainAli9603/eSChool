import axios from "axios";

import {
  ALL_COURSES_FAIL,
  ALL_COURSES_REQUEST,
  ALL_COURSES_SUCCESS,

  NEW_COURSES_REQUEST,
  NEW_COURSES_SUCCESS,
  NEW_COURSES_FAIL,

    NEW_COURSESS_REQUEST,
  NEW_COURSESS_SUCCESS,
  NEW_COURSESS_FAIL,
  
  COURSES_DETAILS_FAIL,
  COURSES_DETAILS_REQUEST,
  COURSES_DETAILS_SUCCESS,

  DELETE_COURSES_REQUEST,
  DELETE_COURSES_SUCCESS,
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

   TOPIC_DETAILS_FAIL,
  TOPIC_DETAILS_REQUEST,
  TOPIC_DETAILS_SUCCESS,

  TOPICS_DETAILS_FAIL,
  TOPICS_DETAILS_REQUEST,
  TOPICS_DETAILS_SUCCESS,

  CLEAR_ERRORS
} from "../constants/courseConstants";

export const getCoursesDetails = (id) => async (dispatch) =>{
  try{
    dispatch({type:COURSES_DETAILS_REQUEST })
    const {data} = await axios.get(`/api/v1/admin/courses/${id}`);
    dispatch({
      type:COURSES_DETAILS_SUCCESS,
      courses:data.courses
    })
  }catch(error){
    dispatch({
      type:COURSES_DETAILS_FAIL,
      payload:error.response.data.message
    })
  }
}

export const getCoursesDetails2 = (id) => async (dispatch) =>{
  try{
    dispatch({type:TOPICS_DETAILS_REQUEST })
    const {data} = await axios.get(`/api/v1/student/courses/${id}`);
    dispatch({
      type:TOPICS_DETAILS_SUCCESS,
      payload:data.courses
    })
  }catch(error){
    dispatch({
      type:TOPICS_DETAILS_FAIL,
      payload:error.response.data.message
    })
  }
}


// CREATE NEW COURSES
export const createCourses = (courseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COURSES_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/admin/courses/new`,courseData,config);
  
    dispatch({
      type: NEW_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COURSES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CREATE COURSES TOPIC
export const createCoursesTopic = (courseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_COURSESS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/admin/course-topic/new`,courseData,config);
  
    dispatch({
      type: NEW_COURSESS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_COURSESS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// GET ALL COURSES For ADMIN
export const getAdminCourses = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COURSES_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/courses/all`);
    console.log(data)
  
    dispatch({
      type: ALL_COURSES_SUCCESS,
      payload: data.courses,
    });
  } catch (error) {
    dispatch({
      type: ALL_COURSES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// DELETE COURSES
export const deleteCourses = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COURSES_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/courses/${id}`);
  
    dispatch({
      type: DELETE_COURSES_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_COURSES_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET Today Calander For ADMIN
export const getAdminCalander = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CALANDER_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/calander/today`);
    console.log(data)
  
    dispatch({
      type: ALL_CALANDER_SUCCESS,
      payload: data.calander,
    });
  } catch (error) {
    dispatch({
      type: ALL_CALANDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET UpComming Calander For ADMIN
export const getAdminCalanderupComming = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CALANDER2_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/calander/upComming`);
    console.log(data)
  
    dispatch({
      type: ALL_CALANDER2_SUCCESS,
      payload: data.calander,
    });
  } catch (error) {
    dispatch({
      type: ALL_CALANDER2_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CREATE COURSES TOPIC
export const createCalander = (courseData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CALANDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/admin/calander/new`,courseData,config);
  
    dispatch({
      type: NEW_CALANDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CALANDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) =>{
  dispatch({type:CLEAR_ERRORS})
}
