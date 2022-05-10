import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminClass,
  deleteClass,
} from "../../actions/classAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import { DELETE_CLASS_RESET } from "../../constants/classConstants";


const ViewClasses = ({history}) => {

  const dispatch = useDispatch();
  const alert = useAlert();
  
  const { error, classes } = useSelector((state) => state.classes);
  const { error:deleteError, isDeleted } = useSelector((state) => state.class);
  console.log(classes)

  const deleteClassHandler = (id) => {
     dispatch(deleteClass(id))
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
      history.push("/admin/dashboard")
      dispatch({type:DELETE_CLASS_RESET})
    }

     dispatch(getAdminClass());
  },[dispatch,error,alert,isDeleted,deleteError,history])

  const columns = [
    {field: "id", headerName: "Class ID", minWidth:200, flex: 0.5},
    {field: "className", headerName: "Classes Name", minWidth:200, flex: 0.5},
    {field: "description", headerName: "Description", minWidth:50, flex: 1},
    {field: "instructorName", headerName: "Instructor Name", minWidth:100, flex: 0.5},
    {field: "actions", headerName: "Actions", type: "number", minWidth:150, flex: 0.3, sortable:false,
     renderCell:(params)=>{
       return(
         <Fragment>
           <Button onClick={()=> deleteClassHandler(params.getValue(params.id,"id"))}>
             <DeleteIcon />
           </Button>
         </Fragment>
       )
     }
    },

  ]

  const rows = [];

  classes && classes.forEach((item) => {
     rows.push({
       id:item._id,
       className:item.name,
       description:item.description,
       instructorName:item.instructorName
     })
  })
  
  return (
    <Fragment>
      <MetaData title={`ALL Classes - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">View Classes</h1>

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

export default ViewClasses;
