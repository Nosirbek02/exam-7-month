"use client";
import { zodScheme } from "../../zod/zodScheme";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { RegisterLogo } from "@/public/assets/registerlogo"; 
import {registerImg} from "../../../public/index"
import {registrationfoodimg} from "../../../public/index"
import Image from "next/image";
import { RegistrationGrafic } from "@/public/assets/registrationGrafic";
import Link from "next/link";
import { useRegister } from "../../features/useRegister";
import { PersonIcon } from "@/public/assets/personIcon";
import { EmailIcon } from "@/public/assets/emailIcon";
import { PasswordIcon } from "@/public/assets/passwordIcon";
import { useRouter } from "next/navigation";

const Page = () => {


  const router = useRouter()




  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(zodScheme) });
  const postData = useRegister((set:any) => set.postRegister);
  const submit = (data:any) => {
    postData({...data,name:data.fullname}).then((res:any)=>{
      router.replace("/payment")
      console.log(res);
    })
  };
  
  return (
    <>
      <div className="container mx-auto flex justify-between">
        <div style={{marginLeft:"100px"}} className="flex max-w-divinput flex-col gap-7 w-full  mt-8">
          <div style={{marginBottom:"100px"}}>
            <RegisterLogo />
          </div>
          <div style={{color: "#323142", marginLeft:"10rem", fontFamily: "Poppins", fontSize: "35.25px", fontWeight: "600", lineHeight: "125%", letterSpacing: "-1.41px",}}>
            <h2>
            Sign Up To eatly
            </h2>
          </div>
          <div className="pl-24">
            <form onSubmit={handleSubmit(submit)} className="mx-w-inputs">
              <div className="relative">
                <input style={{width:"382px"}}
                  className="mb-6 py-6 pl-16 bg-bg-color-input w-full rounded-2xl"
                  {...register("fullname")}
                  type="text"
                  placeholder="Enter your fullname"
                />
                <div className="absolute top-1/4 left-4 ">
                  <PersonIcon />
                </div>
              </div>
              <div className="relative">
                <input style={{width:"382px"}}
                  className="py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl"
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email"
                />
                <div className="absolute top-1/4 left-4 ">
                  <EmailIcon />
                </div>
              </div>
              <div className="relative">
                <input style={{width:"382px"}}
                  className="py-6 mb-6  pl-16 bg-bg-color-input w-full rounded-2xl"
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password"
                />
                <div className="absolute top-1/4 left-4 ">
                  <PasswordIcon />
                </div>
              </div>
              
              <button style={{backgroundColor:"#6C5FBC", width:"382px"}}
                type="submit"
                className="bg-bg-button w-full py-6 rounded-2xl font-semibold text-lg text-white"
              >
                SIGN UP
              </button>
            </form>
            <div style={{marginBottom:"186px"}} className="flex mt-6 justify-center">
              <h3 style={{marginRight:"10px"}} className="font-normal text-third text-lg">
                Already Have An Account?
              </h3>
              <Link style={{color:"#6C5FBC", marginRight:"230px"}}
                className=" font-bold text-lg text-fourth"
                href="/page/login"
              >
                Log in
              </Link>
            </div>

            <div style={{marginLeft:"-120px"}} >
              <div style={{display:"flex", width:"681px", justifyContent:"space-between"}}>
                <p style={{color: "var(--greyscale-600, #718096)", fontFamily: "Poppins", fontSize: "16px", fontWeight: "500", lineHeight:"150%", letterSpacing: "0.2px"}}>
                Privacy Policy
                </p>
                <p style={{color: "var(--greyscale-600, #718096)", fontFamily: "Poppins", fontSize: "16px", fontWeight: "500", lineHeight:"150%", letterSpacing: "0.2px"}}>
                Copyright 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div style={{background:"#6C5FBC"}} className="bg-bg-color max-w-wrapper w-full ">
          <div className="pt-60  relative pl-40">
            <Image src={registerImg} width={360} height={358} alt="meal" />
            <div
              className="rounded-3xl px-4 absolute flex gap-5 items-center max-w-mxs bg-white"
              style={{ top: "50%", marginTop: "-85px", right: "60px" }}
            >
              <Image src={registrationfoodimg} alt="img" />
              <div>
                <h3 className="text-xl font-bold text-first-color">
                  Chicken Hell
                </h3>
                <p className="text-xs font-semibold text-first-color">
                  On The Way
                </p>
              </div>
              <p className="mt-10 text-xs font-medium text-second">3:09 PM</p>
            </div>
            <div
              className="absolute top-6 mt-40"
              style={{ left: "15.3%", top: "42%" }}
            >
              <RegistrationGrafic />
            </div>
          </div>
          <div>
            <h2 className="font-extrabold text-white text-4xl text-center mb-5 mt-20">
              Find Foods With Love
            </h2>
            <p style={{color: "var(--others-white, #FFF)", width:"500px", fontFamily: "Manrope", fontSize: "14px", fontWeight: "500",lineHeight:"150%",letterSpacing:"0.2px"}} className="text-second text-sm font-medium max-w-text-max text-center mx-auto pb-40">
              Eatly Is The Food Delivery Dashboard And Having More Than 2K+
              Dishes Including Asian, Chinese, Italians And Many More. Our
              Dashboard Helps You To Manage Orders And Money.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
