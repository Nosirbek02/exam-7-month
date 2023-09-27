import { plate } from '@/public/index'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { smallplate } from '@/public/index'

export const Hero = () => {
  return (
    <section className="mb-36 max-w-7xl " style={{margin:"0 auto"}} >
        <div className="container mx-auto flex justify-between pb-36 ">
            <div >
                <div className="flex mb-4 items-center" >
                    <span className="w-14 h-px mr-5 " style={{border:"1px solid rgba(32, 31, 31, 0.20) "}}></span>
                    <p className="text-sm font-semibold " style={{color: "rgba(32, 31, 31, 0.20)", fontFamily: "Poppins",}}>OVER 1000 USERS</p>
                </div>
                <h1 className="lg:w-96 font-semibold mb-4" style={{color: "#201F1F", fontFamily: "Poppins", fontSize: "75px", lineHeight: "90px", letterSpacing: "-3px", width:"567px"}}>
                Enjoy Foods All Over The <span style={{color:"#5C4EAE"}}>World</span>
                </h1>
                <p className="text-lg mb-14 font-normal opacity-70" style={{color: "#676767", fontFamily: "Inter", width:"499px"}}>
                EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span style={{color:"#6155AE", fontWeight:"500"}}>$20 bonus.</span>
                </p>
                <Link href="/dishes" className="font-medium py-5 capitalize rounded-xl px-8 " style={{color: "#FFF", fontFamily: "Poppins", fontSize: "16.271px", letterSpacing: "0.163px", background: "#6C5FBC",}}>
                Get Started
                </Link>
            </div>

            <div className="relative" >
                <div >
                <Image style={{border:"linear-gradient(137deg, #6C5FBC 4.83%, #5144A0 98.22%)"}} src={plate} alt="Logo" />
                </div>
                <div className="flex items-center rounded-2xl absolute  " style={{ background:"#FFF", width:"330px", top: "-30px", left: "45%", }}>
                    <Image className="mr-5" src={smallplate} alt="img"/>
                    <div className="mr-10">
                        <p className="mb-1.5 font-semibold" style={{color:"var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "15.586px",  lineHeight: "140%"}}>
                        Chicken Hell
                        </p>
                        <p className="font-medium text-xs" style={{color: "var(--Black-Color, #323142)", fontFamily: "Poppins" }}>
                        On The Way
                        </p>
                    </div>

                    <p className="text-xs font-medium mt-11 " style={{color: "var(--Dark-Grey, #ACADB9)",  fontFamily: "Poppins", }}>
                    3:09 PM
                    </p>

                </div>
            </div>
        </div>
    </section>
  )
}
