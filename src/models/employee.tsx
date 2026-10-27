

import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true
  },

  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true
  },

  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^\d{10,12}$/, "Mobile number must contain 10 to 12 digits"]
  },

  address: {
    street: {
      type: String,
      required: [true, "Street address is required"],
      trim: true
    },

    city: {
      type: String,
      required: [true, "City is required"],
      trim: true
    },

    state: {
      type: String,
      required: [true, "State is required"],
      trim: true
    },

    zipCode: {
      type: String,
      required: [true, "ZIP code is required"],
      trim: true
    },

    country: {
      type: String,
      required: [true, "Country is required"],
      trim: true
    }
  },

  password: {
    type: String,
    required: [true, "Password is required"]
  },

  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ["Admin", "HR", "Employee"]
  }
});

export default mongoose.model("Employee", employeeSchema);
