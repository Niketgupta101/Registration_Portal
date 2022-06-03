import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import Modal from 'react-bootstrap/Modal';
import DonutModal from './DonutModal';
import { useLocation } from 'react-router-dom';

import './styles.css';

export default function DualDegree() {
  const location = useLocation();
  const [btech, setBtech] = useState([]);

  const [show, setShow] = useState(false);
  const [modalHeading, setmodalHeading] = useState('');

  const handleClose = () => setShow(false);
  const [courseLink, setCourseLink] = useState('');
  const [data, setData] = useState([53, 22]);

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
      <div className='company-dashboard-container'>
        <div className='jumbotron jumbotron-fluid p-2'>
          <div
            className='m-2 hero-content-container mx-auto'
            style={{ maxWidth: 1000 }}
          >
            <div className='courses_list'>
              <div class='ug-pg d-flex m-0 justify-content-start bg-transparent'>
                <div className=' '>
                  <h1 className='ug-pg-h1 prog-hover'>
                    Dual Degree - 5 years
                    <span className='ug-pg-span'>
                      <b>Admitted through JEE(Advanced)</b>
                    </span>
                  </h1>
                </div>
              </div>
              <main className='d-flex justify-content-center'>
                <ol class='gradient-list'>
                  <li>
                    <Button
                      variant='text'
                      onClick={() =>
                        handleShow(
                          'Environmental Science and Engineering',
                          btech[0]
                        )
                      }
                    >
                      <div className='course-name-li'>
                        Environmental Science and Engineering
                        <div>
                          <small style={{ textTransform: 'initial ' }}>
                            B.tech and M.tech in same department
                          </small>
                        </div>
                      </div>
                    </Button>
                  </li>
                  <li>
                    <Button
                      variant='text'
                      onClick={() =>
                        handleShow('Computer Science and Engineering', btech[1])
                      }
                    >
                      <div className='course-name-li'>
                        Computer Science and Engineering
                        <div>
                          <small style={{ textTransform: 'initial ' }}>
                            B.tech and M.tech in different department
                          </small>
                        </div>
                      </div>
                    </Button>
                  </li>
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
