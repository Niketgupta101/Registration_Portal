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
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Applied Geology ", twoyearmtech[0])
                      }
                    >
                      <div className="course-name-li">Applied Geology </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Applied Geophysics", twoyearmtech[1])
                      }
                    >
                      <div className="course-name-li">Applied Geophysics</div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Chemical Engineering", twoyearmtech[2])
                      }
                    >
                      <div className="course-name-li">Chemical Engineering</div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Civil Engineering", twoyearmtech[3])
                      }
                    >
                      <div className="course-name-li">Civil Engineering</div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Computer Science and Engineering",
                          twoyearmtech[4]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Computer Science and Engineering
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Data Analytics", twoyearmtech[5])
                      }
                    >
                      <div className="course-name-li">Data Analytics</div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Electrical Engineering ", twoyearmtech[6])
                      }
                    >
                      <div className="course-name-li">
                        Electrical Engineering{" "}
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Electronics & Communication Engineering ",
                          twoyearmtech[7]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Electronics & Communication Engineering{" "}
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Environmental Engineering", twoyearmtech[8])
                      }
                    >
                      <div className="course-name-li">
                        Environmental Engineering
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Industrial Engineering & Management",
                          twoyearmtech[9]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Industrial Engineering & Management
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Mechanical Engineering", twoyearmtech[10])
                      }
                    >
                      <div className="course-name-li">
                        Mechanical Engineering
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Fuel, Minerals & Metallurgical Engineering",
                          twoyearmtech[11]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Fuel, Minerals & Metallurgical Engineering
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Mining Engineering", twoyearmtech[12])
                      }
                    >
                      <div className="course-name-li">Mining Engineering</div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Mining Machinery Engineering",
                          twoyearmtech[13]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Mining Machinery Engineering
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow("Petroleum Engineering", twoyearmtech[14])
                      }
                    >
                      <div className="course-name-li">
                        Petroleum Engineering{" "}
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant="text"
                      onClick={() =>
                        handleShow(
                          "Pharmaceutical Science & Engineering",
                          twoyearmtech[15]
                        )
                      }
                    >
                      <div className="course-name-li">
                        Pharmaceutical Science & Engineering
                      </div>
                    </Button>
                  </li>
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
