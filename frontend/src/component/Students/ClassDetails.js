import React, { Fragment, useEffect,useState} from "react";
import "./calander.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import DatePicker from 'sassy-datepicker';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getClassDetails,
} from "../../actions/classAction";
import { useAlert } from "react-alert";


const ClassDetails = ({match}) => {
    const onChange = (date) => {
        console.log(date.toString());
      };

  const dispatch = useDispatch();
  const alert = useAlert();

  const { classes,error } = useSelector((state) => state.classesDetails);
  console.log(classes)

  const quizId = match.params.id;

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   dispatch(getClassDetails(match.params.id))
  },[dispatch,alert,error, quizId,classes])


  return (
    <Fragment>
    <MetaData title={`View Class - Student`} />

    <div className="dashboard">
      <SideBar />
      <div className="productListContainer">
        <h1 id="productListHeading">View Class</h1>

         <div className="container1">

            <div className="card2">
              <div className="card-body2">
        
                <div className="user user11">
                  <div className="user-info">
                    <h1>{classes.name}</h1>
                    <p>.</p>
                    <p>{classes.description}</p>
                    <p>{classes.instructorName}</p>

                  </div>
                </div>
              
                 
              </div>
            </div>
         </div>          
      </div>
    </div>
  </Fragment>
  );
};

export default ClassDetails;
