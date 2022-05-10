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
    history.push('/student/login')
    alert.success("Logout SuccessFully")
  }

  return (
    <div className="sidebar">
      <Link to="/student/dashboard">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="/student/name">
        <p>
          <DashboardIcon /> Name
        </p>
      </Link>
     
      <Link to="/student/calander">
        <p>
          <AddIcon /> Calender
        </p>
      </Link>
      <Link to="/student/classes">
        <p>
          <PeopleIcon /> Classes
        </p>
      </Link>
      <Link to="/student/courses">
        <p>
          <RateReviewIcon />
          Courses
        </p>
      </Link>

      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Assesments">
            <Link to="/student/quiz">
              <TreeItem nodeId="2" label="View Quiz" icon={<PostAddIcon />} />
            </Link>

            <Link to="/student/test">
              <TreeItem nodeId="3" label="View Test" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>

      <Link to="/student/login">
        <p>
          <PeopleIcon /> Login
        </p>
      </Link>
      <Link to="/settings">
        <p>
          <PeopleIcon /> Settings
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
