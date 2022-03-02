import React from "react";
import Footer from "../Footer/Footer";
// import { useNavigate } from 'react-router-dom';

import "./styles.css";

const Home = () => {
  // const Navigate = useNavigate();

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
            <h5>We Are,</h5>
            <h1>CAREER DEVELOPMENT CENTER</h1>
            <h6>of </h6>
            <h1>IIT (ISM) DHANBAD</h1>
          </div>
        </div>
        <div className="aboutus_section section">
          <div className="aboutus_header header">
            <h2>About IIT(ISM) Dhanbad</h2>
          </div>
          <div className="aboutus_content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates numquam debitis vel laborum magni porro accusantium
              natus amet quis repudiandae obcaecati hic minima, delectus fuga,
              in, molestias inventore cum ducimus reprehenderit eum maxime
              provident alias saepe? Exercitationem voluptas adipisci dolorem
              voluptatem labore, quia sint voluptates pariatur vero, sit dolorum
              odit nulla molestiae accusantium illum. Eveniet quisquam nisi
              libero, pariatur reprehenderit eligendi amet obcaecati veritatis a
              placeat asperiores nemo, minima id? Quasi aliquid voluptatum nobis
              repellat mollitia amet excepturi quas ex et, iste totam itaque.
              Accusantium delectus consequuntur fugit quidem ad consectetur
              dolor quisquam, ut dolorum, ullam sequi tenetur itaque sed?{" "}
            </p>
          </div>
     
        
       </div>
      </div> 
      <Footer />
    </> 
  );
};

export default Home;
