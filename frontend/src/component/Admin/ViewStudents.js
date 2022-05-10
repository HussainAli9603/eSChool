import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAllUsers,
  deleteUser,
} from "../../actions/studentAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const ViewStudents = ({history}) => {

  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, students } = useSelector((state) => state.allStudents);
  const { error:deleteError, isDeleted } = useSelector((state) => state.allStudents);

  console.log(students)

  const deleteProductHandler = (id) => {
     dispatch(deleteUser(id))
  }

  useEffect(()=>{
    if(error){
      alert.error(error);
      dispatch(clearErrors)
    }
    if(deleteError){
      alert.error(deleteError);
      dispatch(clearErrors)
    }
    
    if(isDeleted){
      alert.success("Product Delete SuccessFully");
      history.push("/admin/view-students")
      dispatch({type:DELETE_PRODUCT_RESET})
    }

     dispatch(getAllUsers());
  },[dispatch,error,alert,isDeleted,deleteError,history])

  const columns = [
    {field: "id", headerName: "Student ID", minWidth:200, flex: 0.5},
    {field: "stdName", headerName: "Student Name", minWidth:200, flex: 0.5},
    {field: "email", headerName: "Email", minWidth:50, flex: 1},
    {field: "section", headerName: "Section", minWidth:150, flex: 0.3},
    

  ]

  const rows = [];

  students && students.forEach((item) => {
     rows.push({
       id:item._id,
       stdName:item.name,
       email:item.email,
       section:item.section,
       subject:item.subject,
       point:item.point
     })
  })
  
  return (
    <Fragment>
      <MetaData title={`ALL Students - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">View Students</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={20}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ViewStudents;
