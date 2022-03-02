import React from 'react';
// import avatar from '../../Images/avatar2.png';

import './styles.css';

const Profile = () => {

  let user = JSON.parse(localStorage.getItem('user'));
  let company = JSON.parse(localStorage.getItem('company'));

  return (
    <>
    <div className="user_profile">
      <div className="profile_header">
          <h2>User Details</h2>
          <button>Edit</button>
      </div>
      <div className="user_details">
        <div className="details">
          <div className="item">
            <h3>Name</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>E-mail</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Contact Number</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Company Name</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Company Type</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>About the Company</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Primary HR. Details</h3>
            <h4>Name </h4>
            <h4>Contact Number</h4>
            <h4>E-mail</h4>           
          </div>
          <div className="item">
            <h3>Secondary HR. Details</h3>
            <h4>Name </h4>
            <h4>Contact Number</h4>
            <h4>E-mail</h4>
           
          </div>
          <div className="item">
            <h3>Website</h3>
            <h4>Nihar kamal</h4>
          </div>
        </div>
      </div>
      <div className="company_details">

      </div>
    </div>
    </>
  )
}

export default Profile