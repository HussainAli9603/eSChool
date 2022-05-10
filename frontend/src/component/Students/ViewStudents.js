import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./viewResults.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminProduct,
  deleteProduct,
} from "../../actions/productAction";
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
  
  const { error, students } = useSelector((state) => state.students);
  const { error:deleteError, isDeleted } = useSelector((state) => state.students);

  const deleteProductHandler = (id) => {
     dispatch(deleteProduct(id))
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
      dispatch({type:DELETE_PRODUCT_RESET})
    }

     dispatch(getAdminProduct());
  },[dispatch,error,alert,isDeleted,deleteError,history])

  const columns = [
    {field: "stdName", headerName: "Student Name", minWidth:200, flex: 0.5},
    {field: "class", headerName: "Class", minWidth:50, flex: 1},
    {field: "section", headerName: "Section", minWidth:150, flex: 0.3},
    {field: "actions", headerName: "Actions", type: "number", minWidth:150, flex: 0.3, sortable:false,
     renderCell:(params)=>{
       return(
         <Fragment>
           <Link to={`/admin/product/${params.getValue(params.id,"id")}`}>
             <EditIcon />
           </Link>
           <Button onClick={()=> deleteProductHandler(params.getValue(params.id,"id"))}>
             <DeleteIcon />
           </Button>
         </Fragment>
       )
     }
    },

  ]

  const rows = [];

  students && students.forEach((item) => {
     rows.push({
       stdName:item.stdName,
       class:item.class,
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
