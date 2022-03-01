import React from 'react';
import { useNavigate } from 'react-router-dom';


import './styles.css';

const Courses = () => {
  const Navigate=useNavigate();
  return (
    <div>
    <div>Courses</div>
    <button onClick={() => Navigate('/courses/btech')}>Btech</button>
    <button onClick={() => Navigate('/courses/fiveyear')}>Five Year Courses</button>
    <button onClick={() => Navigate('/courses/twoyearmba')}>Two Year MBA</button>
    <button onClick={() => Navigate('/courses/twoyearmsc')}>Two Year MSC</button>
    <button onClick={() => Navigate('/courses/twoyearmtech')}>Two Year M.Tech</button>
    <button onClick={() => Navigate('/courses/threeyearmsc')}>Three Year MSC</button>
  
  
    </div>
  )
}

export default Courses