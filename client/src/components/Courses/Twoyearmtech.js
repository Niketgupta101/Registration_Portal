import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal";

import "./styles.css";
import { useLocation } from "react-router-dom";

export default function Twoyearmtech() {
  const location = useLocation();
  const [twoyearmtech, setTwoyearmtech] = useState(location.state);

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const handleClose = () => setShow(false);
  const [data, setData] = useState([53, 22]);
  const branches = [
    "Chemical Engineering",
    "Civil Engineering",
    "Computer Science and Engineering",
    "Data Analytics",
    "Earthquake Science & Engineering",
    "Electrical Engineering",
    "Electronics & Communication Engineering",
    "Engineering Geology",
    "Environmental Science & Engineering",
    "Fuel, Minerals & Metallurgical Engineering",
    "Geo-Exploration",
    "Geomatics",
    "Geotechnical Engineering",
    "Industrial Engineering & Management",
    "Mechanical Engineering",
    "Mining Engineering",
    "Mining Machinery Engineering",
    "Petroleum Engineering",
    "Pharmaceutical Science & Engineering",
    "Tunnelling and Underground Space Technology",
  ];
  function handleShow(name, stats) {
    setData(() => stats);
    setmodalHeading(() => name);
    setCourseLink(() => stats[5]);
    setShow(true);
  }

  return (
    <>
      <div className="company-dashboard-container">
        <div className="jumbotron jumbotron-fluid p-2">
          <div
            className="m-2 hero-content-container mx-auto"
            style={{ maxWidth: 1000 }}
          >
            <div className="courses_list">
              <div class="ug-pg d-flex m-0 justify-content-start bg-transparent">
                <div>
                  <h1 className="ug-pg-h1 prog-hover align-left">
                    M.Tech - 2 years
                    <span className="ug-pg-span">
                      <b>Admitted through gate, cat, jam</b>
                    </span>
                  </h1>
                </div>
              </div>
              <main className="d-flex justify-content-center">
                <ol class="gradient-list">
                  {branches.map((branch) => (
                    <li>
                      <Button
                        variant="text"
                        onClick={() =>
                          handleShow(
                            branch,
                            twoyearmtech[branches.indexOf(branch)]
                          )
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
