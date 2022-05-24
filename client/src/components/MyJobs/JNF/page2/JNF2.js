import React, { useState, useRef } from "react";
import { Form } from "reactstrap";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "animate.css";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleUp } from "react-icons/fa";

export default function JNF2({
  setPage,
  fourYearData,
  fiveYearData,
  threeYearData,
  twoYearData,
  twoYearMbaData,
  twoYearMscData,
  skillData,
  handleFourYearChange,
  handleFiveYearChange,
  handleSkillChange,
  handleThreeYearChange,
  handleTwoYearChange,
  handleTwoYearMbaChange,
  handleTwoYearMscChange,
  handleUpdateJnfById,
}) {
  const [eligiblediv, setEligiblediv] = useState(false);
  const [btechdiv, setBtechdiv] = useState(false);
  const [dual_mtechdiv, setdual_mtechdiv] = useState(false);
  const [mbadiv, setmbadiv] = useState(false);
  const [msc2div, setmsc2div] = useState(false);
  const [msc3div, setmsc3div] = useState(false);
  const [mtechdiv, setmtechdiv] = useState(false);
  const [ugdiv, setUgdiv] = useState(false);
  const [pgdiv, setPgdiv] = useState(false);
  const [phddiv, setphddiv] = useState(false);

  const refbtech4year = useRef();
  const refdual_mtech = useRef();
  const refmba = useRef();
  const refmsc2 = useRef();
  const refmsc3 = useRef();
  const refmtech = useRef();
  const refphd = useRef();

  function handleBackClick(refname) {
    refname.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="overallDiv1">
      <Form>
        <div>
          <div className="container col-lg-12 col-md-12 category p-0 my-3  ">
            <div className="upper py-1">
              <div>
                <div className="category-heading ">
                  <header className="headerText me-3">
                    Eligible courses and disciplines
                  </header>

                  {/* <div className="mx-4 p-2 align-self-center">
                    {eligiblediv === true ? (
                      <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                    ) : (
                      <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                    )}
                  </div> */}
                </div>
                <div className="startText mx-2 mb-2">
                  <small className=" animate__animated animate__fadeIn">
                    List of courses and disciplines offered at IIT (ISM) are
                    shown below. Please highlight or check by clicking as per
                    your requirement
                  </small>
                </div>
              </div>
            </div>
            <div className="lower p-0 my-3 animate__animated animate__fadeInLeft">
              <div
                onClick={() => {
                  setTimeout(() => {
                    if (ugdiv) {
                      setUgdiv(false);
                    } else {
                      setUgdiv(true);
                    }
                  }, 200);
                }}
              >
                <div>
                  <div class="ug-pg d-flex m-0 justify-content-center">
                    <div className="flex-grow-1 ">
                      <h1 className="ug-pg-h1">
                        Undergraduate
                        <span className="ug-pg-span">
                          <b> Admitted through JEE(Advanced)</b>{" "}
                        </span>
                      </h1>
                    </div>
                    <div className="mx-4 p-2 align-self-center">
                      {ugdiv === true ? (
                        <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                      ) : (
                        <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {ugdiv === true ? (
                <div className="lower ">
                  <div className="animate__animated animate__zoomIn">
                    <div ref={refbtech4year} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (btechdiv) {
                              setBtechdiv(false);
                            } else {
                              setBtechdiv(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            4-Year B.Tech Programs
                          </h3>
                          <div className="p-2 align-self-center">
                            {btechdiv === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>JEE (Advanced)</b>
                          </p>
                        </div>
                      </div>
                      {btechdiv === true ? (
                        <div className="eligible-option">
                          <table className="m-0">
                            <tbody id="Four_Year">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Select_All"
                                    checked={fourYearData.Select_All}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName flex-grow-1">
                                  Chemical Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Chemical_Engineering"
                                    checked={fourYearData.Chemical_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Civil Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Civil_Engineering"
                                    checked={fourYearData.Civil_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Computer Science and Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Computer_Science_and_Engineering"
                                    checked={
                                      fourYearData.Computer_Science_and_Engineering
                                    }
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Electrical Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Electrical_Engineering"
                                    checked={fourYearData.Electrical_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName flex-grow-1">
                                  Electronics & Communication Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Electronics_and_Communication_Engineering"
                                    checked={
                                      fourYearData.Electronics_and_Communication_Engineering
                                    }
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Engineering Physics
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Engineering_Physics"
                                    checked={fourYearData.Engineering_Physics}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Environmental Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Environmental_Engineering"
                                    checked={
                                      fourYearData.Environmental_Engineering
                                    }
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mechanical Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Mechanical_Engineering"
                                    checked={fourYearData.Mechanical_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mineral & Metallurgical Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Mineral_and_Metallurgical_Engineering"
                                    checked={
                                      fourYearData.Mineral_and_Metallurgical_Engineering
                                    }
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mining Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Mining_Engineering"
                                    checked={fourYearData.Mining_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mining Machinery Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Mining_Machinery_Engineering"
                                    checked={
                                      fourYearData.Mining_Machinery_Engineering
                                    }
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Petroleum Engineering
                                </td>
                                <td className="courseCheckBoxBtech">
                                  <input
                                    name="Petroleum_Engineering"
                                    checked={fourYearData.Petroleum_Engineering}
                                    onChange={handleFourYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {btechdiv === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setBtechdiv(false);
                                    handleBackClick(refbtech4year);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div ref={refdual_mtech} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (dual_mtechdiv) {
                              setdual_mtechdiv(false);
                            } else {
                              setdual_mtechdiv(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            5-Year Dual Degree/ Integrated M.Tech Programs
                          </h3>
                          <div className="p-2 align-self-center">
                            {dual_mtechdiv === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>JEE (Advanced)</b>
                          </p>
                        </div>
                      </div>
                      {dual_mtechdiv === true ? (
                        <div className="eligible-option">
                          <table className="m-0">
                            <tbody id="Five_Year">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBox5year">
                                  <input
                                    name="Select_All"
                                    checked={fiveYearData.Select_All}
                                    onChange={handleFiveYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Computer Science and Engineering
                                </td>
                                <td className="courseCheckBox5year">
                                  <input
                                    name="Computer_Science_and_Engineering"
                                    checked={
                                      fiveYearData.Computer_Science_and_Engineering
                                    }
                                    onChange={handleFiveYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mathematics & Computing
                                </td>
                                <td className="courseCheckBox5year">
                                  <input
                                    name="Mathematics_and_Computing"
                                    checked={
                                      fiveYearData.Mathematics_and_Computing
                                    }
                                    onChange={handleFiveYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Applied Geology</td>
                                <td className="courseCheckBox5year">
                                  <input
                                    name="Applied_Geology"
                                    checked={fiveYearData.Applied_Geology}
                                    onChange={handleFiveYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Applied Geophysics
                                </td>
                                <td className="courseCheckBox5year">
                                  <input
                                    name="Applied_Geophysics"
                                    checked={fiveYearData.Applied_Geophysics}
                                    onChange={handleFiveYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {dual_mtechdiv === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setdual_mtechdiv(false);
                                    handleBackClick(refdual_mtech);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="lower p-0 my-3 animate__animated animate__fadeInRight">
              <div
                onClick={() => {
                  setTimeout(() => {
                    if (pgdiv) {
                      setPgdiv(false);
                    } else {
                      setPgdiv(true);
                    }
                  }, 200);
                }}
              >
                <div>
                  <div class="ug-pg d-flex m-0 justify-content-center">
                    <div className="flex-grow-1 ">
                      <h1 className="ug-pg-h1">
                        Postgraduate
                        <span className="ug-pg-span">
                          <b> Admitted through gate, cat, jam</b>{" "}
                        </span>
                      </h1>
                    </div>
                    <div className="mx-4 p-2 align-self-center">
                      {pgdiv === true ? (
                        <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                      ) : (
                        <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {pgdiv === true ? (
                <div className="lower ">
                  <div className="animate__animated animate__zoomIn">
                    <div ref={refmtech} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (mtechdiv) {
                              setmtechdiv(false);
                            } else {
                              setmtechdiv(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            2-Year M.Tech Programs{" "}
                          </h3>
                          <div className="p-2 align-self-center">
                            {mtechdiv === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>GATE</b>
                          </p>
                        </div>
                      </div>
                      {mtechdiv === true ? (
                        <div className="eligible-option">
                          <table>
                            <tbody id="Two_Year">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Select_All"
                                    checked={twoYearData.Select_All}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Applied Geology</td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Applied_Geology"
                                    checked={twoYearData.Applied_Geology}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Applied Geophysics
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Applied_Geophysics"
                                    checked={twoYearData.Applied_Geophysics}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Chemical Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Chemical_Engineering"
                                    checked={twoYearData.Chemical_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Civil Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Civil_Engineering"
                                    checked={twoYearData.Civil_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Computer Science and Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Computer_Science_and_Engineering"
                                    checked={
                                      twoYearData.Computer_Science_and_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Data Analytics</td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Data_Analytics"
                                    checked={twoYearData.Data_Analytics}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Electrical Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Electrical_Engineering"
                                    checked={twoYearData.Electrical_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Electronics & Communication Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Electronics_and_Communication_Engineering"
                                    checked={
                                      twoYearData.Electronics_and_Communication_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Environmental Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Environmental_Engineering"
                                    checked={
                                      twoYearData.Environmental_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Industrial Engineering & Management
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Industrial_Engineering_and_Management"
                                    checked={
                                      twoYearData.Industrial_Engineering_and_Management
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mechanical Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Mechanical_Engineering"
                                    checked={twoYearData.Mechanical_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Fuel, Minerals & Metallurgical Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Fuel_Minerals_and_Metallurgical_Engineering"
                                    checked={
                                      twoYearData.Fuel_Minerals_and_Metallurgical_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mining Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Mining_Engineering"
                                    checked={twoYearData.Mining_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mining Machinery Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Mining_Machinery_Engineering"
                                    checked={
                                      twoYearData.Mining_Machinery_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Petroleum Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Petroleum_Engineering"
                                    checked={twoYearData.Petroleum_Engineering}
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Pharmaceutical Science & Engineering
                                </td>
                                <td className="courseCheckBox2MTech">
                                  <input
                                    name="Pharmaceutical_Science_and_Engineering"
                                    checked={
                                      twoYearData.Pharmaceutical_Science_and_Engineering
                                    }
                                    onChange={handleTwoYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {mtechdiv === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setmtechdiv(false);
                                    handleBackClick(refmtech);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div ref={refmba} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (mbadiv) {
                              setmbadiv(false);
                            } else {
                              setmbadiv(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            2-Year MBA Programs
                          </h3>
                          <div className="p-2 align-self-center">
                            {mbadiv === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>CAT</b>
                          </p>
                        </div>
                      </div>
                      {mbadiv === true ? (
                        <div className="eligible-option">
                          <table>
                            <tbody id="Two_Year_Mba">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Select_All"
                                    checked={twoYearMbaData.Select_All}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Business Analytics
                                </td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Business_Analytics"
                                    checked={twoYearMbaData.Business_Analytics}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Finance</td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Finance"
                                    checked={twoYearMbaData.Finance}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Human Resources</td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Human_Resources"
                                    checked={twoYearMbaData.Human_Resources}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Marketing</td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Marketing"
                                    checked={twoYearMbaData.Marketing}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Operations</td>
                                <td className="courseCheckBoxmba">
                                  <input
                                    name="Operations"
                                    checked={twoYearMbaData.Operations}
                                    onChange={handleTwoYearMbaChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {mbadiv === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setmbadiv(false);
                                    handleBackClick(refmba);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div ref={refmsc3} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (msc3div) {
                              setmsc3div(false);
                            } else {
                              setmsc3div(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            3-Year MSc.Tech Programs{" "}
                          </h3>
                          <div className="p-2 align-self-center">
                            {msc3div === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>JAM</b>
                          </p>
                        </div>
                      </div>
                      {msc3div === true ? (
                        <div className="eligible-option">
                          <table>
                            <tbody id="Three_Year">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBox3MSc">
                                  <input
                                    name="Select_All"
                                    checked={threeYearData.Select_All}
                                    onChange={handleThreeYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Applied Geology</td>
                                <td className="courseCheckBox3MSc">
                                  <input
                                    name="Applied_Geology"
                                    checked={threeYearData.Applied_Geology}
                                    onChange={handleThreeYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Applied Geophysics
                                </td>
                                <td className="courseCheckBox3MSc">
                                  <input
                                    name="Applied_Geophysics"
                                    checked={threeYearData.Applied_Geophysics}
                                    onChange={handleThreeYearChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {msc3div === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setmsc3div(false);
                                    handleBackClick(refmsc3);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                    <div ref={refmsc2} className="eligible-type my-3">
                      <div
                        onClick={() => {
                          setTimeout(() => {
                            if (msc2div) {
                              setmsc2div(false);
                            } else {
                              setmsc2div(true);
                            }
                          }, 200);
                        }}
                      >
                        <div className="eligible-heading d-flex ">
                          <h3 className="flex-grow-1 align-self-center m-0">
                            2-Year M.Sc. Programs
                          </h3>
                          <div className="p-2 align-self-center">
                            {msc2div === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className="eligible-sub-heading">
                          <p className="m-0">
                            Admitted through <b>JAM</b>
                          </p>
                        </div>
                      </div>
                      {msc2div === true ? (
                        <div className="eligible-option">
                          <table>
                            <tbody id="Two_Year_Msc">
                              <tr>
                                <td className="courseName">Select All</td>
                                <td className="courseCheckBox2Msc">
                                  <input
                                    name="Select_All"
                                    checked={twoYearMscData.Select_All}
                                    onChange={handleTwoYearMscChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Chemistry</td>
                                <td className="courseCheckBox2Msc">
                                  <input
                                    name="Chemistry"
                                    checked={twoYearMscData.Chemistry}
                                    onChange={handleTwoYearMscChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">
                                  Mathematics & Computing
                                </td>
                                <td className="courseCheckBox2Msc">
                                  <input
                                    name="Mathematics_and_Computing"
                                    checked={
                                      twoYearMscData.Mathematics_and_Computing
                                    }
                                    onChange={handleTwoYearMscChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className="courseName">Physics</td>
                                <td className="courseCheckBox2Msc">
                                  <input
                                    name="Physics"
                                    checked={twoYearMscData.Physics}
                                    onChange={handleTwoYearMscChange}
                                    type="checkbox"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="collapse-div d-flex justify-content-end">
                            {msc2div === true ? (
                              <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                <Fab
                                  color="primary"
                                  aria-label="add"
                                  onClick={() => {
                                    setmsc2div(false);
                                    handleBackClick(refmsc2);
                                  }}
                                >
                                  <ArrowUpwardIcon />
                                </Fab>
                              </Box>
                            ) : (
                              <></>
                            )}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        {/* <div className="startTextBold">
          Skill Based Hiring
        </div>
        <div className="startTextBoldSmall">
          Students with certified technical expertise in the following skills (from Coursera, Udemy etc.)
        </div>
        <table>
          <tbody id="Skill">
            <tr>
              <td className='courseName'>C, C++, Java, Python etc.</td>
              <td className="courseCheckBoxSkill"><input name="C_Cpp_Java_Python_etc" value={skillData.C_Cpp_Java_Python_etc} onChange={handleSkillChange} type="checkbox"/></td>
            </tr>
            <tr>
              <td className='courseName'>Full Stack Development (Frontend/Backend)</td>
              <td className="courseCheckBoxSkill"><input name="Full_Stack_Development_Frontend_or_Backend" value={skillData.Full_Stack_Development_Frontend_or_Backend} onChange={handleSkillChange} type="checkbox"/></td>
            </tr>
            <tr>
              <td className='courseName'>Civil Engineering</td>
              <td className="courseCheckBoxSkill"><input name="Civil_Engineering" value={skillData.Civil_Engineering} onChange={handleSkillChange} type="checkbox"/></td>
            </tr>
            <tr>
              <td className='courseName'>AI/ML/DL, Data Science</td>
              <td className="courseCheckBoxSkill"><input name="AI_ML_DL_Data_Science" value={skillData.AI_ML_DL_Data_Science} onChange={handleSkillChange} type="checkbox"/></td>
            </tr>
            <tr>
              <td className='courseName'>Business/Data Analytics, Product Management</td>
              <td className="courseCheckBoxSkill"><input name="Business_Data_Analytics_Product_Management" value={skillData.Business_Data_Analytics_Product_Management} onChange={handleSkillChange} type="checkbox"/></td>
            </tr>
          </tbody>
        </table> */}
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("1")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateJnfById}>
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
}
