"use client";

import React from "react";
import { useEffect } from "react";
import { useGetdata } from "../features/useGetdata";
import { Heart } from "@/public/assets/heart";
import { TopDishesStarIcon } from "@/public/assets/topDishesStarIcon";
import { TopDishesplus } from "@/public/assets/topDishesplus";
import Link from "next/link";
import { TopDishesArrow } from "@/public/assets/TopDishesArrow";

const getColor:any = (text:any) => {
  if(text === "TRENDING"){
      return ["#FB471D","#F7C5BA"]
  }
  if(text === "SUPREME"){
    return ["#309D5B","#33ac648f"]
  }
  if(text === "HEALTHY"){
    return  ["#DAA31A","#F7EDD0"]
  }
}

export const TopDishes = () => {
  const post = useGetdata((state:any) => state.posts);
  const postGet = useGetdata((state:any) => state.postGet);

  useEffect(() => {
    postGet();
  }, []);

  const data = post.filter((item:any, index:any) => index < 5);

  return (
    <section >
      <div className="container mx-auto">
        <div className="mb-20 text-center ">
          <h2
            className="text-5xl font-semibold leading-7 container mx-auto "
            style={{ color: "#323142", fontFamily: "Poppins" }}
          >
            Our Top{" "}
            <span
              className="text-5xl font-semibold leading-7"
              style={{ color: "#6C5FBC", fontFamily: "Poppins" }}
            >
              Dishes
            </span>
          </h2>
        </div>

        <div className="mb-56" >
          <ul className="flex mb-16 flex-wrap " style={{  margin:"0 auto", gap:"31px", maxWidth:"1250px", }}>
            {data.map((item:any) => (
              <li key={item.id} className="w-56 h-96"
                style={{
                  borderRadius: "34.581px",
                  border: "1.441px solid var(--colors-gray-gray-2, #F4F4F6)",
                  background: "var(--Pure-White, #FFF)",
                  boxShadow:
                    "6.84842px 82.18102px 41.09051px 0px rgba(229, 229, 229, 0.70)",
                }}
              >
                <div className="mt-6 ml-44 " >
                  <Heart />
                </div>
                <div className="flex justify-center" >
                  <img
                    width={186}
                    height={186}
                    src={`http://207.154.221.44:4002/${item.image}`}
                  />
                </div>
                <div className="ml-6" >
                  
                <p className="font-normal" style={{color:`${getColor(item.type)[0]}`,backgroundColor:`${getColor(item.type)[1]}`,padding:"3px 8px", fontFamily: "Poppins", fontSize: "13.45px",  width:"85px", borderRadius: "4.839px",}}>{item.type} </p>
                  <p className="text-2xl font-semibold mb-0.5 " style={{color: "var(--BLACK, #323142)", fontFamily: "Poppins",}}>{item.name}</p>
                  <div className="flex items-center mb-3.5" >
                    <p className="text-base mr-1.5 font-normal" style={{color: "var(--Grey, #8E97A6)", fontFamily: "Manrope",  }}>
                    {item.time}min •
                    </p>
                    <p className="mr-1.5">
                      <TopDishesStarIcon/>
                    </p>
                    <p className="text-base mr-1.5 font-normal" style={{color: "var(--Grey, #8E97A6)", fontFamily: "Manrope",}}>
                      {item.mark}
                    </p>
                  </div>
                  <div className="container mx-auto flex">
                    <p className="font-bold mr-4 w-28" style={{color: "var(--BLACK, #323142)", fontFamily: "Manrope", fontSize: "25.936px",lineHeight: "40.345px",}}>
                    ${item.price}
                    </p>
                    <button>
                      <TopDishesplus/>
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <Link className="flex "  style={{ justifyContent:"end"}} href="/dishes">
          <TopDishesArrow/>
          </Link>
        </div>
      </div>
    </section>
  );
};
