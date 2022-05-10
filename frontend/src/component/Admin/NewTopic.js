import React, { Fragment, useEffect, useState } from "react";
import "./newProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createCoursesTopic, getCoursesDetails } from "../../actions/courseAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";
import { NEW_COURSES_RESET } from "../../constants/courseConstants";

const AddTopic = ({ history, match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { courses,loading, error ,success} = useSelector((state) => state.coursesTopic);
  const { newTopic,success:newww } = useSelector((state) => state.newTopic);
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const courseId = match.params.id;

   useEffect(()=>{
     if (courses && courses._id !== courseId) {
      dispatch(getCoursesDetails(courseId));
    } else {
      setName(courses.name);
      setDescription(courses.description);
      setImages(courses.images);
    }
    if(error){
      alert.error(error);
      dispatch(clearErrors)
    }

     if (newww) {
      alert.success("Product Updated Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: NEW_COURSES_RESET });
    }

  },[dispatch,alert,courseId,success,newww])

  const createCoursesTopicSubmitHandler = (e) => {
    e.preventDefault();
  
    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("description", description);
    myForm.set("courseId",match.params.id);

    console.log(myForm)

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createCoursesTopic(myForm));
  };

  const createCoursesImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Course Topic" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createCoursesTopicSubmitHandler}
          >
            <h1>Create Course Topic</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Topic Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="topic Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createCoursesImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
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

export default AddTopic;
