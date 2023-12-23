import React, { useState } from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { signOut } from "firebase/auth";
import { logoutUser } from "../features/userSlice";
import { auth } from "../firebase";
import Offcanvas from "react-bootstrap/Offcanvas"

function Sidenav() {
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
  };
  return (
    <div className="sidenav">
      <img
        className="sidenav__logo"
        src="../logo1.png"
        alt="Instagram Logo"
      />
      <div className="sidenav__buttons">
        <Link to="/" className="link">
          <button className="sidenav__button">
            <HomeIcon />
            <span>Home</span>
          </button>
        </Link>
        <div className="searchoffcanvas">
          <button className="sidenav__button" onClick={handleShow1}>
            <SearchIcon />
            <span>Search</span>
          </button>
        </div>
        <Offcanvas show={show1} onHide={handleClose1}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Search</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <input type="search" className="searchbox w-100" placeholder="Search" />
            <div className="recentsearch">Recent</div>
            <p className="recentsearch">No Recent Searches </p>
          </Offcanvas.Body>
        </Offcanvas>
        <Link to="/explore" className="link">
          <button className="sidenav__button">
            <ExploreIcon />
            <span>Explore</span> 
          </button>
        </Link>
        <Link to="/reels" className="link">
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Reels</span>
        </button>
        </Link>
        <Link to="/message" className="link">
          <button className="sidenav__button">
            <ChatIcon />
            <span>Messages</span>
          </button>
        </Link>

       <Link to="/notification" className="link">
          <button className="sidenav__button">
            <FavoriteBorderIcon />
            <span>Notifications</span>
          </button>
        </Link>
  
        <Link to="/create" className="link">
          <button className="sidenav__button">
              <AddCircleOutlineIcon />
              <span>Create</span>
          </button>
        </Link>
        <button className="sidenav__button" >
          <Avatar>
            {user.username ? user.username.charAt(0).toUpperCase() : "A"}
          </Avatar>
          <span>
            {user.username}{" "}
          </span>
        </button>
        <button onClick={handelLogout} className="logout__button">
          <LogoutIcon /><span>Logout</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="sidenav__button">
          <MenuIcon />
          <span className="sidenav__buttonText">More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;