import * as yup from "yup";

// for sign up
export const signinShema = yup
  .object({
    firstName: yup.string().required("first name is required"),
    LastName: yup.string().required("last name is required"),
    Email: yup
      .string()
      .required("email is required")
      .email("Invalid email format"),
    Password: yup
      .string()
      .required("password cannot be empty")
      .min(8, "min lenght of password must be atleast 8chrs"),
    confirmPwd: yup
      .string()
      .required("password cannot be emptyd")
      .min(8, "min lenght of password must be atleast 8chrs")
      .oneOf([yup.ref("password")], "password do not match"),
  })
  .required();
export const forgetPassShema = yup
  .object({
    email: yup
      .string()
      .required("email is required")
      .email("Invalid email format"),
  })
  .required();

export const EmailShema = yup
  .object({
    password: yup
      .string()
      .required("password cannot be empty")
      .min(8, "min lenght of password must be atleast 8chrs"),
    confirmPwd: yup
      .string()
      .required("password cannot be empty")
      .min(8, "min lenght of password must be atleast 8chrs")
      .oneOf([yup.ref("password")], "password do not match"),
  })
  .required();

export const logInSchema = yup
  .object({
    email: yup.string().required("email required").email("Invalid email format"),
    password: yup
      .string()
      .required("password cannot be empty")
      .min(8, "min lenght of password should be atleast 8 chrs"),
  })
  .required();

export const formSchema = yup
  .object({
    email: yup
      .string()
      .required("Email Cannot Be Empty")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("password cannot be empty")
      .min(8, "min lenght of password should be atleast 8 chrs"),
    confirmPwd: yup
      .string()
      .required("input field")
      .min(8, "min lenght of password should be atleast 8 chrs")
      .oneOf([yup.ref("password")], "password do not match"),
    lastName: yup.string().required("Last Name Cannot Be Empty"),
    phoneNum: yup.string().required("Please Enter Your Number"),
    general: yup.string().required("Cannot be Empty"),
    generalFirst: yup.string().required("input field"),
    generalSecond: yup.string().required("input field"),
    firstName: yup.string().required("invalid name"),
  })
  .required();
