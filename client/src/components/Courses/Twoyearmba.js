import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal"

import "./styles.css";

export default function Twoyearmba() {

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
              M.B.A. - 2 years
              <span className="ug-pg-span">
                <b>Admitted through CAT</b>
              </span>
            </h1>
          </div>
        </div>
        <main>
          <ol class="gradient-list">
            <li><Button variant="text" onClick={() => handleShow("Business Analytics", data)}><div className="course-name-li">Business Analytics</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Finance ", data)}><div className="course-name-li">Finance </div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Human Resources", data)}><div className="course-name-li">Human Resources</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Marketing", data)}><div className="course-name-li">Marketing</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Operations", data)}><div className="course-name-li">Operations</div></Button></li>
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

