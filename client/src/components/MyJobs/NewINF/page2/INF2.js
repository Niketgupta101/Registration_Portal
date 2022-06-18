import React, { useState, useRef } from "react";
import { Form } from "reactstrap";
import "animate.css";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaAngleUp } from "react-icons/fa";

import "./INF2.css";

const extractFields = (data) => {
  let fields = [];

  for (let field in data) {
    fields.push(field);
  }

  return fields;
};

export default function INF2({
  setPage,
  infData,
  handleOnChange,
  handleUpdateInf,
}) {
  // const [eligiblediv, setEligiblediv] = useState(false);
  const [btechdiv, setBtechdiv] = useState(false);
  const [doublemajor, setDoubleMajor] = useState(false);
  const [dualdegree, setDualDegree] = useState(false);
  const [dual_mtechdiv, setdual_mtechdiv] = useState(false);
  const [mbadiv, setmbadiv] = useState(false);
  const [minordiv, setminordiv] = useState(false);
  const [msc2div, setmsc2div] = useState(false);
  const [msc3div, setmsc3div] = useState(false);
  const [mtechdiv, setmtechdiv] = useState(false);
  const [ugdiv, setUgdiv] = useState(false);
  const [pgdiv, setPgdiv] = useState(false);
  const [skilldiv, setSkilldiv] = useState(false);
  // const [phddiv, setphddiv] = useState(false);

  const refbtech4year = useRef();
  const refdual_mtech = useRef();
  const refmba = useRef();
  const refmsc2 = useRef();
  const refmsc3 = useRef();
  const refmtech = useRef();
  // const refphd = useRef();
  const refdoublemajor = useRef();
  const refdualdegree = useRef();
  const refminor = useRef();

  const fourYearFields = extractFields(infData.Four_Year_Btech);
  const fiveYearIntFields = extractFields(infData.Five_Year_Integrated);
  const twoYearMtechFields = extractFields(infData.Two_Year_Mtech);
  const threeYearMscFields = extractFields(infData.Three_Year_Msc);
  const twoYearMbaFields = extractFields(infData.Two_Year_MBA);
  const twoYearMscFields = extractFields(infData.Two_Year_Msc);
  const dualDegreeFields = extractFields(infData.Five_Year_Dual_Degree);
  const doubleMajorFields = extractFields(infData.Double_Major);
  const minorFields = extractFields(infData.Minor);
  const skillBasedFields = extractFields(infData.Skill_Based);

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
                  <div className="ug-pg d-flex m-0 justify-content-center bg-transparent">
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
                    {infData.Intern_Profile.IP_Internship_Duration ===
                    "July-Dec 2023" ? (
                      <></>
                    ) : (
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
                                {fourYearFields &&
                                  fourYearFields.map((field) => (
                                    <tr>
                                      <td className="courseName">
                                        {field.split("_").map((word) => (
                                          <>{word !== "FYB" && word + " "}</>
                                        ))}
                                      </td>
                                      <td className="courseCheckBoxBtech">
                                        <input
                                          name={field}
                                          checked={
                                            infData.Four_Year_Btech[field]
                                          }
                                          onChange={(e) =>
                                            handleOnChange(
                                              "Four_Year_Btech",
                                              e.target.name,
                                              e.target.checked,
                                              "FYB_Select_All"
                                            )
                                          }
                                          type="checkbox"
                                        />
                                      </td>
                                    </tr>
                                  ))}
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
                    )}

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
                            5-Year Integrated M.Tech Programs
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
                              {fiveYearIntFields &&
                                fiveYearIntFields.map((field) => (
                                  <tr>
                                    <td className="courseName">
                                      {field.split("_").map((word) => (
                                        <>{word !== "FYI" && word + " "}</>
                                      ))}
                                    </td>
                                    <td className="courseCheckBox5year">
                                      <input
                                        name={field}
                                        checked={
                                          infData.Five_Year_Integrated[field]
                                        }
                                        onChange={(e) =>
                                          handleOnChange(
                                            "Five_Year_Integrated",
                                            e.target.name,
                                            e.target.checked,
                                            "FYI_Select_All"
                                          )
                                        }
                                        type="checkbox"
                                      />
                                    </td>
                                  </tr>
                                ))}
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
                    {infData.Intern_Profile.IP_Internship_Duration ===
                    "July-Dec 2023" ? (
                      <></>
                    ) : (
                      <>
                        <div
                          ref={refdoublemajor}
                          className="eligible-type my-3"
                        >
                          <div
                            onClick={() => {
                              setTimeout(() => {
                                if (doublemajor) {
                                  setDoubleMajor(false);
                                } else {
                                  setDoubleMajor(true);
                                }
                              }, 200);
                            }}
                          >
                            <div className="eligible-heading d-flex ">
                              <h3 className="flex-grow-1 align-self-center m-0">
                                5-Year Double Major
                              </h3>
                              <div className="p-2 align-self-center">
                                {doublemajor === true ? (
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
                          {doublemajor === true ? (
                            <div className="eligible-option">
                              <table className="m-0">
                                <tbody id="Five_Year">
                                  {doubleMajorFields &&
                                    doubleMajorFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>{word !== "DM" && word + " "}</>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={
                                              infData.Double_Major[field]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Double_Major",
                                                e.target.name,
                                                e.target.checked,
                                                "DM_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                              <div className="collapse-div d-flex justify-content-end">
                                {doublemajor === true ? (
                                  <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                    <Fab
                                      color="primary"
                                      aria-label="add"
                                      onClick={() => {
                                        setDoubleMajor(false);
                                        handleBackClick(doublemajor);
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
                        <div ref={refdualdegree} className="eligible-type my-3">
                          <div
                            onClick={() => {
                              setTimeout(() => {
                                if (dualdegree) {
                                  setDualDegree(false);
                                } else {
                                  setDualDegree(true);
                                }
                              }, 200);
                            }}
                          >
                            <div className="eligible-heading d-flex ">
                              <h3 className="flex-grow-1 align-self-center m-0">
                                5-Year Dual Degree Programs
                              </h3>
                              <div className="p-2 align-self-center">
                                {dualdegree === true ? (
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
                          {dualdegree === true ? (
                            <div className="eligible-option">
                              <table className="m-0">
                                <tbody id="Five_Year">
                                  {dualDegreeFields &&
                                    dualDegreeFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>{word !== "FYDD" && word + " "}</>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={
                                              infData.Five_Year_Dual_Degree[
                                                field
                                              ]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Five_Year_Dual_Degree",
                                                e.target.name,
                                                e.target.checked,
                                                "FYDD_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
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
                        {/* <div ref={refminor} className="eligible-type my-3">
                          <div
                            onClick={() => {
                              setTimeout(() => {
                                if (minordiv) {
                                  setminordiv(false);
                                } else {
                                  setminordiv(true);
                                }
                              }, 200);
                            }}
                          >
                            <div className="eligible-heading d-flex ">
                              <h3 className="flex-grow-1 align-self-center m-0">
                                Minor Programs
                              </h3>
                              <div className="p-2 align-self-center">
                                {minordiv === true ? (
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
                          {minordiv === true ? (
                            <div className="eligible-option">
                              <table className="m-0">
                                <tbody id="Five_Year">
                                  {minorFields &&
                                    minorFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>
                                              {word !== "MINOR" && word + " "}
                                            </>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={infData.Minor[field]}
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Minor",
                                                e.target.name,
                                                e.target.checked,
                                                "MINOR_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                              <div className="collapse-div d-flex justify-content-end">
                                {minordiv === true ? (
                                  <Box sx={{ "& > :not(style)": { m: 1 } }}>
                                    <Fab
                                      color="primary"
                                      aria-label="add"
                                      onClick={() => {
                                        setminordiv(false);
                                        handleBackClick(refminor);
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
                        </div> */}
                      </>
                    )}
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
                  <div className="ug-pg d-flex m-0 justify-content-center bg-transparent">
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
                              {twoYearMtechFields &&
                                twoYearMtechFields.map((field) => (
                                  <tr>
                                    <td className="courseName">
                                      {field.split("_").map((word) => (
                                        <>{word !== "TYM" && word + " "}</>
                                      ))}
                                    </td>
                                    <td className="courseCheckBox5year">
                                      <input
                                        name={field}
                                        checked={infData.Two_Year_Mtech[field]}
                                        onChange={(e) =>
                                          handleOnChange(
                                            "Two_Year_Mtech",
                                            e.target.name,
                                            e.target.checked,
                                            "TYM_Select_All"
                                          )
                                        }
                                        type="checkbox"
                                      />
                                    </td>
                                  </tr>
                                ))}
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
                    {infData.Intern_Profile.IP_Internship_Duration ===
                    "July-Dec 2023" ? (
                      <>
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
                            <div className="eligible-option mt-3">
                              <table>
                                <tbody id="Two_Year_Mba">
                                  {
                                    twoYearMbaFields[1] && (
                                      <tr>
                                        <td className="courseName">
                                          {twoYearMbaFields[1]
                                            .split("_")
                                            .map((word) => (
                                              <>
                                                {word !== "TYMB" && word + " "}
                                              </>
                                            ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={twoYearMbaFields[1]}
                                            checked={
                                              infData.Two_Year_MBA[
                                                twoYearMbaFields[1]
                                              ]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Two_Year_MBA",
                                                e.target.name,
                                                e.target.checked,
                                                "TYMB_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    )

                                    // twoYearMbaFields.map((field) => {
                                    //   field === "TYMB_Business_Analytics" ? (
                                    //     <tr>
                                    //       <td className="courseName">
                                    //         {field.split("_").map((word) => (
                                    //           <>
                                    //             {word !== "TYMB" && word + " "}
                                    //           </>
                                    //         ))}
                                    //       </td>
                                    //       <td className="courseCheckBox5year">
                                    //         <input
                                    //           name={field}
                                    //           checked={
                                    //             infData.Two_Year_MBA[field]
                                    //           }
                                    //           onChange={(e) =>
                                    //             handleOnChange(
                                    //               "Two_Year_MBA",
                                    //               e.target.name,
                                    //               e.target.checked,
                                    //               "TYMB_Select_All"
                                    //             )
                                    //           }
                                    //           type="checkbox"
                                    //         />
                                    //       </td>
                                    //     </tr>
                                  }
                                </tbody>
                              </table>
                            </div>
                          ) : (
                            <div></div>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
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
                                  {twoYearMbaFields &&
                                    twoYearMbaFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>{word !== "TYMB" && word + " "}</>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={
                                              infData.Two_Year_MBA[field]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Two_Year_MBA",
                                                e.target.name,
                                                e.target.checked,
                                                "TYMB_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
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
                                  {threeYearMscFields &&
                                    threeYearMscFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>{word !== "TMS" && word + " "}</>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={
                                              infData.Three_Year_Msc[field]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Three_Year_Msc",
                                                e.target.name,
                                                e.target.checked,
                                                "TMS_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
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
                              <table className="m-0">
                                <tbody id="Five_Year">
                                  {twoYearMscFields &&
                                    twoYearMscFields.map((field) => (
                                      <tr>
                                        <td className="courseName">
                                          {field.split("_").map((word) => (
                                            <>
                                              {word !== "TYMSC" && word + " "}
                                            </>
                                          ))}
                                        </td>
                                        <td className="courseCheckBox5year">
                                          <input
                                            name={field}
                                            checked={
                                              infData.Two_Year_Msc[field]
                                            }
                                            onChange={(e) =>
                                              handleOnChange(
                                                "Two_Year_Msc",
                                                e.target.name,
                                                e.target.checked,
                                                "TYMSC_Select_All"
                                              )
                                            }
                                            type="checkbox"
                                          />
                                        </td>
                                      </tr>
                                    ))}
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
                      </>
                    )}

                    {/* <div ref={refmsc2} className='eligible-type my-3'>
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
                        <div className='eligible-heading d-flex '>
                          <h3 className='flex-grow-1 align-self-center m-0'>
                            2-Year M.Sc. Programs
                          </h3>
                          <div className='p-2 align-self-center'>
                            {msc2div === true ? (
                              <FaAngleDoubleUp size={20} />
                            ) : (
                              <FaAngleDoubleDown size={20} />
                            )}
                          </div>
                        </div>

                        <div className='eligible-sub-heading'>
                          <p className='m-0'>
                            Admitted through <b>JAM</b>
                          </p>
                        </div>
                      </div>
                      {msc2div === true ? (
                        <div className='eligible-option'>
                          <table>
                            <tbody id='Two_Year_Msc'>
                              <tr>
                                <td className='courseName'>Select All</td>
                                <td className='courseCheckBox2Msc'>
                                  <input
                                    name='Select_All'
                                    checked={twoYearMscData.Select_All}
                                    onChange={handleTwoYearMscChange}
                                    type='checkbox'
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className='courseName'>Chemistry</td>
                                <td className='courseCheckBox2Msc'>
                                  <input
                                    name='Chemistry'
                                    checked={twoYearMscData.Chemistry}
                                    onChange={handleTwoYearMscChange}
                                    type='checkbox'
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className='courseName'>
                                  Mathematics & Computing
                                </td>
                                <td className='courseCheckBox2Msc'>
                                  <input
                                    name='Mathematics_and_Computing'
                                    checked={
                                      twoYearMscData.Mathematics_and_Computing
                                    }
                                    onChange={handleTwoYearMscChange}
                                    type='checkbox'
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td className='courseName'>Physics</td>
                                <td className='courseCheckBox2Msc'>
                                  <input
                                    name='Physics'
                                    checked={twoYearMscData.Physics}
                                    onChange={handleTwoYearMscChange}
                                    type='checkbox'
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className='collapse-div d-flex justify-content-end'>
                            {msc2div === true ? (
                              <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <Fab
                                  color='primary'
                                  aria-label='add'
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
                    </div> */}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="upper py-1">
            <div>
              <div className="category-heading ">
                <header className="headerText me-3">Skill Based Hiring</header>
              </div>
              <div className="startText mx-2 mb-2">
                <small className=" animate__animated animate__fadeIn">
                  Students with certified technical expertise in the following
                  skills (from Coursera, Udemy etc.)
                </small>
              </div>
            </div>
          </div>
          <div className="eligible-option">
            <table>
              <tbody id="Skill">
                {skillBasedFields &&
                  skillBasedFields.map((field) => (
                    <tr>
                      <td className="courseName">
                        {field.split("_").map((word) => (
                          <>{word !== "SB" && word + " "}</>
                        ))}
                      </td>
                      <td className="courseCheckBox5year">
                        <input
                          name={field}
                          checked={infData.Skill_Based[field]}
                          onChange={(e) =>
                            handleOnChange(
                              "Skill_Based",
                              e.target.name,
                              e.target.checked,
                              "SB_Select_All"
                            )
                          }
                          type="checkbox"
                        />
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <button
            className="submit_btn"
            onClick={(e) => e.preventDefault() / setPage("1")}
          >
            Back
          </button>
          <button className="submit_btn" onClick={handleUpdateInf}>
            Save and Continue
          </button>
        </div>
      </Form>
    </div>
  );
}
// export default INF2;
