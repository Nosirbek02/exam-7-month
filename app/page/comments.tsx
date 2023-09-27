import React from "react";
import { commentsImg } from "@/public/index";
import { CommentsDot } from "@/public/assets/commentsDot";
import { CommentsStars } from "@/public/assets/commentsStars";
import Image from "next/image";
import { commentsLine } from "@/public/index";

export const Comments = () => {
  return (
    <section className="mx-auto" style={{ marginLeft: "123px", overflow:"hidden" }}>
      <div className="container mx-auto">
      <h2 style={{color: "#6C5FBC", fontFamily: "Poppins", fontSize: "45px", fontWeight: "600" ,lineHeight: "25.558px",}} className="text-fourth text-5xl font-semibold text-center mb-20 mt-64">
        Customer<span style={{color: "#323142", fontFamily: "Poppins", fontSize: "45px", fontWeight: "600" ,lineHeight: "25.558px",}} className="text-first-color ml-4">Say</span>
      </h2>
      <div style={{width:"1600px"}} className="flex gap-16 ">
        <div
          className=" max-w-customer-max bg-white rounded-2xl"
          style={{ boxShadow: "0px 1px 100px 1px #D4D4D7" }}
        >
          <div className="px-11 py-9">
            <div className="flex items-center  pb-8">
              <div className="flex gap-5 items-center">
                <Image src={commentsImg} alt="img" />
                <div style={{ width: "130px" }}>
                  <h3>Alexander R.</h3>
                  <p>01 Year With Us </p>
                </div>
              </div>
              <div className="ml-14">
                <CommentsDot />
              </div>
            </div>
            <p className="max-w-customer-text pb-10">
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
            <CommentsStars />
          </div>
        </div>
        <div
          className=" relative h-full bg-white rounded-2xl "
          style={{ boxShadow: "0px 1px 100px 1px #D4D4D7" }}
        >
          <div className="px-11 py-8">
            <p className="max-w-customer-text pb-10">
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
            <CommentsStars />
          </div>
          <div
            className="max-w-line-w   absolute"
            style={{ top: "50%", marginTop: "50%" }}
          >
            <Image style={{marginTop:"-40px"}} src={commentsLine} alt="img" />
          </div>
        </div>
        <div
          className=" max-w-customer-max h-full bg-white rounded-2xl "
          style={{ boxShadow: "0px 1px 100px 1px #D4D4D7" }}
        >
          <div className="px-11 py-9">
            <p className="max-w-customer-text pb-10">
              “ Online invoice payment helps companies save time, are faster and
              save maximum effort for the clients and save maximum effort.
              Online invoice payment helps companies save time ”
            </p>
            <CommentsStars />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
