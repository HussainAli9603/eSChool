import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCalander } from "../../actions/courseAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_CALANDER_RESET } from "../../constants/courseConstants";

const AddCalander = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newCalander);

  const [type, setType] = useState("");
  const [topicName, setTopicName] = useState("");
  const [instructorName, setInstructorName] = useState("");
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Calander Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_CALANDER_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createQuizSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("type", type);
    myForm.set("topicName", topicName);
    myForm.set("instructorName", instructorName);

    dispatch(createCalander(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Create Calander" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createQuizSubmitHandler}
          >
            <h1>Create Calander</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Add Topic Name"
                value={topicName}
                onChange={(e) => setTopicName(e.target.value)}
              />
            </div>

            <div>
            <AccountTreeIcon />
              <select onChange={(e) => setType(e.target.value)}>
                <option value="">Choose Type</option>
                  <option value="Today">Today</option>
                  <option value="UpComming">UpComming</option>
                ))}
              </select>
            </div>

            <div>
              <StorageIcon />
              <input
                type="text"
                placeholder="Add setInstructorName"
                value={instructorName}
                onChange={(e) => setInstructorName(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCalander;
