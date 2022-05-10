import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
// import store from "./store";
// import { loadUser } from "./actions/userAction";
// import UserOptions from "./component/layout/Header/UserOptions";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import { useSelector } from "react-redux";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
import Profile from "./component/User/Profile";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
// import Payment from "./component/Cart/Payment";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard";  // -------------
import LoginSignUp from "./component/User/LoginSignUp"; //-----------
import ViewResults from "./component/Admin/ViewResults"; //---------
import ViewStudents from "./component/Admin/ViewStudents"; //---------
import AddQuestionQuiz from "./component/Admin/AddQuestionQuiz";  // -------------
import NewClasses from "./component/Admin/NewClasses";  // -------------
import ViewClasses from "./component/Admin/ViewClasses";  // -------------
import NewCourses from "./component/Admin/NewCourses";  // -------------
import ViewCourses from "./component/Admin/ViewCourses";  // -------------
import AddCalander from "./component/Admin/Calander";  // -------------
import AddTopic from "./component/Admin/NewTopic";  // -------------

import StudentDashboard from "./component/Students/Dashboard2"; //---------
import Login from "./component/User2/Login"; //-----------
import Calander from "./component/Students/Calander"; //-----------
import Classes from "./component/Students/Classes"; //-----------
import ClassDetails from "./component/Students/ClassDetails"; //-----------
import CoursesDetails from "./component/Students/CoursesDetails"; //-----------
import Courses from "./component/Students/Courses"; //-----------
import Quiz from "./component/Students/Quiz"; //-----------
import Test from "./component/Students/Test"; //-----------
import QuizDetails from "./component/Students/QuizDetails"; //-----------
import QuizAnswer from "./component/Students/QuizAnswer"; //-----------
import TestDetails from "./component/Students/TestDetails"; //-----------
import TestAnswer from "./component/Students/TestAnswer"; //-----------
import Name from "./component/Students/Name"; //-----------
import Store from "./component/Students/NameStore"; //-----------

import ProductList from "./component/Admin/ProductList";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import NotFound from "./component/layout/Not Found/NotFound";

function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  // const [stripeApiKey, setStripeApiKey] = useState("");

  // async function getStripeApiKey() {
  //   const { data } = await axios.get("/api/v1/stripeapikey");

    // setStripeApiKey(data.stripeApiKey);
  // }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    // store.dispatch(loadUser());

    // getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Header />

      {/* {isAuthenticated && <UserOptions user={user} />} */}

      {/* {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute exact path="/password/update" component={UpdatePassword} />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} />


        <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />
        
        <ProtectedRoute exact path="/order/confirm" component={ ConfirmOrder } />

        <ProtectedRoute exact path="/orders" component={ MyOrders } />

        <ProtectedRoute exact path="/order/:id" component={ OrderDetails } />

        {/* <ProtectedRoute isAdmin={true} exact path="/admin/dashboard" component={ Dashboard } /> */}
        <Route exact path="/admin/dashboard" component={ Dashboard } />  /* llllllll */
        <Route exact path="/login" component={LoginSignUp} /> /* llllllll */ 
        <Route exact path="/admin/add-question" component={ AddQuestionQuiz } />  /* llllllll */
        <Route exact path="/admin/view-results" component={ ViewResults } />  /* llllllll */
        <Route exact path="/admin/view-students" component={ ViewStudents } />  /* llllllll */
        <Route exact path="/admin/new-classes" component={ NewClasses } />  /* llllllll */
        <Route exact path="/admin/view-classes" component={ ViewClasses } />  /* llllllll */
        <Route exact path="/student/classes/:id" component={ ClassDetails } />  /* llllllll */
        <Route exact path="/student/courses/:id" component={ CoursesDetails } />  /* llllllll */
        <Route exact path="/admin/new-courses" component={ NewCourses } />  /* llllllll */
        <Route exact path="/admin/view-courses" component={ ViewCourses } />  /* llllllll */
        <Route exact path="/admin/courses/:id" component={ AddTopic } />  /* llllllll */
        <Route exact path="/admin/add-calander" component={ AddCalander } />  /* llllllll */

        <Route exact path="/student/dashboard" component={ StudentDashboard } />  /* llllllll */
        <Route exact path="/student/login" component={Login} /> /* llllllll */ 
        <Route exact path="/student/calander" component={ Calander } />  /* llllllll */
        <Route exact path="/student/classes" component={ Classes } />  /* llllllll */
        <Route exact path="/student/courses" component={ Courses } />  /* llllllll */
        <Route exact path="/student/quiz" component={ Quiz } />  /* llllllll */
        <Route exact path="/student/test" component={ Test } />  /* llllllll */
        <Route exact path="/student/quiz/:id" component={ QuizDetails } />  /* llllllll */
        <Route exact path="/student/quiz/answer/:id" component={ QuizAnswer } />  /* llllllll */
        <Route exact path="/student/test/:id" component={ TestDetails } />  /* llllllll */
        <Route exact path="/student/test/answer/:id" component={ TestAnswer } />  /* llllllll */
        <Route exact path="/student/name" component={ Name } />  /* llllllll */
        <Route exact path="/student/store" component={ Store } />  /* llllllll */
        

        <ProtectedRoute isAdmin={true} exact path="/admin/products" component={ ProductList } />

        <ProtectedRoute isAdmin={true} exact path="/admin/product" component={ NewProduct } />

        <ProtectedRoute isAdmin={true} exact path="/admin/product/:id" component={ UpdateProduct } />

        <ProtectedRoute isAdmin={true} exact path="/admin/orders" component={ OrderList } />

        <ProtectedRoute isAdmin={true} exact path="/admin/order/:id" component={ ProcessOrder } />

        <ProtectedRoute isAdmin={true} exact path="/admin/users" component={ UsersList } />

        <ProtectedRoute isAdmin={true} exact path="/admin/user/:id" component={ UpdateUser } />

        <ProtectedRoute isAdmin={true} exact path="/admin/reviews" component={ ProductReviews } />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        />

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;