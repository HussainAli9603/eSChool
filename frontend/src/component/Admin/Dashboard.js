import React,{ useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
// import { useSelector, useDispatch } from "react-redux";
// import { getAdminProduct } from "../../actions/productAction";
// import { getAllOrders} from "../../actions/orderAction.js";
// import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
// import { getAllUsers } from "../../actions/userAction.js";

const Dashboard = () => {
  // const dispatch = useDispatch();

  // const { products } = useSelector((state)=> state.products);

  // const { orders } = useSelector((state)=> state.allOrders);

  // const { users } = useSelector((state)=> state.allUsers);

  let outOfStock = 0;

  // products &&
  //  products.forEach((item)=>{
  //   if(item.Stock === 0){
  //     outOfStock += 1;
  //   }
  // })
  // console.log(products)

  // useEffect(()=>{
  //   dispatch(getAdminProduct());
  //   dispatch(getAllOrders());
  //   dispatch(getAllUsers());
  // },[dispatch]);

  let totalAmount = 0;
  //  orders &&
  //   orders.forEach((item)=>{
  //    totalAmount += item.totalPrice
  //  })

  const lineState = {
    labels:["Initial Amount", "Amount Earned"],
    datasets:[
      {
        label:"TOTAL AMOUNT",
        backgroundColor:["tomato"],
        hoverBackgroundColor:["rgb(197, 72 ,40"],
        data:[0,totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels:["Out of Stock", "InStock"],
    datasets:[
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        // data:[outOfStock, products.length - outOfStock],
      }
    ]
  }
 
  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Dashboard</Typography>

        <div className="dashboardSummary">
         
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Students</p>
              {/* <p>{products && products.length}</p> */}2
            </Link>
            <Link to="/admin/orders">
              <p>Results</p>
              {/* <p>{orders && orders.length}</p> */} 4
            </Link>
            <Link to="/admin/users">
              <p>Teachers</p>
              {/* <p>{users && users.length}</p>  */}  1
            </Link>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
