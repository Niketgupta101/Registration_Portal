import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal"

import "./styles.css";

export default function Twoyearmtech() {

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const handleClose = () => setShow(false);
  const [data, setData] = useState([53, 22]);
  function handleShow(name, stats, courseLink) {
    setData(() => stats);
    setmodalHeading(() => name);
    setCourseLink(() => courseLink);
    setShow(true);
  }

  return (
    <>
      <div className="courses_list">
        <div class="ug-pg d-flex m-0 justify-content-center">
          <div className="flex-grow-1 ">
            <h1 className="ug-pg-h1 prog-hover">
              M.Tech - 2 years
              <span className="ug-pg-span">
                <b>Admitted through gate, cat, jam</b>
              </span>
            </h1>
          </div>
        </div>
        <main>
          <ol class="gradient-list">
            <li><Button variant="text" onClick={() => handleShow("Applied Geology ", data)}><div className="course-name-li">Applied Geology </div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Applied Geophysics", data)}><div className="course-name-li">Applied Geophysics</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Chemical Engineering", data)}><div className="course-name-li">Chemical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Civil Engineering", data)}><div className="course-name-li">Civil Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Computer Science and Engineering", data)}><div className="course-name-li">Computer Science and Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Data Analytics", data)}><div className="course-name-li">Data Analytics</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Electrical Engineering ", data)}><div className="course-name-li">Electrical Engineering </div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Electronics & Communication Engineering ", data)}><div className="course-name-li">Electronics & Communication Engineering </div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Environmental Engineering", data)}><div className="course-name-li">Environmental Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Industrial Engineering & Management", data)}><div className="course-name-li">Industrial Engineering & Management</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mechanical Engineering", data)}><div className="course-name-li">Mechanical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Fuel, Minerals & Metallurgical Engineering", data)}><div className="course-name-li">Fuel, Minerals & Metallurgical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mining Engineering", data)}><div className="course-name-li">Mining Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mining Machinery Engineering", data)}><div className="course-name-li">Mining Machinery Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Petroleum Engineering", data)}><div className="course-name-li">Petroleum Engineering </div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Pharmaceutical Science & Engineering", data)}><div className="course-name-li">Pharmaceutical Science & Engineering</div></Button></li>
          </ol>

        </main>


      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonutModal data={data} />
          <Button variant="text" target="_blank" href="http://www.google.com/">Click here for Course Structure</Button>
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
};
