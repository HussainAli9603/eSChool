import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { 
  resultsReducer,  
  studentsReducer,  
  newQuestionReducer,
  quizReducer,
  testReducer,
  testDetailsReducer,
  quizDetailsReducer } from "./reducers/quizReducer";
import { 
  profileReducer,
  userReducer,
  studentReducer,
  forgotPasswordReducer,
  allStudentsReducer,
  userDetailsReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { 
  classesReducer,
  classesDetailsReducer,
  newClassesReducer,
  classReducer
 } from "./reducers/classReducer";
 import { 
  coursesReducer,
  coursesDetailsReducer,
  newCoursesReducer,
  courseReducer,
  calanderReducer,
  calander2Reducer,
  newCalanderReducer,
  coursesTopicDetailsReducer,
  newCoursesTopicReducer,
  coursesTopicsDetailsReducer,
 } from "./reducers/courseReducer";
import { newOrderReducer, myOrdersReducer, orderDetailsReducer, allOrdersReducer, orderReducer } from "./reducers/orderReducer";


const reducer = combineReducers({
  // product:productReducer,
  // productDetails:productsDetailsReducer,
  user:userReducer,  ///
  profile:profileReducer,
  forgotPassword:forgotPasswordReducer,
  cart:cartReducer,
  newOrder:newOrderReducer,
  myOrders:myOrdersReducer,
  orderDetails:orderDetailsReducer,
  // newReview:newReviewReducer,
  newQuestion:newQuestionReducer, ///
  results:resultsReducer,   ///
  students:studentsReducer,   ///
  student:studentReducer,   ///
  classes:classesReducer,  ///
  classesDetails:classesDetailsReducer, ///
  newClasses:newClassesReducer,  ///
  class:classReducer,  /// delete
  courses:coursesReducer,  ///
  coursesDetails:coursesDetailsReducer, ///
  newCourses:newCoursesReducer,  ///
  course:courseReducer,  /// delete
  today:calanderReducer, ///
  upcomming:calander2Reducer, ///
  test:testReducer, ///
  quiz:quizReducer, ///
  testDetails:testDetailsReducer, ///
  quizDetails:quizDetailsReducer, ///
  coursesTopic:coursesTopicDetailsReducer, //
  coursesTopics:coursesTopicsDetailsReducer,
  newTopic:newCoursesTopicReducer, //
  newCalander:newCalanderReducer, ///
  allStudents:allStudentsReducer, ///
  allOrders:allOrdersReducer,
  order:orderReducer,
  userDetails:userDetailsReducer,
  // productReviews:productReviewsReducer,
  // review:reviewReducer,

}); 

let initialState = {
  cart:{
    cartItems:localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem("cartItems")) 
    : [],
    shippingInfo:localStorage.getItem('shippingInfo') ? 
    JSON.parse(localStorage.getItem("shippingInfo")) 
    : []
  }
  
    
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
