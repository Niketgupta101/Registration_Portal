import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import "./styles.css";

export default function Btech() {
  const location = useLocation();
  const [btech, setBtech] = useState([]);

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");

  const handleClose = () => setShow(false);
  const [courseLink, setCourseLink] = useState("");
  const [data, setData] = useState([53, 22]);
  const settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  };
  const branches = [
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Electrical Engineering",
    "Electronics and Communication Engineering",
    "Engineering Physics",
    "Environmental Engineering",
    "Mechanical Engineering",
    "Mineral and Metallurgical Engineering",
    "Mining Engineering",
    "Mining Machinery Engineering",
    "Petroleum Engineering",
  ];
  function handleShow(name, stats) {
    setData(() => stats);
    setmodalHeading(() => name);
    setCourseLink(() => stats[5]);
    setShow(true);
  }

  useEffect(() => {
    setBtech(location.state);
  });

  return (
    <>
      <div className="company-dashboard-container">
        <div className="jumbotron jumbotron-fluid p-2">
          <div className="m-2 hero-content-container mx-auto">
            <div className="courses_list px-3">
              <div class="ug-pg d-flex m-0 justify-content-start bg-transparent">
                <div>
                  <h1 className="ug-pg-h1 prog-hover">
                    Bachelor's of Technology - 4 years
                    <span className="ug-pg-span">
                      <b>Admitted through JEE(Advanced)</b>
                    </span>
                  </h1>
                </div>
              </div>
              <div className="container mt-5">
                <Slider {...settings}>
                  {branches.map((branch) => (
                    <div className="mx-4">
                      <Card
                        sx={{
                          boxShadow: 2,
                          border: 1,
                          borderColor: "primary.light",
                          maxWidth: 360,
                          height: 180,
                          mx: 2,
                        }}
                      >
                        <CardActionArea sx={{ maxWidth: 360, height: 180 }}>
                          <CardContent>
                            <Button
                              variant="text"
                              onClick={() =>
                                handleShow(
                                  branch,
                                  btech[branches.indexOf(branch)]
                                )
                              }
                            >
                              <div className="course-name-li">{branch}</div>
                            </Button>
                            <Typography
                              variant="body2"
                              style={{
                                position: "absolute",
                                bottom: "3px",
                                left: "50%",
                                transform: "translate(-50%, 0)",
                              }}
                            >
                              <Button
                                variant="text"
                                size="small"
                                style={{
                                  textTransform: "capitalize",
                                  color: "black",
                                }}
                                onClick={() =>
                                  handleShow(
                                    branch,
                                    btech[branches.indexOf(branch)]
                                  )
                                }
                              >
                                <div className="course-name-li">Details</div>
                              </Button>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </div>

                    // <div
                    //   className="h5"
                    //   style={{ height: "100px" }}
                    //   // onClick={() =>
                    //   //   handleShow(branch, btech[branches.indexOf(branch)])
                    //   // }
                    // >
                    //   <div
                    //     className="course-name-li"
                    //     style={{ height: "100px" }}
                    //   >
                    //     {branch}
                    //   </div>
                    // </div>
                  ))}
                </Slider>
              </div>
              <main className="d-flex justify-content-center">
                <ol class="gradient-list">
                  {branches.map((branch) => (
                    <li>
                      <Button
                        variant="text"
                        onClick={() =>
                          handleShow(branch, btech[branches.indexOf(branch)])
                        }
                      >
                        <div className="course-name-li">{branch}</div>
                      </Button>
                    </li>
                  ))}
                </ol>
              </main>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonutModal data={data} />
          <Button variant="text" target="_blank" href={`https://${courseLink}`}>
            Click here for Course Structure
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="box"></div>
    </>
  );
}
