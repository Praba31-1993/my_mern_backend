
import type { Request, Response } from "express";
import {createEmployee} from "../../services/employeeServices.js";

const registerController = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      password,
      confirmPassword
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({
        message: "Passwords do not match"
      });
    }

    const employee = await createEmployee(req.body);

    return res.status(201).json({
      message: "Employee registered successfully",
      employee
    });
  } catch (error: any) {
    if (error.message === "Email already registered") {
      return res.status(409).json({
        message: error.message
      });
    }

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: error.message
      });
    }


    return res.status(500).json({
      message: "Internal server error"
    });
  }
};

export default registerController;
