import React from 'react';
import { useParams } from 'react-router-dom';

const CompanyData = () => {

    const { id } = useParams();
  return (
    <div>CompanyData- {id}</div>
  )
}

export default CompanyData