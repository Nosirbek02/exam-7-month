import Image from 'next/image'
import React from 'react'
import { phone } from '@/public/index'
import { Arrowicon } from '@/public/assets/arrowicon'

export const Download = () => {
  return (
    <section>
        <div className="container mx-auto mb-64">
            <div className="flex justify-around items-center  " style={{borderBottom:"1px solid #CBCBCB", height:"760px" }}>
            <div >
                <Image src={phone} alt="img"/>
            </div>
            <div>
                <h3 className="mb-16 font-bold capitalize" style={{color: "var(--gray-900, #18181B)", fontFamily: "Poppins", fontSize: "50.923px",  lineHeight: "58.198px", width:"470px"}}>
                Premium <span className="font-bold capitalize" style={{color: "#6C5FBC", fontFamily: "Poppins", fontSize: "50.923px", lineHeight: "58.198px", width:"470px"}}>Quality</span> For Your Health
                </h3>
                <ul>
                    <li className="text-xl font-normal mb-7 " style={{color: "#676767", fontFamily: "Inter",  width:"510px"}}>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                    <li className="text-xl font-normal mb-16 " style={{color: "#676767", fontFamily: "Inter",  width:"510px"}}>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                </ul>

                <button className="text-center pl-6 text-base capitalize flex font-medium rounded-2xl items-center pt-5 pr-4 pb-4" style={{color: "#FFF", fontFamily: "Poppins",  background: "#6C5FBC", }}>
                Download <span><Arrowicon/></span> 
                </button>
                
            </div>
            </div>
        </div>
    </section>
  )
}
