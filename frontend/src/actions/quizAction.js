import axios from "axios";

import {
  ADMIN_STUDENTS_REQUEST,
  ADMIN_STUDENTS_SUCCESS,
  ADMIN_STUDENTS_FAIL,

  NEW_QUESTION_REQUEST,
  NEW_QUESTION_SUCCESS,
  NEW_QUESTION_FAIL,
 
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,

  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,

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


  CLEAR_ERRORS
} from "../constants/productConstants";

// CREATE NEW PRODUCT
export const createQuiz = (quizData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_QUESTION_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/admin/quiz/new`,quizData,config);
  
    dispatch({
      type: NEW_QUESTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_QUESTION_FAIL,
      payload: error.response.data.message,
    });
  }
};


// GET ALL Results For Teacher
export const getAllResults = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_STUDENTS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/view-results`);
  
    dispatch({
      type: ADMIN_STUDENTS_SUCCESS,
      payload: data.allResults,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_STUDENTS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// GET ALL Students For Teacher
export const getAllStudents = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_STUDENTS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/view-students`);
  
    dispatch({
      type: ADMIN_STUDENTS_SUCCESS,
      payload: data.allStudents,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_STUDENTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// DELETE PRODUCTs
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PRODUCT_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/product/${id}`);
  
    dispatch({
      type: DELETE_PRODUCT_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PRODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ALL Quiz 
export const getAdminQuiz = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_QUIZ_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/quiz`);
  
    dispatch({
      type: ALL_QUIZ_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_QUIZ_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ALL Test
export const getAdminTest = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TEST_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/test`);
  
    dispatch({
      type: ALL_TEST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TEST_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getQuizDetails = (id) => async (dispatch) =>{
  try{
    dispatch({type:QUIZ_DETAILS_REQUEST })
    console.log(id)
    const {data} = await axios.get(`/api/v1/admin/quiz/${id}`);
    console.log(data)
    dispatch({
      type:QUIZ_DETAILS_SUCCESS,
      payload:data.quizDetails
    })
  }catch(error){
    dispatch({
      type:QUIZ_DETAILS_FAIL,
      payload:error.response.data.message
    })
  }
}

export const getTestDetails = (id) => async (dispatch) =>{
  try{
    dispatch({type:TEST_DETAILS_REQUEST })
    const {data} = await axios.get(`/api/v1/admin/test/${id}`);
    dispatch({
      type:TEST_DETAILS_SUCCESS,
      payload:data.testDetails
    })
  }catch(error){
    dispatch({
      type:TEST_DETAILS_FAIL,
      payload:error.response.data.message
    })
  }
}

export const clearErrors = () => async (dispatch) =>{
  dispatch({type:CLEAR_ERRORS})
}
