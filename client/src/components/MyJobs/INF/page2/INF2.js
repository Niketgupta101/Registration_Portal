import React, { useState } from "react";
import { Form } from "reactstrap";
import "animate.css";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

import "./INF2.css";

export default function INF2({
  setPage,
  fourYearData,
  fiveYearData,
  skillData,
  handleFourYearChange,
  handleFiveYearChange,
  handleSkillChange,
  handleUpdateInfById,
}) {
  const [eligiblediv, setEligiblediv] = useState(false);
  const [btechdiv, setBtechdiv] = useState(false);
  const [dual_mtechdiv, setdual_mtechdiv] = useState(false);
  const [mbadiv, setmbadiv] = useState(false);
  const [msc2div, setmsc2div] = useState(false);
  const [msc3div, setmsc3div] = useState(false);
  const [mtechdiv, setmtechdiv] = useState(false);
  const [phddiv, setphddiv] = useState(false);
  return (
    <div className="overallDiv1">
      <Form>
        <div>
          <div className="animate__animated animate__fadeInLeft container col-lg-12 col-md-12 category p-0 my-3  ">
            <div
              className="upper"
              onClick={() => {
                setTimeout(() => {
                  if (eligiblediv) {
                    setEligiblediv(false);
                  } else {
                    setEligiblediv(true);
                  }
                }, 200);
              }}
            >
              <div>
                <div className="category-heading d-flex">
                  <header className="headerText flex-grow-1">
                    Eligible courses and disciplines
                  </header>

                  <div className="mx-4 p-2 align-self-center">
                    {eligiblediv === true ? (
                      <FaAngleDoubleUp size={30} color="rgb(60, 85, 165)" />
                    ) : (
                      <FaAngleDoubleDown size={30} color="rgb(60, 85, 165)" />
                    )}
                  </div>
                </div>
                {eligiblediv === true ? (
                  <div className="startText me-4 mb-0 animate__animated animate__fadeIn">
                    List of courses and disciplines offered at IIT (ISM) are
                    shown below. Please highlight or check by clicking as per
                    your requirement
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            {eligiblediv === true ? (
              <div className="lower p-2 ">
                <div className="p-2 mx-3 animate__animated animate__zoomIn">
                  <div className="eligible-type my-3">
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
                        <p className="m-0">Admitted through JEE (Advanced)</p>
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
                                  value={fourYearData.Select_All}
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
                                  value={fourYearData.Chemical_Engineering}
                                  onChange={handleFourYearChange}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="courseName">Civil Engineering</td>
                              <td className="courseCheckBoxBtech">
                                <input
                                  name="Civil_Engineering"
                                  value={fourYearData.Civil_Engineering}
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
                                  value={
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
                                  value={fourYearData.Electrical_Engineering}
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
                                  value={
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
                                  value={fourYearData.Engineering_Physics}
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
                                  value={fourYearData.Environmental_Engineering}
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
                                  value={fourYearData.Mechanical_Engineering}
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
                                  value={
                                    fourYearData.Mineral_and_Metallurgical_Engineering
                                  }
                                  onChange={handleFourYearChange}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="courseName">Mining Engineering</td>
                              <td className="courseCheckBoxBtech">
                                <input
                                  name="Mining_Engineering"
                                  value={fourYearData.Mining_Engineering}
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
                                  value={
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
                                  value={fourYearData.Petroleum_Engineering}
                                  onChange={handleFourYearChange}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <div className="eligible-type my-3">
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
                        <p className="m-0">Admitted through JEE (Advanced)</p>
                      </div>
                    </div>
                    {dual_mtechdiv === true ? (
                      <div className="eligible-option">
                        <table>
                          <tbody id="Five_Year">
                            <tr>
                              <td className="courseName">Select All</td>
                              <td className="courseCheckBox5year">
                                <input
                                  name="Select_All"
                                  value={fiveYearData.Select_All}
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
                                  value={
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
                                  value={fiveYearData.Mathematics_and_Computing}
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
                                  value={fiveYearData.Applied_Geology}
                                  onChange={handleFiveYearChange}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                            <tr>
                              <td className="courseName">Applied Geophysics</td>
                              <td className="courseCheckBox5year">
                                <input
                                  name="Applied_Geophysics"
                                  value={fiveYearData.Applied_Geophysics}
                                  onChange={handleFiveYearChange}
                                  type="checkbox"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
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

        <div>
          {/* <div className="startTextBold">Skill Based Hiring</div>
          <div className="startTextBoldSmall">
            Students with certified technical expertise in the following skills
            (from Coursera, Udemy etc.)
          </div>
          <table>
            <tbody id="Skill">
              <tr>
                <td className="courseName">C, C++, Java, Python etc.</td>
                <td className="courseCheckBoxSkill">
                  <input
                    name="C_Cpp_Java_Python_etc"
                    value={skillData.C_Cpp_Java_Python_etc}
                    onChange={handleSkillChange}
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <td className="courseName">
                  Full Stack Development (Frontend/Backend)
                </td>
                <td className="courseCheckBoxSkill">
                  <input
                    name="Full_Stack_Development_Frontend_or_Backend"
                    value={skillData.Full_Stack_Development_Frontend_or_Backend}
                    onChange={handleSkillChange}
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <td className="courseName">Civil Engineering</td>
                <td className="courseCheckBoxSkill">
                  <input
                    name="Civil_Engineering"
                    value={skillData.Civil_Engineering}
                    onChange={handleSkillChange}
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <td className="courseName">AI/ML/DL, Data Science</td>
                <td className="courseCheckBoxSkill">
                  <input
                    name="AI_ML_DL_Data_Science"
                    value={skillData.AI_ML_DL_Data_Science}
                    onChange={handleSkillChange}
                    type="checkbox"
                  />
                </td>
              </tr>
              <tr>
                <td className="courseName">
                  Business/Data Analytics, Product Management
                </td>
                <td className="courseCheckBoxSkill">
                  <input
                    name="Business_Data_Analytics_Product_Management"
                    value={skillData.Business_Data_Analytics_Product_Management}
                    onChange={handleSkillChange}
                    type="checkbox"
                  />
                </td>
              </tr>
            </tbody>
          </table> */}
        </div>
        <div className="flex">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("1")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateInfById}>
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
}
// export default INF2;
