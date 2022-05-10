import axios from "axios";

import {
  ALL_CLASS_FAIL,
  ALL_CLASS_REQUEST,
  ALL_CLASS_SUCCESS,

  NEW_CLASS_REQUEST,
  NEW_CLASS_SUCCESS,
  NEW_CLASS_FAIL,
  
  CLASS_DETAILS_FAIL,
  CLASS_DETAILS_REQUEST,
  CLASS_DETAILS_SUCCESS,

  DELETE_CLASS_REQUEST,
  DELETE_CLASS_SUCCESS,
  DELETE_CLASS_FAIL,

  CLEAR_ERRORS
} from "../constants/classConstants";

export const getClassDetails = (id) => async (dispatch) =>{
  try{
    dispatch({type:CLASS_DETAILS_REQUEST })
    const {data} = await axios.get(`/api/v1/admin/class/${id}`);
    
    dispatch({
      type:CLASS_DETAILS_SUCCESS,
      payload:data.classes,
    })
  }catch(error){
    dispatch({
      type:CLASS_DETAILS_FAIL,
      payload:error.response.data.message,
    })
  }
}


// CREATE NEW CLASS
export const createClass = (classData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_CLASS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(`/api/v1/admin/classes/new`,classData,config);
  
    dispatch({
      type: NEW_CLASS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};


// GET ALL CLASSES For ADMIN
export const getAdminClass = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CLASS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/classes/all`);
  
    dispatch({
      type: ALL_CLASS_SUCCESS,
      payload: data.classes,
    });
  } catch (error) {
    dispatch({
      type: ALL_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// DELETE CLASSES
export const deleteClass = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CLASS_REQUEST });

    const { data } = await axios.delete(`/api/v1/admin/classes/${id}`);
  
    dispatch({
      type: DELETE_CLASS_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLASS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) =>{
  dispatch({type:CLEAR_ERRORS})
}
