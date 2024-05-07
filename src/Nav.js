import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  
const [show ,handleShow]=useState(false);

  useEffect(()=>{
    const scrollHandler=document.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        handleShow(true);
      }else
        handleShow(false);
    });
    return()=>{
      document.removeEventListener("scroll",scrollHandler);
    };
  },[]);

  return (
    <div className={`nav ${show&&"nav-back"}`}>
      {/* <div className="nav"> */}
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
      <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      ></img>
    </div>
  );
}

// document.addEventListener("scroll", () => {
//   if (document.documentElement.scrollTop > 10) {
//     document.querySelector(".nav").classList.add("nav-back");
//   }
//   else{
//     document.querySelector(".nav").classList.remove("nav-back");
//   }
// });
export default Nav;
