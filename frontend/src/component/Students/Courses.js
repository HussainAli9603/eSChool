import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";
import logo from "../../images/Profile.png";
import { DELETE_CLASS_RESET } from "../../constants/courseConstants";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminCourses,
  deleteCourses,
} from "../../actions/courseAction";
import { useAlert } from "react-alert";


const Courses = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, courses } = useSelector((state) => state.courses);
  console.log(courses)

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors)
    }
  
     dispatch(getAdminCourses());
  },[dispatch,alert])

  return (
    <Fragment>
      <MetaData title={`View Class - Student`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">View Courses</h1>
           
          <div className="products">

          {courses &&
              courses.map((product) => (

          <Link className="productCard" to={`/student/courses/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p className="pp">{product.name}</p>
          </Link>
         
    ))}
          </div>
        
                   
        </div>
      </div>
    </Fragment>
  );
};

export default Courses;
