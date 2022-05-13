import React from "react";

// import { sendInvitationToAllCompanies } from "../../../api";
import { fetchAllCompaniesDeafultMail, sendInvitationToAllCompanies} from "../../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";



 const Invites =   () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      const loadPost = async () => {

         
          setLoading(true);


          console.log("Before Response");

          
          const response = await fetchAllCompaniesDeafultMail();
          console.log(response)

          console.log("After Response")

         
          setPosts(response.data);

         
          setLoading(false);
      }

    
      loadPost();
  }, []);

  async function clickFunction(){
    
    const result= await sendInvitationToAllCompanies();
    
    console.log(result);
   
  }
  

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  

console.log(posts);  
  return (
    <>
         {loading ? (
                    <h4>Loading...</h4>) :
                    <>
                    <div className="flex-grow-1 ">
                    <h3 className="ug-pg-h1 prog-hover">
                      List of companies for sending default email.
                      <span className="ug-pg-span">
                        <b>
                          Customized mails could also be sent.
                        </b>
                      </span>
                    </h3>
                  </div>
                    <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>SNo</StyledTableCell>
                          <StyledTableCell align="left">Name</StyledTableCell>
                          <StyledTableCell align="left">Phone No&nbsp;</StyledTableCell>
                          <StyledTableCell align="left">Email&nbsp;</StyledTableCell>
                          <StyledTableCell align="left">Status&nbsp;</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {posts.map((item) => (
                          <StyledTableRow key={item[0]}>
                            <StyledTableCell component="th" scope="row">
                              {item[0]}
                            </StyledTableCell>
                            <StyledTableCell align="left">{item[1]}</StyledTableCell>
                            <StyledTableCell align="left">{item[5]}</StyledTableCell>
                            <StyledTableCell align="left">{item[6]}</StyledTableCell>
                            <StyledTableCell align="left">{item[10]}</StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  </>
                }

    <div className="buttonDiv">
        <Button onClick={clickFunction} color="success" outline className="secondary_btn_default">
          
        Send default Mail to Companies
          
        </Button>
        <Button onClick={()=>Navigate('/invite')} color="info" outline className="secondary_btn_customized">
          
        Send A Customized Mail
          
        </Button>
      </div> 
</>
  )
};

export default Invites;
