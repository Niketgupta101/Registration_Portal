import React, { useState } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";

import DonutModal from "./DonutModal"

import "./styles.css";

export default function Btech() {
  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");

  const handleClose = () => setShow(false);
  function handleShow(name, stats) {
    setmodalHeading(() => name);
    setShow(true);
  }

  var data = [112, 23];
  return (
    <>
      <div className="courses_list">
        <div class="ug-pg d-flex m-0 justify-content-center">
          <div className="flex-grow-1 ">
            <h1 className="ug-pg-h1 prog-hover">
              Bachelor's of Technology - 4 years
              <span className="ug-pg-span">
                <b>Admitted through JEE(Advanced)</b>
              </span>
            </h1>
          </div>
        </div>
        <main>
          <ol class="gradient-list">
            <li><Button variant="text" onClick={() => handleShow("Chemical", data)}><div className="course-name-li">Chemical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Civil Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Computer Science & Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Electrical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Electronics and Communication Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Engineering Physics.</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Environmental Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Mechanical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Mineral and Metallurgical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Mining Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Mining Machinery Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => { <DonutModal data={data} /> }}><div className="course-name-li">Petroleum Engineering</div></Button></li>
          </ol>
        </main>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

