import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BadGateway.css';
export default function BadGateway() {
  const Navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user') === null) {
      Navigate('/auth');
    }

    //
  }, []);
  return (
    <div className='badGateway'>
      <h3>502 Bad Gateway</h3>
      <hr />
    </div>
  );
}
