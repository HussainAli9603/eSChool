import React, { Fragment, useEffect,useState} from "react";
import "./calander.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import DatePicker from 'sassy-datepicker';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getQuizDetails,
  getTestDetails,
} from "../../actions/quizAction";
import { useAlert } from "react-alert";


const QuizDetails = ({match}) => {
    const onChange = (date) => {
        console.log(date.toString());
      };

  const dispatch = useDispatch();
  const alert = useAlert();

  const { test,error } = useSelector((state) => state.testDetails);

  const quizId = match.params.id;

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   dispatch(getTestDetails(match.params.id))
  },[dispatch,alert,error, quizId, test])


  return (
    <Fragment>
    <MetaData title={`View Test - Student`} />

    <div className="dashboard">
      <SideBar />
      <div className="productListContainer">
        <h1 id="productListHeading">View Test</h1>

         <div className="container1">

            <div className="card2">
              <div className="card-body2">
        
                <div className="user user11">
                  <div className="user-info">
                    <h1>{test.addQuestion}</h1>
                    <p>Marks:{test.pointType}</p>
                    <p>Subject:{test.questionType}</p>

                     <Link to={`/student/test/answer/${test._id}`}>
                      <p>View Answer</p>
                    </Link>
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

export default QuizDetails;
