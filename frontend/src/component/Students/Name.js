import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./name.css";
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




const Name = () => {

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
          <h1 id="productListHeading">View NAme</h1>

            <div className="container1">
              <div className="card1">
                <div className="card-body1">
                   <h1 className="h3" >LEADERSHIP</h1>

                  <div className="user">
                    <img src={logo} alt="user" />
                    <div className="user-info">
                      <h5>John</h5>
                    </div>
                  </div>

                   <div className="user" >
                    <img src={logo} alt="user" />
                    <div className="user-info">
                      <h5>Smith</h5>
                    </div>
                  </div>

                  <div className="user">
                    <img src={logo} alt="user" />
                    <div className="user-info">
                      <h5>LEADERSHIP</h5>
                    </div>
                  </div>

                   <div className="user">
                    <img src={logo} alt="user" />
                    <div className="user-info">
                      <h5>Jhone</h5>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card1">
                <div className="card-body1">
                   <h1 className="h3">STORE</h1>

                  <div className="user user1" >
                    <img src={C1} alt="user" />
                  </div>

                   <div className="user user1">
                    <img src={C2} alt="user" />
                  </div>

                  <div className="user user1">
                    <img src={C3} alt="user" />
                  </div>

                   <div className="user">
                    <img src={C4} alt="user" />
                  </div>
                  <Link to="/student/store">Go to Store</Link>
                </div>
              </div>



              <div className="card2">
                <div className="card-body2">
                  <h1 className="h4">ACHEIVEMENTS</h1>

                  <div className="user">
                    <img src={C5} alt="user" />
                    <div className="user-info">
                      
                    </div>
                  </div>
                   <div className="user">
                    <img src={C6} alt="user" />
                    <div className="user-info">
                      
                    </div>
                  </div>
                   <div className="user">
                    <img src={C7} alt="user" />
                    <div className="user-info">
                      
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

export default Name;
