import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const Home = () => {
  const Navigate = useNavigate();

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || !user.isemailVerified) {
      Navigate('/auth');
    }

    if (user && user.role === 'Admin') {
      Navigate('/admin');
    }
  }, [Navigate, user]);

  return (
    <>
      {/* <div className="HomePage">
    <div className="bg-image"></div>

<div className="bg-text">
<h5>We Are,</h5>
            <h1>CAREER DEVELOPMENT CENTER</h1>
            <h6>of </h6>
            <h1>IIT (ISM) DHANBAD</h1>
            
</div>
<div className="AboutContent">
  <div className="headerabout">     About IIT(ISM) Dhanbad</div>
  <div className="content">
            <p>
            The Indian National Congress at its XVII Session of December 1901 passed a resolution stating that “in view of the fact that the tendency of recent legislation namely, The Indian Mines Act VII of 1901, is that all Indian mines must be kept under the supervision of mining experts, the Congress is of opinion that a Government College of Mining Engineering be established in some suitable place in India on the models of the Royal School of Mines in England, Mining Colleges of Japan and at other places in the continent”. The McPherson Committee formed by Govt. of India, recommended the establishment of an institution for imparting education in the fields of Mining and Geology, whose report, submitted in 1920, formed the main basis for establishment of the Indian School of Mines, Dhanbad.

The Indian School of Mines was formally opened on 9th December 1926, by Lord Irwin, the then Viceroy of India to address the need for trained manpower related to mining activities in the country with disciplines of Mining and Applied Geology. In 1967 it was granted the status of a deemed to be university under Section 3 of UGC Act, 1956. Since its establishment, IIT(ISM) has undergone considerable expansion of its activities, and presently it can be considered as a total technology education institute.
            </p>
          </div>
      
          </div>
          <div className="overview">
            <div className="header">Overview</div>
            <div className="content">
             <h3>Adminstration</h3>
             <div>The Indian Institute of Technology (Indian School of Mines) constituted under Institute of Technology Act, 1961 is administered through IIT Council-the apex body, Government of India under the Chairmanship of Honourable Minister, MoE for uniform and smooth governance of Pan-IIT in our country.</div>
            </div>
            <div className="content">
              <h3>Our Vision and Mission</h3>
              <div>To be a nationally and internationally acclaimed premier institution of higher technical and scientific education with social commitment having an ethos for intellectual excellence, where initiative is nurtured, where new ideas, research and scholarship flourish, where intellectual honesty is the norm and from which will emerge the leaders and innovators of tomorrow in the realm of technology.</div>
            </div>
            <div className="content">
              <h3>History and Discovery</h3>
              <div>Situated in the heart of the country’s prime coking coal belt, 260 kms from Kolkata with a campus spread over an area of 393 acres, (with 218 acres of existing campus and 175 acres under acquisition and development) the fully residential IIT(ISM) has all the facilities of world class academic institute. What started as an institution to impart mining education has graduated into a full-fledged technical institution of international acclaim offering a host of programmes like B. Tech., M. Tech., M. Sc. Tech., and MBA.</div>
            </div>
          </div>
    

    </div> */}

      <div className='HomePage'>
        <div className='first_section'>
          <div className='card'>
            <h5>We Are,</h5>
            <h1>CAREER DEVELOPMENT CENTER</h1>
            <h6>of </h6>
            <h1>IIT (ISM) DHANBAD</h1>
          </div>
        </div>
        <div className='aboutus_section section'>
          <div className='aboutus_header header'>
            <h2>About IIT(ISM) Dhanbad</h2>
          </div>
          <div className='aboutus_content'>
            <p>
              The Indian National Congress at its XVII Session of December 1901
              passed a resolution stating that “in view of the fact that the
              tendency of recent legislation namely, The Indian Mines Act VII of
              1901, is that all Indian mines must be kept under the supervision
              of mining experts, the Congress is of opinion that a Government
              College of Mining Engineering be established in some suitable
              place in India on the models of the Royal School of Mines in
              England, Mining Colleges of Japan and at other places in the
              continent”. The McPherson Committee formed by Govt. of India,
              recommended the establishment of an institution for imparting
              education in the fields of Mining and Geology, whose report,
              submitted in 1920, formed the main basis for establishment of the
              Indian School of Mines, Dhanbad. The Indian School of Mines was
              formally opened on 9th December 1926, by Lord Irwin, the then
              Viceroy of India to address the need for trained manpower related
              to mining activities in the country with disciplines of Mining and
              Applied Geology. In 1967 it was granted the status of a deemed to
              be university under Section 3 of UGC Act, 1956. Since its
              establishment, IIT(ISM) has undergone considerable expansion of
              its activities, and presently it can be considered as a total
              technology education institute.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
