import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SellerDashboard from "./components/seller/sellerDashboard/Dashboard";
import MyProduct from "./components/seller/sellerDashboard/MyProducts/MyProducts";
import DashboardHome from "./components/seller/sellerDashboard/Home";
import AddProduct from "./components/seller/sellerDashboard/MyProducts/addProduct";
import Orders from "./components/seller/sellerDashboard/Orders";
import Product from "./components/seller/sellerDashboard/Product";
import Order from "./components/seller/sellerDashboard/Order";
import Payments from "./components/seller/sellerDashboard/Payments";
import Discounts from "./components/seller/sellerDashboard/Discounts";
import AddDiscount from "./components/seller/sellerDashboard/AddDiscount";
import Register from "./components/seller/sellerDashboard/register";
import SellerProfile from "./components/seller/sellerDashboard/SellerProfile";
import EditSellerProfile from "./components/seller/sellerDashboard/EditSellerProfile";
import SignIn from "./components/seller/sellerDashboard/SignIn";

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/seller/dashboard' element={<SellerDashboard child={<DashboardHome/>} />} />
      <Route exact path='/seller/myproducts' element={<SellerDashboard child={<MyProduct/>}/>} />
      <Route exact path='/seller/addproduct' element={<SellerDashboard child={<AddProduct/>}/>} />
      <Route exact path='/seller/editproduct' element={<SellerDashboard child={<AddProduct/>}/>} />
      <Route exact path='/seller/orders' element={<SellerDashboard child={<Orders/>}/>} />
      <Route exact path='/seller/product' element={<SellerDashboard child={<Product/>}/>} />
      <Route exact path='/seller/order' element={<SellerDashboard child={<Order/>}/>} />
      <Route exact path='/seller/payments' element={<SellerDashboard child={<Payments/>}/>} />
      <Route exact path='/seller/discounts' element={<SellerDashboard child={<Discounts/>}/>} />
      <Route exact path='/seller/adddiscount' element={<SellerDashboard child={<AddDiscount/>}/>} />
      <Route exact path='/seller/editdiscount' element={<SellerDashboard child={<AddDiscount/>}/>} />
      <Route exact path='/seller/register' element={<Register/>} />
      <Route exact path='/seller/signin' element={<SignIn/>} />
      <Route exact path='/seller/profile' element={<SellerDashboard child={<SellerProfile/>}/>} />
      <Route exact path='/seller/editsellerprofile' element={<SellerDashboard child={<EditSellerProfile/>} />}/>
    </Routes>
  </Router>
  );
}

export default App;
