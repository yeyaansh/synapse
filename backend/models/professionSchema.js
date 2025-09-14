import mongoose, { Mongoose, Schema } from "mongoose";
import SKILLS from "./list_of_skills";

const careerDataSchema = new Schema(
  {
    careerId: {
      type: String,
      lowercase: true,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    avgSalaryRange: {
      type: String,
      required: true,
    },
    growthOutlook: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      enum: ["high", "moderate"],
    },
    requiredSkills: {
      type: [String],
      enum:SKILLS,
      lowercase: true,
      required: true,
      trim: true,
      validate: {
        validator: function (arr) {
          return arr.length > 0;
        },
        message: "Atleast one Skill is required!",
      },
    },
    workStyle: {
      type: String,
    },
    pace: {
      type: String,
    },
    primaryValue: {
      type: String,
    },
    microProjectPrompts: {
      type: [String],
      required: true,
      lowercase: true,
      trim: true,
    },
    skills: [
      {
        skillId: {
          type: String,
          lowercase: true,
        },
        name: String,
        type: {
          type: String,
          lowercase: true,
          trim: true,
          enum: ["hard", "soft"],
        },
      },
    ],
    learningResources: {
      type:[{
        orderArranged: Number,
        resourceId: {
          type: String,
          lowercase: true,
          trim: true,
        },
        title: String,
        language: [{
          type:String,
                    trim:true,
          lowercase:true,
          enum: ["english", "hindi", "hinglish"]
        }],
        url: String,
        provider: String,
        cost: String,
        associatedSkill: String,
      }],
      required:true,
      validate:{
        validator:function(arr)
        {
          return Array.isArray(arr) && arr.length>0
        },
        message:"Atleast one learning resource is required"
      }
    },
    microProjects: [
      {
        projectId: {
          type: String,
          lowercase: true,
          trim: true,
        },
        title: String,
        prompt: String,
        associatedCareer: [String],
        projectResources: [
          {
            type: {
              type: String,
              trim: true,
              lowercase: true,
              enum: ["dataset", "tutorial", "github_repo"],
            },
            orderArranged: Number,
            title: String,
            url: String,
            description: String,
          },
        ],
      },
    ],
  },
  {
    _id: false,
  }
);

const professionSchema = new Schema({
  careerData: careerDataSchema,
  created_by:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'admin'
  }
},{timestamps:true});


const profession = mongoose.model('profession',professionSchema)

export default profession;