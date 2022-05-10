import React, { Fragment, useEffect,useState} from "react";
import "./calander.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import DatePicker from 'sassy-datepicker';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getCoursesDetails,
  getCoursesDetails2,
} from "../../actions/courseAction";
import { useAlert } from "react-alert";


const CoursesDetails = ({match}) => {
    const onChange = (date) => {
        console.log(date.toString());
      };

  const dispatch = useDispatch();
  const alert = useAlert();

  const { coursess,error } = useSelector((state) => state.coursesTopics);
  console.log(coursess)

  // const quizId = match.params.id;

  useEffect(()=>{
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   dispatch(getCoursesDetails2(match.params.id))
  },[dispatch,alert,error,coursess,match.params.id])


  return (
    <Fragment>
    <MetaData title={`View Courses - Student`} />

    <div className="dashboard">
      <SideBar />
      <div className="productListContainer">
        <h1 id="productListHeading">View Course Topic</h1>

         <div className="container1">

            <div className="card2">
              <div className="card-body2">
                {coursess &&
              coursess.map((product) => (

                <div className="user user11">
                  <div className="user-info">
                    <Link className="productCard" to={`/student/courses/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p className="pp">{product.name}</p>
            
          </Link>
            Explanation:<p className="pp">{product.description}</p>
                 
                  </div>
                </div>
              ))}
                 
              </div>
            </div>
         </div>          
      </div>
    </div>
  </Fragment>
  );
};

export default CoursesDetails;
