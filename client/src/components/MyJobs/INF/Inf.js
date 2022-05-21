import { TabContext, TabPanel } from '@mui/lab';
import React, { useEffect, useState } from 'react';
import { getInfById, submitInf, updateInfById } from '../../../api';
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
  const Navigate = useNavigate();

  const { InfId } = useParams();

  const company = JSON.parse(localStorage.getItem('company'));

  const companyData = {
    Name_Of_The_Company: company[0].name,
    Category_Or_Sector: '',
    Website: company[0].website,
  };
  const jobData = {
    Internship_Duration: `Jan – June 2022 Dual Degree/ Integrated M. Tech courses only (2022 batch)`,
    Job_Designation: '',
    Job_Description: '',
    Mode_Of_Internship: 'Virtual',
    Place_Of_Posting: '',
  };
  const stipendData = {
    Salary_Per_Month: '',
    PPO_provision_on_performance_basis: 'Yes',
    CTC: '',
  };

  const [companyFormData, setCompanyFormData] = useState({ ...companyData });
  const [jobFormData, setJobFormData] = useState({ ...jobData });
  const [stipendFormData, setStipendFormData] = useState({ ...stipendData });
  const [hrDetails, setHrDetails] = useState({});

  const handleCompanyDataChange = (e) => {
    setCompanyFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleJobDataChange = (e) => {
    setJobFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleStipendDataChange = (e) => {
    setStipendFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const handleHrDetailsChange = (type, name, value) => {
    setHrDetails((prevData) => ({
      ...prevData,
      [type]: { ...prevData[type], [name]: value },
    }));
  };
  // ------------------------------------------------------------

  const [fourYearData, setFourYearData] = useState({
    Select_All: false,
    Chemical_Engineering: false,
    Civil_Engineering: false,
    Computer_Science_and_Engineering: false,
    Electrical_Engineering: false,
    Electronics_and_Communication_Engineering: false,
    Engineering_Physics: false,
    Environmental_Engineering: false,
    Mechanical_Engineering: false,
    Mineral_and_Metallurgical_Engineering: false,
    Mining_Engineering: false,
    Mining_Machinery_Engineering: false,
    Petroleum_Engineering: false,
  });
  const [fiveYearData, setFiveYearData] = useState({
    Select_All: false,
    Computer_Science_and_Engineering: false,
    Mathematics_and_Computing: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
  });
  const [skillData, setSkillData] = useState({
    C_Cpp_Java_Python_etc: false,
    Full_Stack_Development_Frontend_or_Backend: false,
    Civil_Engineering: false,
    AI_ML_DL_Data_Science: false,
    Business_Data_Analytics_Product_Management: false,
  });

  const handleFourYearChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !fourYearData[e.target.name];
      // setFourYearData((prevData) => ({
      //   ...prevData,
      //   [e.target.name]: e.target.checked ? true : false,
      // }));
      for (let i in fourYearData) {
        setFourYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
      // setFourYearData((prevData) => {
      //   for (let i in prevData) {
      //     prevData[i] = newValue;
      //   }
      //   return prevData;
      // });
    } else {
      setFourYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleFiveYearChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !fiveYearData[e.target.name];
      for (let i in fiveYearData) {
        setFiveYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setFiveYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
  };
  const handleSkillChange = (e) => {
    setSkillData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
  };

  useEffect(() => {
    console.log(fourYearData);
  }, [fourYearData]);

  // ------------------------------------------------------

  const [threeYearData, setThreeYearData] = useState({
    Select_All: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
  });
  const [twoYearData, setTwoYearData] = useState({
    Select_All: false,
    Applied_Geology: false,
    Applied_Geophysics: false,
    Chemical_Engineering: false,
    Civil_Engineering: false,
    Computer_Science_and_Engineering: false,
    Data_Analytics: false,
    Electrical_Engineering: false,
    Electronics_and_Communication_Engineering: false,
    Environmental_Engineering: false,
    Industrial_Engineering_and_Management: false,
    Mechanical_Engineering: false,
    Fuel_Minerals_and_Metallurgical_Engineering: false,
    Mining_Engineering: false,
    Mining_Machinery_Engineering: false,
    Petroleum_Engineering: false,
    Pharmaceutical_Science_and_Engineering: false,
  });
  const [twoYearMbaData, setTwoYearMbaData] = useState({
    Select_All: false,
    Business_Analytics: false,
    Finance: false,
    Human_Resources: false,
    Marketing: false,
    Operations: false,
  });
  const [twoYearMscData, setTwoYearMscData] = useState({
    Select_All: false,
    Chemistry: false,
    Mathematics_and_Computing: false,
    Physics: false,
  });

  const handleThreeYearChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !threeYearData[e.target.name];
      for (let i in threeYearData) {
        setThreeYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setThreeYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(threeYearData);
  };
  const handleTwoYearChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !twoYearData[e.target.name];
      for (let i in twoYearData) {
        setTwoYearData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
      //console.log(twoYearData);
    }
  };
  const handleTwoYearMbaChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !twoYearMbaData[e.target.name];
      for (let i in twoYearMbaData) {
        setTwoYearMbaData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearMbaData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(twoYearMbaData);
  };
  const handleTwoYearMscChange = (e) => {
    if (e.target.name === 'Select_All') {
      let newValue = !twoYearMscData[e.target.name];
      for (let i in twoYearMscData) {
        setTwoYearMscData((prevData) => ({ ...prevData, [i]: newValue }));
      }
      //console.log(newValue);
    } else {
      setTwoYearMscData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.checked ? true : false,
      }));
    }
    //console.log(twoYearMscData);
  };

  // ------------------------------------------------------------
  const selectionData = {
    Total_Number_Of_Rounds: '',
    Number_Of_Offers: '',
    Eligibility_Criteria: '',
  };
  const [resumeShortListingData, setResumeShortListingData] = useState({
    Yes: false,
    No: false,
  });
  const [typeOfTestData, setTypeOfTestData] = useState({
    Technical: false,
    Aptitude: false,
    Both: false,
    None: false,
  });
  const [otherQualificationRoundsData, setOtherQualificationRoundsData] =
    useState({
      GD: false,
      Case_Study: false,
      Interview: false,
    });
  const [selectionFormData, setSelectionFormData] = useState(selectionData);

  const handleResumeShortListingChange = (e) => {
    setResumeShortListingData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Resume_Shortlisting: {
          ...prevData.Selection_Procedure.Resume_Shortlisting,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
  };
  const handleTypeOfTestChange = (e) => {
    setTypeOfTestData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Type_Of_Test: {
          ...prevData.Selection_Procedure.Type_Of_Test,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
  };
  const handleOtherQualificationRoundsChange = (e) => {
    setOtherQualificationRoundsData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.checked ? true : false,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        Other_Qualification_Rounds: {
          ...prevData.Selection_Procedure.Other_Qualification_Rounds,
          [e.target.name]: e.target.checked ? true : false,
        },
      },
    }));
  };
  const handleSelectionDataChange = (e) => {
    setSelectionFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    setInfData((prevData) => ({
      ...prevData,
      Selection_Procedure: {
        ...prevData.Selection_Procedure,
        [e.target.name]: e.target.value,
      },
    }));
  };

  useEffect(() => {
    //console.log({ data: InfData.Selection_Procedure });
  }, [resumeShortListingData]);

  useEffect(() => {
    //console.log({ data: InfData.Selection_Procedure });
  }, [typeOfTestData]);

  useEffect(() => {
    //console.log({ data: InfData.Selection_Procedure });
  }, [otherQualificationRoundsData]);

  useEffect(() => {
    //console.log(selectionFormData);
  }, [selectionFormData]);

  // --------------------------------------------------

  // const [InfId, setInfId] = useState('');

  const [InfData, setInfData] = useState({});

  const fetchInfData = async (InfId) => {
    const response = await getInfById(InfId);

    // console.log(response.data);
    setInfData((prevData) => ({ ...prevData, ...response.data.inf }));
    // setCompanyFormData({ ...response.data.inf.Company_Overview });
    setJobFormData({ ...response.data.inf.Intern_Profile });
    setStipendFormData({ ...response.data.inf.Salary_Details });
    setHrDetails({ ...response.data.inf.HR_Details });
    setFourYearData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Four_Year_Btech_Programs,
    });
    setFiveYearData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs,
    });
    setSkillData({
      ...response.data.inf.Eligible_Courses_And_Disciplines.Skill_Based_Hiring,
    });
    setThreeYearData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Three_Year_MSc_Tech_Programs,
    });
    setTwoYearData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Two_Year_Mtech_Programs,
    });
    setTwoYearMbaData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Two_Year_MBA_Programs,
    });
    setTwoYearMscData({
      ...response.data.inf.Eligible_Courses_And_Disciplines
        .Two_Year_MSc_Programs,
    });
    setResumeShortListingData({
      ...response.data.inf.Selection_Procedure.Resume_Shortlisting,
    });
    setTypeOfTestData({
      ...response.data.inf.Selection_Procedure.Type_Of_Test,
    });
    setOtherQualificationRoundsData({
      ...response.data.inf.Selection_Procedure.Other_Qualification_Rounds,
    });
    setSelectionFormData({
      Total_Number_Of_Rounds:
        response.data.inf.Selection_Procedure.Total_Number_Of_Rounds,
      Number_Of_Offers: response.data.inf.Selection_Procedure.Number_Of_Offers,
      Eligibility_Criteria:
        response.data.inf.Selection_Procedure.Eligibility_Criteria,
    });
    setInfData({ ...response.data.inf });
  };

  useEffect(() => {
    if (InfId) fetchInfData(InfId);
  }, [InfId]);

  const handleUpdateInfById = async (e) => {
    e.preventDefault();

    setInfData((prevData) => ({
      ...prevData,
      Company_Overview: { ...companyFormData },
      Intern_Profile: { ...jobFormData },
      Salary_Details: { ...stipendFormData },
      HR_Details: { ...hrDetails },
      Eligible_Courses_And_Disciplines: {
        ...prevData.Eligible_Courses_And_Disciplines,
        Four_Year_Btech_Programs: { ...fourYearData },
        Five_Year_Dual_Degree_Or_Integrated_Mtech_Programs: { ...fiveYearData },
        Skill_Based_Hiring: { ...skillData },
        Three_Year_MSc_Tech_Programs: { ...threeYearData },
        Two_Year_Mtech_Programs: { ...twoYearData },
        Two_Year_MBA_Programs: { ...twoYearMbaData },
        Two_Year_MSc_Programs: { ...twoYearMscData },
      },
    }));
    //console.log(selectionFormData);
    //console.log(InfData, InfId);
    try {
      setIsLoading(true);
      let response = await updateInfById(InfData, InfId);
      setIsLoading(false);

      //console.log(response);
      setPage((prevPage) => `${JSON.parse(prevPage) + 1}`);
    } catch (error) {
      //console.log(error);
    }
  };
  //console.log({ InfData });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    //console.log(InfData);

    try {
      setIsLoading(true);
      let response = await submitInf(InfId);
      setIsLoading(false);
      //console.log(response);
      Navigate('/myjobs');
    } catch (error) {
      //console.log(error);
    }
  };

  // -----------------------------------------------------------------

  // useEffect(async() => {
  //   let response = await getLatestInfOfUser();

  //   //console.log(response);
  // }, [])

  return (
    <>
      <div className='INF'>
        <TabContext
          value={page}
          style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}
        >
          <TabPanel value='1'>
            <INF1
              setPage={setPage}
              companyFormData={companyFormData}
              jobFormData={jobFormData}
              stipendFormData={stipendFormData}
              hrDetails={hrDetails}
              handleCompanyDataChange={handleCompanyDataChange}
              handleJobDataChange={handleJobDataChange}
              handleStipendDataChange={handleStipendDataChange}
              handleHrDetailsChange={handleHrDetailsChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={'2'}>
            <INF2
              setPage={setPage}
              fourYearData={fourYearData}
              fiveYearData={fiveYearData}
              skillData={skillData}
              handleFourYearChange={handleFourYearChange}
              handleFiveYearChange={handleFiveYearChange}
              handleSkillChange={handleSkillChange}
              handleUpdateInfById={handleUpdateInfById}
              threeYearData={threeYearData}
              twoYearData={twoYearData}
              twoYearMbaData={twoYearMbaData}
              twoYearMscData={twoYearMscData}
              handleThreeYearChange={handleThreeYearChange}
              handleTwoYearChange={handleTwoYearChange}
              handleTwoYearMbaChange={handleTwoYearMbaChange}
              handleTwoYearMscChange={handleTwoYearMscChange}
            />
          </TabPanel>
          {/* <TabPanel value={"3"}>
            <INF3
              setPage={setPage}
              threeYearData={threeYearData}
              twoYearData={twoYearData}
              twoYearMbaData={twoYearMbaData}
              twoYearMscData={twoYearMscData}
              handleThreeYearChange={handleThreeYearChange}
              handleTwoYearChange={handleTwoYearChange}
              handleTwoYearMbaChange={handleTwoYearMbaChange}
              handleTwoYearMscChange={handleTwoYearMscChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel> */}
          <TabPanel value={'3'}>
            <INF4
              setPage={setPage}
              resumeShortListingData={resumeShortListingData}
              typeOfTestData={typeOfTestData}
              otherQualificationRoundsData={otherQualificationRoundsData}
              selectionFormData={selectionFormData}
              handleResumeShortListingChange={handleResumeShortListingChange}
              handleTypeOfTestChange={handleTypeOfTestChange}
              handleOtherQualificationRoundsChange={
                handleOtherQualificationRoundsChange
              }
              handleSelectionDataChange={handleSelectionDataChange}
              handleUpdateInfById={handleUpdateInfById}
            />
          </TabPanel>
          <TabPanel value={'4'}>
            <ReviewInf
              setPage={setPage}
              InfData={InfData}
              handleFormSubmit={handleFormSubmit}
            />
          </TabPanel>
        </TabContext>
      </div>
      {isLoading && <Loading />}
    </>
  );
};

export default Inf;
