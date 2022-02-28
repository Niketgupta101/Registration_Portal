import React, { useEffect } from 'react'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Home = () => {
  const Navigate = useNavigate();


  // let user = localStorage.getItem('user');
  
  // useEffect(() => {
  //   if(!user)
  //   {
  //     Navigate('/auth');
  //   }
  // }, [Navigate, user])
  

  return (
    <>
    <div className="HomePage">
      <div className="first_section">
        <div className="card">
          <h6>We Are,</h6>
          <h1>CAREER DEVELOPMENT CENTER</h1>
          <h6>of  </h6>
          <h1>IIT (ISM) DHANBAD</h1>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home