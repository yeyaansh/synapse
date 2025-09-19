import mongoose, {Schema } from "mongoose";

// --- Sub-schema for RIASEC interests ---
const interestsRiasecSchema = new Schema(
  {
    realistic: { type: Number, default: 0 },
    investigative: { type: Number, default: 0 },
    artistic: { type: Number, default: 0 },
    social: { type: Number, default: 0 },
    enterprising: { type: Number, default: 0 },
    conventional: { type: Number, default: 0 },
  },
  { _id: false }
); // _id is not needed for sub-documents

// --- Sub-schema for TWA work values ---
const workValuesTwaSchema = new Schema(
  {
    achievement: { type: Number, default: 0 },
    independence: { type: Number, default: 0 },
    recognition: { type: Number, default: 0 },
    relationships: { type: Number, default: 0 },
    support: { type: Number, default: 0 },
    working_conditions: { type: Number, default: 0 },
  },
  { _id: false }
);

// --- Sub-schema for soft skills ---
const softSkillsSchema = new Schema(
  {
    problem_solving: { type: Number, default: 0 },
    communication: { type: Number, default: 0 },
    adaptability: { type: Number, default: 0 },
    collaboration: { type: Number, default: 0 },
    initiative: { type: Number, default: 0 },
  },
  { _id: false }
);

// --- Sub-schema for the main assessment profile ---
const assessmentProfileSchema = new Schema(
  {
    assessmentVersion: { type: String },
    completedAt: { type: Date, default:Date.now},
    profileVector: {
      interests_riasec: interestsRiasecSchema,
      work_values_twa: workValuesTwaSchema,
      soft_skills: softSkillsSchema,
    },
  },
  { _id: false }
);

// --- Sub-schema for future expansion data ---
const futureProfileDataSchema = new Schema(
  {
    hard_skills: {
      type: Map,
      of: Number, // This says the values of the map must be numbers

      //e.g. of how it will look
      // python_programming: Number,
      // statistical_analysis: Number,
      // machine_learning: Number,
    },
    user_context: {
      education_level: String,
      preferred_location: String,
      course_budget: String,
    },
  },
  { _id: false }
);

const userSchema = new Schema(
  {
    full_name: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    gender:{
      type:String,
      enum:['male','female'],
      required:true,
      trim:true,
      lowercase:true,
    }
    ,
    email_id: {
      type: String,
      unique: true,
      required: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    assessmentProfile: assessmentProfileSchema,

    // 3. Application-Specific Data
    hasCompletedAssessment: {
      type: Boolean,
      default: false,
    },

    careerRecommendations: [
      {
        // profession_id of suggested professions
        type: mongoose.Schema.Types.ObjectId,
        ref:'profession'
      },
    ],

    currentProfession: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'profession'
    },

    futureProfileData: futureProfileDataSchema,
    phone_no: {
      type: Number,
      // unique: true,
    },
    role:{
      type:String,
      enum:["user"],
      default:"user"
    }
  },
  { timestamps: true }
);


const user = mongoose.model('user',userSchema);
export default user;