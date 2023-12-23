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
        src="data:image/png;base64,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"
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
