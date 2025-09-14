import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    full_name: {
      type: String,
      trim: true,
      required: true,
    },
    email_id: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
    phone_no: {
      type: Number,
      unique: true,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },

    professionCreated: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "profession",
      },
    ],
  },
  { timestamps: true }
);

const admin = mongoose.model("admin", adminSchema);

export default admin;
