import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { fetchInf, updateInf, submitReviewedInf } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

import INF1 from './page1/INF1';
import INF2 from './page2/INF2';
import INF4 from './page4/INF4';
import ReviewInf from './ReviewInf/ReviewInf';

import './styles.css';
import Loading from '../../Loading/Loading';

const Inf = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState('1');
  const [infData, setInfData] = useState();
  const Navigate = useNavigate();

  const { InfId } = useParams();

  let user = JSON.parse(localStorage.getItem('user'));
  const company = JSON.parse(localStorage.getItem('company'));

  useEffect(() => {
    if (
      !user ||
      user.isemailVerified === false ||
      !company ||
      company.length === 0
    ) {
      Navigate('/auth');
    }
  }, [Navigate, user, company]);

  const fetchFormData = async () => {
    try {
      let { data } = await fetchInf(InfId);

      setInfData({ ...data.job });
    } catch (error) {
      Navigate('/badgateway');
    }
  };

  useEffect(() => {
    if (!infData) fetchFormData();
  }, [InfId]);

  const handleUpdateInf = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateInf(infData);

      setIsLoading(false);
      setPage((prevPage) => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      Navigate('/badgateway');
    }
  };

  const handleSubmitInf = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      await submitReviewedInf(InfId);
      setIsLoading(false);
      Navigate('/myjobs');
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  };

  const handleOnChange = async (header, field, value) => {
    setInfData((prevData) => ({
      ...prevData,
      [header]: { ...prevData[header], [field]: value },
    }));
  };

  const handleBranchOnChange = async (header, field, value, selectAll) => {
    if (field !== selectAll && infData[header].Select_All === true) {
      setInfData((prevData) => ({
        ...prevData,
        [header]: {
          ...prevData[header],
          [selectAll]: false,
          [field]: value,
        },
      }));
    } else if (field === selectAll) {
      let newValue = !infData[header][field];
      for (let i in infData[header]) {
        setInfData((prevData) => ({
          ...prevData,
          [header]: {
            ...prevData[header],
            [i]: newValue,
          },
        }));
      }
    } else {
      setInfData((prevData) => ({
        ...prevData,
        [header]: {
          ...prevData[header],
          [selectAll]: false,
          [field]: value,
        },
      }));
    }
  };

  return (
    <>
      <div className='INF'>
        <TabContext
          value={page}
          style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}
        >
          <TabPanel value='1'>
            {infData && (
              <INF1
                setPage={setPage}
                infData={infData}
                handleOnChange={handleOnChange}
                handleUpdateInf={handleUpdateInf}
              />
            )}
          </TabPanel>
          {infData && (
            <TabPanel value={'2'}>
              <INF2
                setPage={setPage}
                infData={infData}
                handleOnChange={handleBranchOnChange}
                handleUpdateInf={handleUpdateInf}
              />
            </TabPanel>
          )}
          {infData && (
            <TabPanel value={'3'}>
              <INF4
                setPage={setPage}
                infData={infData}
                handleOnChange={handleOnChange}
                handleUpdateInf={handleUpdateInf}
              />
            </TabPanel>
          )}
          {infData && (
            <TabPanel value={'4'}>
              <ReviewInf
                setPage={setPage}
                infData={infData}
                handleFormSubmit={handleSubmitInf}
              />
            </TabPanel>
          )}
        </TabContext>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Inf;
