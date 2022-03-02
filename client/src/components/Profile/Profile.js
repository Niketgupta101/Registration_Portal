import React from 'react';
// import avatar from '../../Images/avatar2.png';

import './styles.css';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {  
    width:700,
  },
})

const Profile = () => {

  let user = JSON.parse(localStorage.getItem('user'));
  let company = JSON.parse(localStorage.getItem('company'));

  console.log({ user, company });
  const classes = useStyles();
    
  return (
    <>
    <div className="user_profile">
      <div className="profile_header">
          <h2>User Details</h2>
   
      </div>
     
   
    <div className="Ap">
      <div className='table-container'>
      <Table  className={classes.table} >      
          <TableRow  className='row-style'>
              <TableCell variant="head"> Name</TableCell>
              <TableCell>Cell 1</TableCell>
            
          </TableRow>     
          <TableRow  className='row-style'>
              <TableCell variant="head">Email</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>       
          <TableRow  className='row-style'>
              <TableCell variant="head">Contact Number</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Company Type</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
  
          <TableRow  className='row-style'>
              <TableCell variant="head">Company Website</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Primary HR. Name</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Primary HR. Email</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Primary HR. Contact Number</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Secondary HR. Name</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Secondary HR. Email</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
          <TableRow  className='row-style'>
              <TableCell variant="head">Secondary HR. Contact Number</TableCell>
              <TableCell>Cell 1</TableCell>
             
          </TableRow>   
      </Table>
      </div>
    </div>
    </div>
    </>
  )
}

export default Profile