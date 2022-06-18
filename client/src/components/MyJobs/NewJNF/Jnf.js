import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { fetchJnf, updateJnf, submitReviewedJnf } from '../../../api';
import { useNavigate, useParams } from 'react-router-dom';

import './styles.css';

import JNF1 from './page1/JNF1';
import JNF2 from './page2/JNF2';
import JNF4 from './page4/JNF4';
import ReviewJnf from './ReviewJnf/ReviewJnf';

import Loading from '../../Loading/Loading';

const Jnf = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState('1');
  const [jnfData, setJnfData] = useState();
  const Navigate = useNavigate();

  const { JnfId } = useParams();

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
      let { data } = await fetchJnf(JnfId);

      setJnfData({ ...data.job });
    } catch (error) {
      Navigate('/badgateway');
    }
  };

  useEffect(() => {
    if (!jnfData) fetchFormData();
  }, [JnfId]);

  const handleUpdateJnf = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await updateJnf(jnfData);

      setIsLoading(false);
      setPage((prevPage) => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      Navigate('/badgateway');
    }
  };

  const handleSubmitJnf = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await submitReviewedJnf(JnfId);
      setIsLoading(false);
      Navigate('/myjobs');
    } catch (error) {
      setIsLoading(false);
      Navigate('/badgateway');
    }
  };

  const handleOnChange = async (header, field, value) => {
    setJnfData((prevData) => ({
      ...prevData,
      [header]: { ...prevData[header], [field]: value },
    }));
  };

  const handleBranchOnChange = async (header, field, value, selectAll) => {
    if (field !== selectAll && jnfData[header].Select_All === true) {
      setJnfData((prevData) => ({
        ...prevData,
        [header]: {
          ...prevData[header],
          [selectAll]: false,
          [field]: value,
        },
      }));
    } else if (field === selectAll) {
      let newValue = !jnfData[header][field];
      for (let i in jnfData[header]) {
        setJnfData((prevData) => ({
          ...prevData,
          [header]: {
            ...prevData[header],
            [i]: newValue,
          },
        }));
      }
    } else {
      setJnfData((prevData) => ({
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
            {jnfData && (
              <JNF1
                setPage={setPage}
                jnfData={jnfData}
                handleOnChange={handleOnChange}
                handleUpdateJnf={handleUpdateJnf}
              />
            )}
          </TabPanel>
          {jnfData && (
            <TabPanel value={'2'}>
              <JNF2
                setPage={setPage}
                jnfData={jnfData}
                handleOnChange={handleBranchOnChange}
                handleUpdateJnf={handleUpdateJnf}
              />
            </TabPanel>
          )}
          {jnfData && (
            <TabPanel value={'3'}>
              <JNF4
                setPage={setPage}
                jnfData={jnfData}
                handleOnChange={handleOnChange}
                handleUpdateJnf={handleUpdateJnf}
              />
            </TabPanel>
          )}
          {jnfData && (
            <TabPanel value={'4'}>
              <ReviewJnf
                setPage={setPage}
                jnfData={jnfData}
                handleFormSubmit={handleSubmitJnf}
              />
            </TabPanel>
          )}
        </TabContext>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Jnf;
