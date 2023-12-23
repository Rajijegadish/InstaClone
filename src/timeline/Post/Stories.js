import { Avatar } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import "./Stories.css";
import "./Story.css";


function Stories({ name, avatar }) {
  return (
    <Container className="p-0 m-0">
      <div className="photo p-0 m-0">
        <Avatar src={avatar} />      
        <span className="story_name">{name}</span>
      </div>
    </Container>
  );
}

export default Stories;