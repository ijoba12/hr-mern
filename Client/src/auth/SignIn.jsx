import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { logInSchema } from "../lib/Validation";
import Logo from "../assets/Hr logo.svg";
import "../Styles/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const SignIn = () => {
  const [isClicked,setIsClicked] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm({
    resolver: yupResolver(logInSchema),
  });
  async function handleSignIn (data){
    console.log(222);
    
    setIsClicked(true)
    try {
      const req = await fetch("http://localhost:7030/api/auth/signin",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
     const res = await req.json();
     console.log(res);
     if (!res.success) {
      toast.success(res.errMsg)
      
     }
     if (res.success) {
      toast.success(res.message)
      localStorage.setItem("hr-token",res.user.token)
      if (res.user.role === "super-admin" || res.user.role === "admin") {
        navigate("/admin-dashboard")
        
      }else{
        navigate("/employee-dashboard")
      }
      
     }
     
    } catch (error) {
      
    }
  }
  // const onSubmit = (data) => console.log(data);
  const btnText = isClicked ? "Loading" : "Sign In"
  return (
    <>
    
      <main className="sign-in d-flex align-items-center justify-content-center">
        <div className="patt container align-items-center justify-content-center">
          <div className="justify-content-center text-center d-flex">
            <img src={Logo} alt="" className="mt-4" />
            <h2 className="HR">HR Manager</h2>
          </div>
          <h3 className="welcome text-center">
            Welcome to HR Manager - where creativity meets Oppurtunity
          </h3>
          <form action="" className=" mb-3" onSubmit={handleSubmit(handleSignIn)}>
            <div className="ms-4">
              <div>
                <label htmlFor="">Email</label> <br />
                <input
                  type="email"
                  name=""
                  id="d"
                  placeholder="sandrawilliams@gmail.com"
                  className="inputt"
                  {...register("email")}
                />
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div>
                <label
                  htmlFor=""
                  className=" d-flex justify-content-between pt-5"
                >
                  Password{" "}
                  <Link to="/auth/forgotpassword" className="me-5">Forgot Password?</Link>
                </label>

                <input
                  type="password"
                  name=""
                  id="r"
                  placeholder="Password"
                  className="inputt"
                  {...register("password")}
                />
                <p className="text-danger">{errors.password?.message}</p>
              </div>
              <button className="btn mb-2" type="submit" disabled={isSubmitting}>
                {btnText}
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default SignIn;

