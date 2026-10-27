
import Employee from "../models/employee.js";
import bcrypt from "bcrypt";


// Register employee
export const createEmployee = async (data: any) => {
    const email = data.email.trim().toLowerCase();

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
        throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(data.password, 12);

    const employee = await Employee.create({
        firstName: data.firstName,
        lastName: data.lastName,
        email,
        mobile: data.mobile,
        address: data.address,
        password: hashedPassword,
        role: data.role,
    });

    return employee;
};

// Get all employees
export const getAllEmployees = async () => {
    return Employee.find().select("-password");
};

// Get employee by ID
export const getEmployeeById = async (id: string) => {
    const employee = await Employee.findById(id).select("-password");

    if (!employee) {
        throw new Error("Employee not found");
    }

    return employee;
};

// Update employee
export const updateEmployee = async (
    id: string,
    data: any
) => {
    const employee = await Employee.findByIdAndUpdate(
        id,
        {
            firstName: data.firstName,
            lastName: data.lastName,
            mobile: data.mobile,
            address: data.address,
            role: data.role
        },
        {
            new: true,
            runValidators: true
        }
    ).select("-password");

    if (!employee) {
        throw new Error("Employee not found");
    }

    return employee;
};

// Delete employee
export const deleteEmployee = async (id: string) => {
    const employee = await Employee.findByIdAndDelete(id);

    if (!employee) {
        throw new Error("Employee not found");
    }

    return { message: "Employee deleted successfully" };
};
