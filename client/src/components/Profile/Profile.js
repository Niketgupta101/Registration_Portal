import React from 'react';
// import avatar from '../../Images/avatar2.png';

import './styles.css';

const Profile = () => {
    
  return (
    <>
    <div className="user_profile">
      <div className="profile_header">
          <h2>User Details</h2>
      </div>
      <div className="user_details">
        {/* <div className="avatar">
          <h3>Edit</h3>
          <img src={avatar} alt="" srcset="" >

          </img>
        </div> */}
        <div className="details">
          <div className="item">
            <h3>Name</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Name</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Name</h3>
            <h4>Nihar kamal</h4>
          </div>
          <div className="item">
            <h3>Name</h3>
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