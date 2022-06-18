const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompanyOverviewSchema = {
  CO_Name_Of_The_Company: { type: String, default: "" },
  CO_Category: { type: String, default: "" },
  CO_Sector: { type: String, default: "" },
  CO_About: { type: String, default: "" },
  CO_Website: { type: String, default: "" },
};

const InternProfileSchema = {
  IP_Internship_Duration: { type: String, default: `May-July 2023` },
  IP_Job_Designation: { type: String, default: "" },
  IP_Job_Description: { type: String, default: "" },
  IP_Mode_Of_Internship: { type: String, default: "Virtual" },
  IP_Place_Of_Posting: { type: String, default: "" },
};

const StipendDetailsSchema = {
  SD_Salary_Per_Month: { type: String, default: "" },
  SD_PPO_provision_on_performance_basis: { type: String, default: "Yes" },
  SD_CTC: { type: String, default: "" },
};

const FourYearBtechSchema = {
  FYB_Select_All: { type: Boolean, default: false },
  FYB_Chemical_Engineering: { type: Boolean, default: false },
  FYB_Civil_Engineering: { type: Boolean, default: false },
  FYB_Computer_Science_and_Engineering: { type: Boolean, default: false },
  FYB_Electrical_Engineering: { type: Boolean, default: false },
  FYB_Electronics_and_Communication_Engineering: {
    type: Boolean,
    default: false,
  },
  FYB_Engineering_Physics: { type: Boolean, default: false },
  FYB_Environmental_Engineering: { type: Boolean, default: false },
  FYB_Mechanical_Engineering: { type: Boolean, default: false },
  FYB_Mineral_and_Metallurgical_Engineering: {
    type: Boolean,
    default: false,
  },
  FYB_Mining_Engineering: { type: Boolean, default: false },
  FYB_Mining_Machinery_Engineering: { type: Boolean, default: false },
  FYB_Petroleum_Engineering: { type: Boolean, default: false },
};

const FiveYearIntegratedSchema = {
  FYI_Select_All: { type: Boolean, default: false },
  // FYI_Computer_Science_and_Engineering: { type: Boolean, default: false },
  FYI_Mathematics_and_Computing: { type: Boolean, default: false },
  FYI_Applied_Geology: { type: Boolean, default: false },
  FYI_Applied_Geophysics: { type: Boolean, default: false },
};

const MinorSchema = {
  MINOR_Select_All: { type: Boolean, default: false },
  MINOR_Computational_Fluid_Dynamics: { type: Boolean, default: false },
  MINOR_Data_Science: { type: Boolean, default: false },
  MINOR_Electrical_Technology: { type: Boolean, default: false },
  MINOR_Embedded_System_Design: { type: Boolean, default: false },
  MINOR_Environmental_Management: { type: Boolean, default: false },
  MINOR_Exploration_Geology: { type: Boolean, default: false },
  MINOR_Exploration_Geophysics: { type: Boolean, default: false },
  MINOR_Financial_Management: { type: Boolean, default: false },
  MINOR_Operations_Management: { type: Boolean, default: false },
  MINOR_High_Energy_Physics: { type: Boolean, default: false },
  MINOR_Infrastructure_Engineering: { type: Boolean, default: false },
  MINOR_Manufacturing: { type: Boolean, default: false },
  MINOR_Marketing_Management: { type: Boolean, default: false },
  MINOR_Material_Handling_Engineering: { type: Boolean, default: false },
  MINOR_Materials_Science: { type: Boolean, default: false },
  MINOR_Mathematics_and_Statistics: { type: Boolean, default: false },
  MINOR_Mining_Methods_and_Safety: { type: Boolean, default: false },
  MINOR_Nanotechnology: { type: Boolean, default: false },
  MINOR_Petroleum_Production_Operations: { type: Boolean, default: false },
  MINOR_Robotics: { type: Boolean, default: false },
  MINOR_Separation_and_Purification_Technology: {
    type: Boolean,
    default: false,
  },
};

const TwoYearMtechSchema = {
  TYM_Select_All: { type: Boolean, default: false },
  TYM_Engineering_Geology: { type: Boolean, default: false },
  TYM_Applied_Geophysics: { type: Boolean, default: false },
  TYM_Chemical_Engineering: { type: Boolean, default: false },
  TYM_Civil_Engineering: { type: Boolean, default: false },
  TYM_Computer_Science_and_Engineering: { type: Boolean, default: false },
  TYM_Data_Analytics: { type: Boolean, default: false },
  TYM_Electrical_Engineering: { type: Boolean, default: false },
  TYM_Electronics_and_Communication_Engineering: {
    type: Boolean,
    default: false,
  },
  TYM_Environmental_Engineering: { type: Boolean, default: false },
  TYM_Industrial_Engineering_and_Management: {
    type: Boolean,
    default: false,
  },
  TYM_Mechanical_Engineering: { type: Boolean, default: false },
  TYM_Fuel_Minerals_and_Metallurgical_Engineering: {
    type: Boolean,
    default: false,
  },
  TYM_Mining_Engineering: { type: Boolean, default: false },
  TYM_Mining_Machinery_Engineering: { type: Boolean, default: false },
  TYM_Petroleum_Engineering: { type: Boolean, default: false },
  TYM_Pharmaceutical_Science_and_Engineering: {
    type: Boolean,
    default: false,
  },
  TYM_Geo_Exploration: { type: Boolean, default: false },
  TYM_Geomatics: { type: Boolean, default: false },
  TYM_Tunneling_and_Underground_Space_Technology: {
    type: Boolean,
    default: false,
  },
};

const ThreeYearMscSchema = {
  TMS_Select_All: { type: Boolean, default: false },
  TMS_Applied_Geology: { type: Boolean, default: false },
  TMS_Applied_Geophysics: { type: Boolean, default: false },
};

const TwoYearMBASchema = {
  TYMB_Select_All: { type: Boolean, default: false },
  TYMB_Business_Analytics: { type: Boolean, default: false },
  TYMB_Finance: { type: Boolean, default: false },
  TYMB_Human_Resources: { type: Boolean, default: false },
  TYMB_Marketing: { type: Boolean, default: false },
  TYMB_Operations: { type: Boolean, default: false },
};

const TwoYearMscSchema = {
  TYMSC_Select_All: { type: Boolean, default: false },
  TYMSC_Chemistry: { type: Boolean, default: false },
  TYMSC_Mathematics_and_Computing: { type: Boolean, default: false },
  TYMSC_Physics: { type: Boolean, default: false },
};

const FiveYearDualDegreeSchema = {
  FYDD_Select_All: { type: Boolean, default: false },
  FYDD_Environmental_Engineering_BTech_with_Environmental_Engineering_MTech: {
    type: Boolean,
    default: false,
  },
  FYDD_Chemical_Engineering_BTech_with_Computer_Science_and_Engineering_MTech: {
    type: Boolean,
    default: false,
  },
  FYDD_Mechanical_Engineering_BTech_with_Computer_Science_and_Engineering_MTech:
    { type: Boolean, default: false },
  FYDD_Environmental_Engineering_BTech_with_Computer_Science_and_Engineering_MTech:
    { type: Boolean, default: false },
  FYDD_Mathematics_and_Computing_Integrated_MTech_with_MBA: {
    type: Boolean,
    default: false,
  },
  FYDD_Civil_Engineering_BTech_with_Computer_Science_and_Engineering_MTech: {
    type: Boolean,
    default: false,
  },
};

const DoubleMajorSchema = {
  DM_Select_All: { type: Boolean, default: false },
  DM_Computer_Science_and_Engineering_Double_Major: {
    type: Boolean,
    default: false,
  },
};

const SkillBasedSchema = {
  SB_C_or_CPP_or_Java_or_Python_etc: { type: Boolean, default: false },
  SB_Full_Stack_Development_Frontend_or_Backend: {
    type: Boolean,
    default: false,
  },
  SB_AI_or_ML_or_DL_or_Data_Science: { type: Boolean, default: false },
  SB_Business_or_Data_Analytics_or_Product_Management: {
    type: Boolean,
    default: false,
  },
  SB_Cyber_Security: { type: Boolean, default: false },
  SB_Ethical_Hacking: { type: Boolean, default: false },
  SB_Mobile_Development: { type: Boolean, default: false },
  SB_Product_Analyst: { type: Boolean, default: false },
  SB_Quant_Researcher_or_Trading_or_Investment_and_portfolio_management_or_Company_Valuation_and_financial_modelling_or_Financial_Risk_management_or_Investment_Banking_etc:
    { type: Boolean, default: false },
  SB_Other_Skills: { type: Boolean, default: false },
};

const SelectionProcedureSchema = {
  SPS_Total_Number_Of_Rounds: { type: Number, default: 0 },
  SPS_Number_Of_Offers: { type: String, default: "" },
  SPS_Eligibility_Criteria: { type: String, default: "NA" },
  SPS_Pre_Placement_Talk_Mode: { type: String, default: "" },
  SPS_Pre_Placement_Talk_Date: { type: String, default: "" },
  SPS_Resume_Shortlisting_Mode: { type: String, default: "" },
  SPS_Resume_Shortlisting_Date: { type: String, default: "" },
  SPS_Online_Written_Test_Mode: { type: String, default: "" },
  SPS_Online_Written_Test_Date: { type: String, default: "" },
  SPS_Group_Discussion_Mode: { type: String, default: "" },
  SPS_Group_Discussion_Date: { type: String, default: "" },
  SPS_Personal_Interview_Mode: { type: String, default: "" },
  SPS_Personal_Interview_Date: { type: String, default: "" },
  SPS_Any_Other_Rounds_Mode: { type: String, default: "" },
  SPS_Any_Other_Rounds_Date: { type: String, default: "" },
  SPS_OtherInformation: { type: String, default: "" },
};

const PrimaryHrSchema = {
  PH_Name: { type: String, default: "" },
  PH_Email: { type: String, default: "" },
  PH_Mobile: { type: String, default: "" },
};

const SecondaryHrSchema = {
  SH_Name: { type: String, default: "" },
  SH_Email: { type: String, default: "" },
  SH_Mobile: { type: String, default: "" },
};

// --------------------------------------------------------------------------------------------------

const NewInfSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: "User" },
    Company_Overview: CompanyOverviewSchema,
    Intern_Profile: InternProfileSchema,
    Stipend_Details: StipendDetailsSchema,
    Four_Year_Btech: FourYearBtechSchema,
    Five_Year_Integrated: FiveYearIntegratedSchema,
    Two_Year_Mtech: TwoYearMtechSchema,
    Three_Year_Msc: ThreeYearMscSchema,
    Two_Year_MBA: TwoYearMBASchema,
    Minor: MinorSchema,
    Two_Year_Msc: TwoYearMscSchema,
    Five_Year_Dual_Degree: FiveYearDualDegreeSchema,
    Double_Major: DoubleMajorSchema,
    Skill_Based: SkillBasedSchema,
    Selection_Procedure: SelectionProcedureSchema,
    Primary_Hr: PrimaryHrSchema,
    Secondary_Hr: SecondaryHrSchema,

    adminPreviewLink: String,
    adminDownloadLink: String,
    studentPreviewLink: String,
    studentDownloadLink: String,
    status: { type: String, default: "incomplete" },
    isIntern: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------------------------------------------------------

const NewInf = mongoose.model("NewInf", NewInfSchema);

// --------------------------------------------------------------------------------------------------

module.exports = {
  NewInf,
};
