import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createQuiz } from "../../actions/quizAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const AddQuestionQuiz = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newQuestion);

  const [addQuestion, setAddQuestion] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [answer, setAnswer] = useState("");
  const [pointType, setPointType] = useState("");
  
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Question Created Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createQuizSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("addQuestion", addQuestion);
    myForm.set("questionType", questionType);
    myForm.set("answer", answer);
    myForm.set("pointType", pointType);

    dispatch(createQuiz(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Create quiz question" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createQuizSubmitHandler}
          >
            <h1>Create Quiz Question</h1>

            <div> 
              <SpellcheckIcon />
              <textarea
                placeholder="Add Question"
                value={addQuestion}
                onChange={(e) => setAddQuestion(e.target.value)}
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <div>
            <AccountTreeIcon />
              <select onChange={(e) => setQuestionType(e.target.value)}>
                <option value="">Choose Question Type</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Maths">Maths</option>
              </select>
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Answer"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                cols="30"
                rows="2"
              ></textarea>
            </div>

            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Customize Point Type"
                required
                onChange={(e) => setPointType(e.target.value)}
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

export default AddQuestionQuiz;
