import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./name.css";
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

import C1 from "../../images/C1.PNG";
import C2 from "../../images/C2.PNG";
import C3 from "../../images/C3.PNG";
import C4 from "../../images/C4.PNG";
import C5 from "../../images/C5.PNG";
import C6 from "../../images/C6.PNG";
import C7 from "../../images/C7.PNG";




const Store = () => {

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
          <h1 id="productListHeading"> Stores</h1>
         
         <div className="products">
          <p className="productCard">
            <img src={C1} alt={C1} />
            <p>colorfull background</p>
            <div>
              <span className="productCardSpan">
                2000
              </span>
            </div>
            <span><input type="radio"/></span>
          </p>

           <p className="productCard">
            <img src={C2} alt={C2} />
            <p>colorfull background</p>
            <div>
              <span className="productCardSpan">
                2000
              </span>
            </div>
            <span><input type="radio"/></span>
          </p>

           <p className="productCard">
            <img src={C3} alt={C3} />
            <p>colorfull background</p>
            <div>
              <span className="productCardSpan">
                2000
              </span>
            </div>
            <span><input type="radio"/></span>
          </p>

           <p className="productCard">
            <img src={C4} alt={C4} />
            <p>colorfull background</p>
            <div>
              <span className="productCardSpan">
                2000
              </span>
            </div>
            <span><input type="radio"/></span>
          </p>



          </div>
          </div>
      </div>
    </Fragment>
  );
};

export default Store;
