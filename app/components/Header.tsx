"use client";

import React, { useEffect, useState } from "react";
import { Logo } from "@/public/assets/logo";
import { Shoppingicon } from "../../public/assets/shoppingicon"
import Link from "next/link";
import axios from "axios";


export const Header = () => {
  
  return (
    <header
      className="pt-12 pr-24 pl-24 pb-20"
    >
      <div className="container mx-auto flex justify-between" style={{borderBottom: "1px solid #CBCBCB",}}>
        <div className="flex items-center mb-6  ">
          <Logo />
          <p className="ml-3  fontPoppins text-xl font-semibold mr-24" style={{color:"#6C5FBC"}}>
            eatly
          </p>

          <Link className="text-lg capitalize font-medium mr-14 " href="/" >
            Home
          </Link>
          <Link className="text-lg capitalize font-medium mr-14 " href="/dishes" >
            Dishes
          </Link>
        </div>

        <div className="flex items-center mb-6 ">
          <Link href="/payment">
            <Shoppingicon />
          </Link>
          
            <>
              <Link className="text-lg font-bold capitalize ml-11 mr-9 " href="/page/login" style={{color: "#606060",fontFamily: "Inter",}}>
                Login
              </Link>

              <Link className="py-5 px-7 w-32 rounded-2xl text-lg capitalize font-bold " href="/page/registration" style={{background: "#6C5FBC", color: "#F9F9F9", fontFamily: "Inter",}}>
                Sign up
              </Link>
            </>
          
        </div>
      </div>
    </header>
  );
};
