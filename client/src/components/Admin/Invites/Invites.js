import React from 'react';
import './../../MyJobs/styles.css';
import 'animate.css';
import './invites.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { FaEnvelope } from 'react-icons/fa';

// import { sendInvitationToAllCompanies } from "../../../api";
import {
  fetchAllCompaniesDeafultMail,
  sendInvitationToAllCompanies,
} from '../../../api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "reactstrap";

const Invites = () => {
  const Navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  let user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user || user.isemailVerified === false || user.role !== 'Admin') {
      Navigate('/auth');
    }
  }, [Navigate, user]);

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      const response = await fetchAllCompaniesDeafultMail();
      setPosts(response.data);
      setLoading(false);
    };

    loadPost();
  }, []);

  async function clickFunction() {
    try {
      await sendInvitationToAllCompanies();
    } catch (error) {
      Navigate('/badgateway');
    }
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 16,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div className='company-dashboard-container'>
        <div className='jumbotron jumbotron-fluid p-2'>
          <div className='m-2 hero-content-container mx-auto'>
            <div className='p-2 pt-5 container'>
              <div className='verify-header '>
                <div className='d-flex justify-content-center'>
                  <div className='verifyline align-self-center mx-3'></div>
                  <FaEnvelope style={{ fontSize: '3em' }} />
                  <div className='verifyline align-self-center mx-3'></div>
                </div>
                <div className='text-center verify-email'>
                  Send Email Invitation
                </div>
              </div>
              <Stack
                spacing={2}
                className='pt-5 d-flex justify-content-center'
                direction='row'
              >
                <div className='bt animate__animated animate__fadeInLeft'>
                  <Button variant='outlined' onClick={clickFunction}>
                    <div className='courses-button'>SEND DEFAULT MAIL</div>
                  </Button>
                </div>
                <div className='bt animate__animated animate__fadeInRight'>
                  <Button
                    variant='outlined'
                    onClick={() => Navigate('/invite')}
                  >
                    <div className='courses-button'>SEND CUSTOMIZED MAIL</div>
                  </Button>
                </div>
              </Stack>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='verify-text-1 mt-2'>
              For Updating the Details Kindly Make Changes to this
            </div>
            <div className='d-flex align-items-center'>
              <Button
                variant='text'
                href='https://docs.google.com/spreadsheets/d/1bmb6ntvaoVa2h44clYS0gfvYFQLyDXmsEepiztPU_x4/edit#gid=73933310'
                target='_blank'
              >
                <b style={{ fontSize: '18px' }}>Sheet</b>
              </Button>
            </div>
          </div>
        </div>
        {loading ? (
          <h4 className='mx-3'>Loading...</h4>
        ) : (
          <>
            <div className='m-3 p-2'>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component='div'
                count={posts.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Company Id</StyledTableCell>
                      <StyledTableCell align='left'>Name</StyledTableCell>
                      <StyledTableCell align='left'>
                        Phone No&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        Email&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align='left'>
                        Status&nbsp;
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {posts
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => (
                        <StyledTableRow key={item[0]}>
                          <StyledTableCell component='th' scope='row'>
                            {item[0]}
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                            {item[1]}
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                            {item[5]}
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                            {item[6]}
                          </StyledTableCell>
                          <StyledTableCell align='left'>
                            {item[10]}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </>
        )}

        {/* <div className="buttonDiv">
          <Button
            onClick={clickFunction}
            color="success"
            outline
            className="secondary_btn_default"
          >
            Send default Mail to Companies
          </Button>
          <Button
            onClick={() => Navigate("/invite")}
            color="info"
            outline
            className="secondary_btn_customized"
          >
            Send A Customized Mail
          </Button>
        </div> */}
      </div>
    </>
  );
};

export default Invites;
