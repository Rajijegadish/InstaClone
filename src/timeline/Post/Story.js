import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Stories from "./Stories";
import "./Story.css";
import "./Stories.css";



function Story() {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const suggestion = [
      {
        id: 0,
        name: " Wilfred69",
        image: "https://mui.com/static/images/avatar/1.jpg",
      },
      {
        id: 1,
        name: "Oswaldo81",
        image: "https://mui.com/static/images/avatar/3.jpg",
      },
      {
        id: 2,
        name: " Watson_Ritchie",
        image: "https://mui.com/static/images/avatar/2.jpg",
      },
      {
        id: 3,
        name: " Jerrell_Thompson82",
        image: "https://mui.com/static/images/avatar/4.jpg",
      },
      {
        id: 4,
        name: "  Margaret_Marquardt",
        image: "https://mui.com/static/images/avatar/5.jpg",
      },
      {
        id: 5,
        name: "  Hadley77",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-C9Wobrs3EliqgWXTk--so1EoOxvcOg6MBHTHgmLnjnmM_yRVKaYAMc&usqp=CAU",
      },
      {
        id: 6,
        name: " Verlie_Carroll59",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHnwhiwjXWxgqqK8KDxDQwlQTvTsADLPAtiA&usqp=CAU",
",
      },
      {
        id: 7,
        name: " Jasen.Hilll29",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIBjWTFQfdgKyRPAd4gH2Tc6s_i6xuqSZPQ&usqp=CAU",
",
      },
    ];
    setSelected(suggestion);
  }, []);
  return (
    <Container className="d-flex p-1 m-1 w-50">
      {selected.map((profile) => (
        <Stories key={profile.id} name={profile.name} avatar={profile.image} />
      ))}
    </Container>
  );
}

export default Story;
