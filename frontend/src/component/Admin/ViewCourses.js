import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminCourses,
  deleteCourses,
} from "../../actions/courseAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_COURSES_RESET } from "../../constants/courseConstants";


const ViewCourses = ({history}) => {

  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, courses } = useSelector((state) => state.courses);
  const { error:deleteError, isDeleted } = useSelector((state) => state.course);
  console.log(courses)

  const deleteClassHandler = (id) => {
     dispatch(deleteCourses(id))
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
      alert.success("Courses Delete SuccessFully");
      history.push("/admin/dashboard")
      dispatch({type:DELETE_COURSES_RESET})
    }

     dispatch(getAdminCourses());
  },[dispatch,error,alert,isDeleted,deleteError,history])

  const columns = [
    {field: "id", headerName: "Courses ID", minWidth:200, flex: 0.5},
    {field: "name", headerName: "Courses Name", minWidth:200, flex: 0.5},
    {field: "actions", headerName: "Actions", type: "number", minWidth:150, flex: 0.3, sortable:false,
     renderCell:(params)=>{
       return(
         <Fragment>
            <Link to={`/admin/courses/${params.getValue(params.id,"id")}`}>
            Add Topic
           </Link>
           
         </Fragment>
       )
     }
    },

  ]

  const rows = [];

  courses && courses.forEach((item) => {
     rows.push({
       id:item._id,
       name:item.name,
     })
  })
  
  return (
    <Fragment>
      <MetaData title={`ALL Courses - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">View Courses</h1>

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

export default ViewCourses;
