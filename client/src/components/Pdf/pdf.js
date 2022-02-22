


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useRef } from 'react';




class ComponentToPrint extends React.PureComponent {
    render(){
  return (
    <>
    <div className='box'>
    <div className='pdf'>
      <div className='header'>
       
        <h3>भारतीय प्रौद्योगिकी संस्थान (भारतीय खगन गिद्यापीठ)</h3>
        <h3>Indian Institute of Technolgy (Indian School of Mines)
</h3>
       <h5>Dhanbad – 826 004 Jharkhand, India</h5>
       <h5>Since 1926</h5>


      </div>
      <div className='content'>
        <h4>COMPANY OVERVIEW</h4>
      <table class="table">
  <thead>
    <tr>
    
      <th scope="col">Name of Company</th>
      <th scope="col">Sector</th>
      <th scope="col">Website</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>Sayog</td>
      <td>Software</td>
      <td>www.xyz.com</td>
    </tr>
 
  </tbody>
</table>
<h4>INTERNSHIP DURATION (Please Highlight)
</h4>


<table class="table">
  <thead>
    <tr>
    
      <th scope="col">May – July 2022</th>
      <th scope="col">July – Dec 2022</th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <td>Pre-final year students of ALL courses (2023 batch)
</td>
      <td>M. Tech/ MBA – Business Analytics courses only (2023 batch)
</td>
     
    </tr>
 
  </tbody>
</table>
<h4>INTERN PROFILE</h4>
<table class="table">
  <thead>
    <tr>
    
      <th scope="col">Job Designation</th>
      <th scope="col">Job Description</th>
      <th scope="col">Mode of Internship
(Virtual/ Physical)</th>
<th scope='col'>Place of Posting
(In case of physical 
internship)</th>

    </tr>
  </thead>
  <tbody>
    <tr>

      <td>Engineering Intern

</td>
      <td>The ideal candidate is a motivated, organized, and creative individual 
who welcomes the challenges of developing new solutions through 
Tech
Will need to demonstrate technical understanding through 
computation using formula and preparation of calculations
</td>
<td>Virtual</td>
<td>Delhi</td>
     
    </tr>
 
  </tbody>
</table>
<h4>STIPEND DETAILS</h4>
<table class="table">
  <thead>
    <tr>
    
      <th scope="col">Stipend per month </th>
      <th scope="col">PPO provision on 
performance basis (Yes / 
No) </th>
      <th scope="col">CTC for PPO selects</th>
    </tr>
  </thead>
  <tbody>
    <tr>

      <td>INR 89,000 – 1.1 lakh</td>
      <td>Yes</td>
      <td>17-19 lakhs</td>
    </tr>
 
  </tbody>
</table>
    </div>
    </div>
    </div> 
    
    </>
  
  );
}
}

export default ComponentToPrint;
