import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import Collapsible from 'react-collapsible';

function createData(branchName, Unplaced, courseLink) {
  return { branchName, Unplaced, courseLink };
}
function createData2(branch1, branch2, Unplaced, courseLink) {
  return { branch1, branch2, Unplaced, courseLink };
}

function CourseTable(props) {
  const [data, setData] = useState(props.data);
  const [rows, setRows] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [displayBody, setDisplayBody] = useState('none');

  const handleShowClick = () => {
    setDisplayBody((prev) => {
      if (prev === 'none') return '';
      else return 'none';
    });
  };

  useEffect(() => {
    let temp = props.data;

    let filterData = [];
    for (var i = 0; i < temp.length - 1; i++) {
      filterData.push(createData(temp[i][1], temp[i][2], temp[i][3]));
    }
    if (temp.length > 0) {
      setGrandTotal(() => temp[temp.length - 1][2]);
    }
    setRows(() => filterData);
  }, [props.data]);

  return (
    <TableContainer
      style={{
        width: '90vw',
        margin: 'auto',
        marginTop: '5vh',
        minWidth: '300px',
        maxWidth: '800px',
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead onClick={() => handleShowClick()}>
          <TableRow className='table-row'>
            <TableCell>{props.title}</TableCell>
            <TableCell align='right' style={{ display: displayBody }}>
              Number of Unplaced Students
            </TableCell>
            <TableCell style={{ display: displayBody }}></TableCell>
          </TableRow>
        </TableHead>

        <TableBody style={{ display: displayBody }}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.branchName}
              </TableCell>
              <TableCell align='right'>{row.Unplaced}</TableCell>
              <TableCell align='right'>
                <a href={'https://' + row.courseLink}>See Course Details</a>
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            //   key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className='grand-total'
          >
            <TableCell component='th' scope='row'>
              Grand Total
            </TableCell>
            <TableCell align='right'>{grandTotal}</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function CourseTable2(props) {
  const [data2, setData2] = useState(props.data);
  const [rows2, setRows2] = useState([]);
  const [grandTotal2, setGrandTotal2] = useState(0);
  const [displayBody, setDisplayBody] = useState('none');

  const handleShowClick = () => {
    setDisplayBody((prev) => {
      if (prev === 'none') return '';
      else return 'none';
    });
  };

  useEffect(() => {
    let temp = props.data;

    let filterData = [];
    for (var i = 0; i < temp.length - 1; i++) {
      filterData.push(
        createData2(temp[i][0], temp[i][1], temp[i][2], temp[i][3])
      );
    }
    if (temp.length > 0) {
      setGrandTotal2(() => temp[temp.length - 1][2]);
    }
    setRows2(() => filterData);
  }, [props.data]);

  return (
    <TableContainer
      style={{
        width: '90vw',
        margin: 'auto',
        marginTop: '5vh',
        minWidth: '30px',
        maxWidth: '800px',
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead onClick={() => handleShowClick()}>
          <TableRow className='table-row'>
            <TableCell>{props.title}</TableCell>
            <TableCell></TableCell>
            <TableCell align='right' style={{ display: displayBody }}>
              Number of Unplaced Students
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ display: displayBody }}>
          <TableRow
            //   key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              Course 1
            </TableCell>
            <TableCell align='right'> Course 2</TableCell>
            <TableCell align='right'> </TableCell>
          </TableRow>
          {rows2.map((row, id) => (
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.branch1}
              </TableCell>
              <TableCell align='right'>{row.branch2}</TableCell>
              <TableCell align='right'>{row.Unplaced}</TableCell>
              <TableCell align='right'>
                <a href={'https://' + row.courseLink}>See Course Details</a>
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            //   key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className='grand-total'
          >
            <TableCell component='th' scope='row'>
              Grand Total
            </TableCell>
            <TableCell align='right'></TableCell>
            <TableCell align='right'>{grandTotal2}</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export { CourseTable, CourseTable2 };
