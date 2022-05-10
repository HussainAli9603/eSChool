import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import "../Product/Products.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import { Link } from "react-router-dom";
import logo from "../../images/Profile.png";
import { DELETE_CLASS_RESET } from "../../constants/classConstants";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminClass,
  deleteClass,
} from "../../actions/classAction";
import { useAlert } from "react-alert";




const Classes = () => {

  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, classes } = useSelector((state) => state.classes);
  console.log(classes)

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors)
    }
  
     dispatch(getAdminClass());
  },[dispatch,alert])

  
  return (
    <Fragment>
      <MetaData title={`View Class - Student`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">View Classes</h1>
           <div className="products">
          {classes &&
              classes.map((product) => (
          <Link className="productCard" to={`/student/classes/${product._id}`}>
            <img src={product.images[0].url} alt={product.name} />
            <p>Introduction to html</p>
            <div>
              <span className="productCardSpan">
                {product.createdAt}
              </span>
            </div>
            <span>{product.instructorName}</span>
          </Link>
           ))}
          </div>
          </div>

          
        
         
      </div>
    </Fragment>
  );
};

export default Classes;
