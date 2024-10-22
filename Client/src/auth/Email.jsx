import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../assets/Hr logo.svg";
import { Link,useParams,useNavigate } from "react-router-dom";
import { EmailShema } from "../lib/Validation";
import toast from "react-hot-toast";

const Email = () => {
  const navigate = useNavigate();
  const {resetToken} = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(EmailShema),
  });
async function onSubmit(data) {
  try {
    const req = await fetch(`http://localhost:7030/api/auth/resetpassword/${resetToken}`,{
      method:"PUT",
      headers : {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data),
    })
    const res = await req.json()
    if (!res.success) {
      toast.error(res.message);
    }
    if (res.success) {
      toast.success(res.message);
      navigate("/auth/sign-in")
      
    }
    console.log(res);
     
  } catch (error) {
    
  }
  
}
  // const onSubmit = (data) => console.log(data);
  return (
    <>
      <main className="sign-in d-flex row align-items-center justify-content-center">
        <div className="patt container align-items-center justify-content-center">
        <div className="justify-content-center text-center d-flex gap-1 HR">
            <img src={Logo} alt="" />
            <h2 className="pt-1">HR Manager</h2>
          </div>
          <form action="" className="mt-4 mb-2 " onSubmit={handleSubmit(onSubmit)}>
            <div className="email-container">
              <h2>Reset Password</h2>
              <div>
                <label htmlFor="">Password</label>
                <br />
                <input
                  type="password"
                  name=""
                  id="r"
                  placeholder="enter password"
                  className="inputt"
                  {...register("password")}
                />
                <p className="text-danger">{errors.password?.message}</p>
                <br />
                <label htmlFor="">Confirm Password</label>
                <br />
                <input
                  type="password"
                  name=""
                  id=""
                  className="inputt"
                  placeholder="Re-enter Password"
                  {...register("confirmPwd")}
                />
                <p className="text-danger">{errors.confirmPwd?.message}</p>
              </div>
              <button className="btn text-decoration-none">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Email;
