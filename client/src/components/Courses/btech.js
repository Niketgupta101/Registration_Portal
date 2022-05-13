import React, { useState,useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal";
import {useLocation} from 'react-router-dom';


import "./styles.css";


export default function Btech() {

  const location = useLocation();
  const [btech,setBtech]=useState([]);

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");


  const handleClose = () => setShow(false);
  const [courseLink, setCourseLink] = useState("");
  const [data, setData] = useState([53, 22]);

  function handleShow(name, stats) {
    setData(() => stats);
    setmodalHeading(() => name);
    setCourseLink(() => stats[5]);
    setShow(true);
  }

  useEffect(()=>{
setBtech(location.state);
  })

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
            <li><Button variant="text" onClick={() => handleShow("Chemical Engineering", btech[0])}><div className="course-name-li">Chemical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Civil Engineering", btech[1])}><div className="course-name-li">Civil Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Computer Science and Engineering", btech[2])}><div className="course-name-li">Computer Science & Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Electrical Engineering", btech[3])}><div className="course-name-li">Electrical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Electronics and Communication Engineering",btech[4])}><div className="course-name-li">Electronics and Communication Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Engineering Physics", btech[5])}><div className="course-name-li">Engineering Physics</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Environmental Engineering", btech[6])}><div className="course-name-li">Environmental Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mechanical Engineering", btech[7])}><div className="course-name-li">Mechanical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mineral and Metallurgical Engineering", btech[8])}><div className="course-name-li">Mineral and Metallurgical Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mining Engineering", btech[9])}><div className="course-name-li">Mining Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mining Machinery Engineering",btech[10])}><div className="course-name-li">Mining Machinery Engineering</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Petroleum Engineering", btech[11])}><div className="course-name-li">Petroleum Engineering</div></Button></li>
          </ol>

        </main>


      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DonutModal data={data} />
          <Button variant="text" target="_blank" href={`https://${courseLink}`}>Click here for Course Structure</Button>
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

