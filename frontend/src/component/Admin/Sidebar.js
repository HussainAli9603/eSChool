import React from "react";
import "./sidebar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import  { useAlert }  from "react-alert";
import { useHistory } from "react-router-dom";



const Sidebar = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const history = useHistory();

  function logoutUser (){
    dispatch(logout())
    console.log("HIII") 
    history.push('/login')
    alert.success("Logout SuccessFully")
  }

  return (
    <div className="sidebar">
      <Link to="/admin/dashboard">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Home
        </p>
      </Link>
     
      <Link to="/admin/add-question">
        <p>
          <AddIcon /> Create Quiz / Test
        </p>
      </Link>

      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Classes">
            <Link to="/admin/view-classes">
              <TreeItem nodeId="2" label="View Classes" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/new-classes">
              <TreeItem nodeId="3" label="Create Classes" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>

      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Courses">
            <Link to="/admin/view-courses">
              <TreeItem nodeId="2" label="View Courses" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/new-courses">
              <TreeItem nodeId="3" label="Create Courses" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>

      <Link to="/admin/view-results">
        <p>
          <PeopleIcon /> View Results
        </p>
      </Link>
      <Link to="/admin/add-calander">
        <p>
          <PeopleIcon /> ADD Calander
        </p>
      </Link>
      <Link to="/admin/view-students">
        <p>
          <RateReviewIcon />
          View Students
        </p>
      </Link>
      <Link to="/student/login">
        <p>
          <PeopleIcon /> Login
        </p>
      </Link>
      <Button onClick={()=>logoutUser()}>
        <p >
        <ExitToAppIcon /> Logout
        </p>
      </Button>
    </div>
  );
};

export default Sidebar;
