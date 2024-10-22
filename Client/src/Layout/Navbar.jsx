import React, { useContext, useRef, useState } from "react";
import BellImg from "../assets/Bell.svg";
import MessageImg from "../assets/messageIcon.svg";
import SearchImg from "../assets/searchIcon.svg";
import LadyImg from "../assets/lady.svg";
import ArrowImg from "../assets/arrowDown.svg";
import "../Styles/Navbar.css";
import OffCanvas from "../component/OffCanvas";
import AuthContext from "../../context/AuthContext.jsx";

const Navbar = () => {
    const [isTrue,setIsTrue]= useState (false)
    // const {user,isLoading,logout} = useAuth();
    const {user}=useContext(AuthContext)
    function handleReveal() {
        isTrue ? setIsTrue(false) :setIsTrue(true);
    }
  return (
    <nav className="container d-flex justify-content-between position-sticky top-0 bg-white">
        <div className="d-md-none">
            {['start'].map((placement,idx)=>(
                <OffCanvas key={idx} placement={placement} name={placement}/>
            ))}
        </div>
      <form className="nav-form  position-relative">
        <input type="search" name="" id="" placeholder="search" />
        <img className="position-absolute top-50 end-0 translate-middle-y pe-2 pb-3" src={SearchImg} alt="searchImg-image" />
      </form>
      <div className="d-flex align-items-center gap-3">
        <div>
          <img src={BellImg} alt="notification-image" className="d-none d-md-block"/>
        </div>
        <div>
          <img src={MessageImg} alt="messageImg-image" className="d-none d-md-block" />
        </div>
        <div className="d-flex gap-2 mt-md-3">
          <img src={LadyImg} alt="ladyImg-image" className="d-none d-md-block" />
          <h4 className="d-none d-md-block">{user && user?.firstName}</h4>
          <div>
            <img src={ArrowImg} alt="arrowImg-image"className="mt-3 d-none d-md-block" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
