import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../assets/Hr logo.svg";
import { Link } from "react-router-dom";
import { forgetPassShema } from "../lib/Validation";
import axios from "axios";
import { useState } from "react";
import { Loader } from "../Util/Loader";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [isClicked,setIsClicked] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(forgetPassShema),
  });

  const handleForgotPwd = async (data) => {
    setIsClicked(true)
    // try {
    //   const response = await axios.post("http://localhost:7030/api/auth/forgotpassword",data);
    //   console.log(response);
    //   if(response.status){
    //     toast.success(response.data.message)
    //   }
    //   if (!response.status) {
    //     console.log(errMsg);
      
    //   }
      
      
    // } catch (error) {
    
    // }finally{
    //   setIsClicked(false)
    // }
  
    try {
      const req = await fetch("http://localhost:7030/api/auth/forgotpassword",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
      const response = await req.json();
      if(!response.success){
        toast.error(response.errMsg)
      }
      if(response.success){
        toast.success(response.message)
      }
      console.log(response);
    } catch (error) {
      
    }finally{
      setIsClicked(false)
    }
  }
  
  // const onSubmit = (data) => console.log(data);
  const btnText = isClicked ? <Loader/>: "Request Password Reset"
  return (
    <>
      <main className="sign-in d-flex  align-items-center justify-content-center">
        <div className="patt">
          <div className="justify-content-center text-center d-flex gap-1 HR">
            <img src={Logo} alt="" />
            <h2 className="pt-1">HR Manager</h2>
          </div>
          <form action="" className="mt-4 " onSubmit={handleSubmit(handleForgotPwd)}>
            <div className="d-flex flex-column ms-5">
              <h3>Forgot Password</h3>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter your Email to Reset your Password"
                  className="inputt"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <button className="btn text-decoration-none" disabled={isSubmitting}>{btnText}
              </button>
              <br />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
