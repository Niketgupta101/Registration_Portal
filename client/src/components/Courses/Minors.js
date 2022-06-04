import React,  { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import DonutModal from './DonutModal';
import { useLocation } from 'react-router-dom';
import './styles.css';

const Minors = () => {
    const location = useLocation();
    const [minros, setMinors] = useState([]);
  
    const [show, setShow] = useState(false);
    const [modalHeading, setmodalHeading] = useState('');
  
    const handleClose = () => setShow(false);
    const [courseLink, setCourseLink] = useState('');
    const [data, setData] = useState([53, 22]);
    const branches = [
        "Exploration_Geophysics",
        "Exploration_Geology",
        "Separation_and_Purification_Technology",
        "Materials_Science",
        "Infrastructure_Engineering",
        "Data_Science",
        "Electrical_Technology",
        "Embedded_System_Design",
        "Environmental_Management",
        "Metallurgical_Engineering",
        "Opeartions_Management",
        "Finance",
        "Marketing",
        "Mathematics_and_Statistics",
        "Robotics",
        "Manufacturing",
        "Computational_Fluid_Dynamics",
        "Mining_Methods_and_Safety",
        "Material_Handling_Engineering",
        "Petroleum_Production_Operations",
        "High_Energy_Physics",
        "Nanotechnology",
    ];
    function handleShow(name, stats) {
      setData(() => stats);
      setmodalHeading(() => name);
      setCourseLink(() => stats[5]);
      setShow(true);
    }
  
    useEffect(() => {
      setMinors(location.state);
    });
  
    return (
      <>
        <div className='company-dashboard-container'>
          <div className='jumbotron jumbotron-fluid p-2'>
            <div
              className='m-2 hero-content-container mx-auto'
              style={{ maxWidth: 1000 }}
            >
              <div className='courses_list'>
                <div class='ug-pg d-flex m-0 justify-content-start bg-transparent'>
                  <div>
                    <h1 className='ug-pg-h1 prog-hover'>
                        Minors
                      <span className='ug-pg-span'>
                        <b>Admitted through JEE(Advanced)</b>
                      </span>
                    </h1>
                  </div>
                </div>
                <main className='d-flex justify-content-center'>
                  <ol class='gradient-list'>
                    {branches.map((branch) => (
                      <li>
                        <Button
                          variant='text'
                          onClick={() =>
                            handleShow(branch, minros[branches.indexOf(branch)])
                          }
                        >
                          <div className='course-name-li'>{branch}</div>
                        </Button>
                      </li>
                    ))}
                  </ol>
                </main>
              </div>
            </div>
          </div>
        </div>
        <Modal show={show} size='lg' onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{modalHeading}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <DonutModal data={data} />
            <Button variant='text' target='_blank' href={`https://${courseLink}`}>
              Click here for Course Structure
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <div className='box'></div>
      </>
    );
  }
  
export default Minors;