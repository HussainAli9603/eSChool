import React, { Fragment, useEffect} from "react";
import "./calander.css";
import MetaData from "../layout/MetaData";
import SideBar from "./Sidebar";
import DatePicker from 'sassy-datepicker';

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminCalander,
  getAdminCalanderupComming,
} from "../../actions/courseAction";
import { useAlert } from "react-alert";


const Calander = () => {
    const onChange = (date) => {
        console.log(date.toString());
      };

  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { calander,error } = useSelector((state) => state.upcomming);
  const { calander:calanders } = useSelector((state) => state.today);
  console.log(calander)

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors)
    }
  
     dispatch(getAdminCalander());
     dispatch(getAdminCalanderupComming());
  },[dispatch,alert])


  return (
    <Fragment>
    <MetaData title={`View Clander - Student`} />

    <div className="dashboard">
      <SideBar />
      <div className="productListContainer">
        <h1 id="productListHeading">View Calander</h1>

         <div className="container1">

            <div className="card2">
              <div className="card-body2">

                <h1 className="today">Today</h1>

                {calander &&
              calander.map((product) => (

                <div className="user user11">
                  <div className="user-info">
                    <p>{product.createdAt}</p>
                    <h2>{product.topicName}</h2>
                    <a href="#"><p>{product.instructorName}</p></a>
                  </div>
                </div>
                ))}
                 
                <div>
                  <h2>.</h2>
                  <h2>.</h2>
                </div>


                  <h1 className="today">UpComming</h1>

                 {calanders &&
              calanders.map((product) => (

                <div className="user user11">
                  <div className="user-info">
                    <p>{product.createdAt}</p>
                    <h2>{product.topicName}</h2>
                    <a href="#"><p>{product.instructorName}</p></a>
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

export default Calander;
