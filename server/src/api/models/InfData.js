const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompanyOverviewSchema = {
  CO_Name_Of_The_Company: { type: String, default: '' },
  CO_Category_Or_Sector: { type: String, default: '' },
  CO_Category: { type: String, default: '' },
  CO_Sector: { type: String, default: '' },
  CO_About: { type: String, default: '' },
  CO_Website: { type: String, default: '' },
};

const InternProfileSchema = {
  IP_Internship_Duration: { type: String, default: `May-July 2023` },
  IP_Job_Designation: { type: String, default: '' },
  IP_Job_Description: { type: String, default: '' },
  IP_Mode_Of_Internship: { type: String, default: 'Virtual' },
  IP_Place_Of_Posting: { type: String, default: '' },
};

const StipendDetailsSchema = {
  SD_Salary_Per_Month: { type: String, default: '' },
  SD_Salary_Unit: { type: String, default: '' },
  SD_PPO_provision_on_performance_basis: { type: String, default: 'Yes' },
  SD_CTC: { type: String, default: '' },
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
  FYI_Computer_Science_and_Engineering: { type: Boolean, default: false },
  FYI_Mathematics_and_Computing: { type: Boolean, default: false },
  FYI_Applied_Geology: { type: Boolean, default: false },
  FYI_Applied_Geophysics: { type: Boolean, default: false },
};

const TwoYearMtechSchema = {
  TWM_Select_All: { type: Boolean, default: false },
  TWM_Applied_Geology: { type: Boolean, default: false },
  TWM_Applied_Geophysics: { type: Boolean, default: false },
  TWM_Chemical_Engineering: { type: Boolean, default: false },
  TWM_Civil_Engineering: { type: Boolean, default: false },
  TWM_Computer_Science_and_Engineering: { type: Boolean, default: false },
  TWM_Data_Analytics: { type: Boolean, default: false },
  TWM_Electrical_Engineering: { type: Boolean, default: false },
  TWM_Electronics_and_Communication_Engineering: {
    type: Boolean,
    default: false,
  },
  TWM_Environmental_Engineering: { type: Boolean, default: false },
  TWM_Industrial_Engineering_and_Management: {
    type: Boolean,
    default: false,
  },
  TWM_Mechanical_Engineering: { type: Boolean, default: false },
  TWM_Fuel_Minerals_and_Metallurgical_Engineering: {
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
};

const ThreeYearMscSchema = {
  TYM_Select_All: { type: Boolean, default: false },
  TYM_Applied_Geology: { type: Boolean, default: false },
  TYM_Applied_Geophysics: { type: Boolean, default: false },
};

const TwoYearMBASchema = {
  TYMB_Select_All: { type: Boolean, default: false },
  TYMB_Business_Analytics: { type: Boolean, default: false },
  TYMB_Finance: { type: Boolean, default: false },
  TYMB_Human_Resources: { type: Boolean, default: false },
  TYMB_Marketing: { type: Boolean, default: false },
  TYMB_Operations: { type: Boolean, default: false },
};

const DualDegreeSchema = {
  DD_Select_All: { type: Boolean, default: false },
  DD_Computer_Science_and_Engineering_Dual_Degree: {
    type: Boolean,
    default: false,
  },
  DD_Environmental_Science_and_Engineering_Dual_Degree: {
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
  SB_C_Cpp_Java_Python_etc: { type: Boolean, default: false },
  SB_Full_Stack_Development_Frontend_or_Backend: {
    type: Boolean,
    default: false,
  },
  SB_Civil_Engineering: { type: Boolean, default: false },
  SB_AI_ML_DL_Data_Science: { type: Boolean, default: false },
  SB_Business_Data_Analytics_Product_Management: {
    type: Boolean,
    default: false,
  },
};

const SelectionProcedureSchema = {
  SPS_Resume_Shortlisting: { type: Boolean, default: false },
  SPS_Type_Of_Test: [String],
  SPS_Other_Qualification_Rounds: [String],
  SPS_Total_Number_Of_Rounds: { type: Number, default: 0 },
  SPS_No_Of_Offers: { type: String, default: 'NA' },
  SPS_Eligibility_Criteria: { type: String, default: 'NA' },
};

const PrimaryHrSchema = {
  PH_Name: { type: String, default: '' },
  PH_Email: { type: String, default: '' },
  PH_Mobile: { type: String, default: '' },
};

const SecondaryHrSchema = {
  SH_Name: { type: String, default: '' },
  SH_Email: { type: String, default: '' },
  SH_Mobile: { type: String, default: '' },
};

// --------------------------------------------------------------------------------------------------

const NewInfSchema = new Schema(
  {
    userId: { type: Schema.ObjectId, ref: 'User' },
    Company_Overview: CompanyOverviewSchema,
    Intern_Profile: InternProfileSchema,
    Stipend_Details: StipendDetailsSchema,
    Four_Year_Btech: FourYearBtechSchema,
    Five_Year_Integrated: FiveYearIntegratedSchema,
    Two_Year_Mtech: TwoYearMtechSchema,
    Three_Year_Msc: ThreeYearMscSchema,
    Two_Year_MBA: TwoYearMBASchema,
    Dual_Degree: DualDegreeSchema,
    Double_Major: DoubleMajorSchema,
    Skill_Based: SkillBasedSchema,
    Selection_Procedure: SelectionProcedureSchema,
    Primary_Hr: PrimaryHrSchema,
    Secondary_Hr: SecondaryHrSchema,

    adminPreviewLink: String,
    adminDownloadLink: String,
    studentPreviewLink: String,
    studentDownloadLink: String,
    status: { type: String, default: 'incomplete' },
    isIntern: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// --------------------------------------------------------------------------------------------------

const NewInf = mongoose.model('NewInf', NewInfSchema);

// --------------------------------------------------------------------------------------------------

module.exports = {
  NewInf,
};
