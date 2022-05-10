import React,{ useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import MetaData from "../layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
  import {
    clearErrors,
    getAdminQuiz,
    getAdminTest,
  } from "../../actions/quizAction";
  import { useAlert } from "react-alert";


const Quiz = () => {

   const dispatch = useDispatch();
    const alert = useAlert();
    
    const { quiz,error } = useSelector((state) => state.quiz);

    useEffect(()=>{
      if(error){
        alert.error(error);
        dispatch(clearErrors)
      }
    
       dispatch(getAdminQuiz());
    },[dispatch,alert])

 
  return (
    <div className="dashboard">
      <MetaData title="Quiz and Test" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Quiz</Typography>

        <div className="dashboardSummary">
         {quiz &&
              quiz.map((product,index) => (
          <div className="dashboardSummaryBox2">
            <Link to={`/student/quiz/${product._id}`}>
              <p>Quiz</p>
              <h1>{index + 1}</h1>
            </Link>
              
          </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Quiz;
