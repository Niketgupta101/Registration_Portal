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
            <h6>We Are,</h6>
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
        <div className="intern_section section">
          <div className="intern_header header">
            <h2>Internship 2M/6M Hiring</h2>
          </div>
          <div className="intern_content">
            <div className="item1">
              <h4>Eligible Batches</h4>
              <div className="batches_array">
                <table>
                  <tbody>
                    <tr>
                      <th>June-July 2022</th>
                      <td>Pre-final Btech Students of all branches</td>
                    </tr>
                    <tr>
                      <th>Aug-Dec 2022</th>
                      <td>All Mtech, Msc Students</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="placement_section section">
          <div className="placement_header header">
            <h2>Placement Hiring</h2>
          </div>
          <div className="placement_content">
            <div className="item1">
              <h4>Eligible Batches</h4>
              <div className="batches_array">
                <table>
                  <tbody>
                    <tr>
                      <td>Final Btech Students of all branches</td>
                    </tr>
                    <tr>
                      <td>All Mtech, Msc Students</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="placement_section section">
          <div className="placement_header header">
            <h2>Placement Session</h2>
          </div>
          <div className="placement_content">
            <div className="item1">
              <h4>Eligible Batches</h4>
              <div className="batches_array">
                <table>
                  <tbody>
                    <tr>
                      <td>Final Btech Students of all branches</td>
                    </tr>
                    <tr>
                      <td>All Mtech, Msc Students</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
