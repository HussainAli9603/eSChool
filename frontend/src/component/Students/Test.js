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


const Test = () => {

   const dispatch = useDispatch();
    const alert = useAlert();
    
    const { test,error } = useSelector((state) => state.test);

    useEffect(()=>{
      if(error){
        alert.error(error);
        dispatch(clearErrors)
      }
    
       dispatch(getAdminTest());
    },[dispatch,alert])

 
  return (
    <div className="dashboard">
      <MetaData title="Quiz and Test" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">TEST</Typography>

        <div className="dashboardSummary">
         {test &&
              test.map((product,index) => (
          <div className="dashboardSummaryBox2">
            <Link to={`/student/test/${product._id}`}>
              <p>Test</p>
              <h1>{index + 1}</h1>
            </Link>
              
          </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Test;
