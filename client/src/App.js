import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SellerDashboard from "./components/seller/sellerDashboard/Dashboard";
import UserDashboard from "./components/user/userDashboard/Dashboard";
// import MyProduct from "./components/seller/sellerDashboard/MyProducts/MyProducts";
import Home from "./components/user/Home.js";
import Category from "./components/user/Category";
import UserOrders from "./components/user/userDashboard/Orders"; 
import UserCart from "./components/user/Cart";
import Checkout from "./components/user/checkout/Checkout";
import UserProfile from "./components/user/UserProfile";
import EditUserProfile from "./components/user/EditUserProfile";
import Tracking from "./components/user/Tracking";
import Fashion from "./components/user/categories/Fashion";
import Electronics from "./components/user/categories/Electronics";
import Sports from "./components/user/categories/Sports";
import UserSignIn from "./components/user/UserSignIn";
import UserRegister from "./components/user/UserRegister";

import SellerDashboard from "./components/seller/sellerDashboard/Dashboard";
import MyProduct from "./components/seller/sellerDashboard/MyProducts/MyProducts";
import DashboardHome from "./components/seller/sellerDashboard/Home.js";
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

  const [user, setUser] = React.useState(null);
  const [seller, setSeller] = React.useState(null);

  return (
    <Router>
      <Routes>
        <Route path='/user/dashboard' element={<UserDashboard child={<Home user={user} />}/>} />
        {/* <Route path='/user/category' element={<UserDashboard child={<Category />}/>} /> */}
        <Route path='/user/orders' element={<UserDashboard child={<UserOrders user={user}/>}/>} />
        <Route path='/user/cart' element={<UserDashboard child={<UserCart user={user}/>}/>} />
        <Route path='/user/checkout' element={<Checkout user={user}/>} />
        <Route path='/user/profile' element={<UserDashboard child={<UserProfile user={user}/>}/>} />
        <Route path='/user/edituserprofile' element={<UserDashboard child={<EditUserProfile user={user}/>}/>} />
        <Route path='/user/tracking' element={<UserDashboard child={<Tracking user={user}/>}/>} />
        <Route path='/sports' element={<UserDashboard child={<Sports />}/>} />
        <Route path='/electronics' element={<UserDashboard child={<Electronics />}/>}/>
        <Route path='/fashion' element={<UserDashboard child={<Fashion />}/>} />
        <Route path='/user/signin' element={<UserSignIn setUser={setUser} />} />
        <Route path='/user/register' element={<UserRegister />} />

      <Route exact path='/seller/dashboard' element={<SellerDashboard header="Dashboard" child={<DashboardHome/>}/>} />
      <Route exact path='/seller/myproducts' element={<SellerDashboard header="My Products" child={<MyProduct/>}/>} />
      <Route exact path='/seller/addproduct' element={<SellerDashboard header="My Products" child={<AddProduct/>}/>} />
      <Route exact path='/seller/editproduct' element={<SellerDashboard header="MY Products" child={<AddProduct/>}/>} />
      <Route exact path='/seller/orders' element={<SellerDashboard header="Orders" child={<Orders/>}/>} />
      <Route exact path='/seller/product' element={<SellerDashboard header="My Products" child={<Product/>}/>} />
      <Route exact path='/seller/order' element={<SellerDashboard header="Orders" child={<Order/>}/>} />
      <Route exact path='/seller/payments' element={<SellerDashboard header="Payments" child={<Payments/>}/>} />
      <Route exact path='/seller/discounts' element={<SellerDashboard header="Discounts" child={<Discounts/>}/>} />
      <Route exact path='/seller/adddiscount' element={<SellerDashboard header="Discounts" child={<AddDiscount/>}/>} />
      <Route exact path='/seller/editdiscount' element={<SellerDashboard header="Discounts" child={<AddDiscount/>}/>} />
      <Route exact path='/seller/register' element={<Register/>} />
      <Route exact path='/seller/signin' element={<SignIn setSeller={setSeller} />} />
      <Route exact path='/seller/profile' element={<SellerDashboard header="Profile" child={<SellerProfile/>}/>} />
      <Route exact path='/seller/editsellerprofile' element={<SellerDashboard header="Profile" child={<EditSellerProfile/>} />}/>
    </Routes>
  </Router>
  );
}

export default App;
