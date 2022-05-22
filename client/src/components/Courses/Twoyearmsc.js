import React, { useState,useEffect } from "react";
import { Button } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import DonutModal from "./DonutModal"

import "./styles.css";
import {useLocation} from 'react-router-dom';

export default function Twoyearmsc() {

  const location = useLocation();
  const [twoyearmsc,setTwoyearmsc]=useState(location.state);

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState("");
  const [courseLink, setCourseLink] = useState("");
  const handleClose = () => setShow(false);
  const [data, setData] = useState([53, 22]);
  function handleShow(name, stats) {
    setData(() => stats);
    setmodalHeading(() => name);
    setCourseLink(() => stats[5]);
    setShow(true);
  }

  return (
    <>
      <div className="courses_list">
        <div class="ug-pg d-flex m-0 justify-content-center">
          <div className="flex-grow-1 ">
            <h1 className="ug-pg-h1 prog-hover">
              Master's of Sciences - 2 years
              <span className="ug-pg-span">
                <b>Admitted through JAM</b>
              </span>
            </h1>
          </div>
        </div>
        <main>
          <ol class="gradient-list">
            <li><Button variant="text" onClick={() => handleShow("Chemistry", twoyearmsc[0])}><div className="course-name-li">Chemistry</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Mathematics & Computing", twoyearmsc[1])}><div className="course-name-li">Mathematics & Computing</div></Button></li>
            <li><Button variant="text" onClick={() => handleShow("Physics", twoyearmsc[2])}><div className="course-name-li">Physics</div></Button></li>
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
