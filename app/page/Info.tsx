import React from 'react'
import { Infoline1 } from '@/public/assets/infoline1'
import { Infoline2 } from '@/public/assets/infoline2'
import { Infoline3 } from '@/public/assets/infoline3'
import { Infoline4 } from '@/public/assets/infoline4'

export const Info = () => {
  return (
    <section className="mb-32" style={{background: "#6C5FBC", height:"221px"}}>
        <div className="container mx-auto flex justify-between relative py-12 pr-64 " style={{ paddingLeft:"300px"}}>
            <div className="absolute stroke-4" style={{ right:"75%", top: "1%", stroke: "#A596FF"}}>
                <Infoline1/>
            </div>
            <div className="stroke-4 absolute" style={{ right:"72%", top: "1%", stroke: "#A596FF"}}>
                <Infoline2/>
            </div>
            <div className="flex " style={{textAlign:"center" }}>
                <div className="mr-28" >
                <h3 className="mb-3 font-bold" style={{color: "var(--base-white, #FFF)", fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px",}}>
                10K+
                </h3>
                <p className="text-sm font-medium" style={{color: "#C5BFED", fontFamily: "Inter",  width:"137px"}}>
                Satisfied Costumers All Great Over The World 
                </p>
                </div>
                <span style={{border:"1px solid #C5C5C5 ", opacity: "0.15"}}>

                </span>
            </div>
            <div className="flex " style={{textAlign:"center" }}>
                <div className="mr-28">
                <h3 className="mb-3 font-bold" style={{color: "var(--base-white, #FFF)", fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px",}}>
                4M
                </h3>
                <p className="text-sm font-medium w-48" style={{color: "#C5BFED", fontFamily: "Inter",  }}>
                Healthy Dishes Sold Including Milk Shakes Smooth 
                </p>
                </div>
                <span style={{border:"1px solid #C5C5C5 ", opacity: "0.15"}}>

                </span>
            </div>
            <div className="flex " style={{textAlign:"center"}}>
                <div >
                <h3 className="mb-3 font-bold" style={{color: "var(--base-white, #FFF)", fontFamily: "Public Sans", fontSize: "43.2px", lineHeight: "54px"}}>
                99.99%
                </h3>
                <p className="text-sm font-medium w-48" style={{color: "#C5BFED", fontFamily: "Inter"}}>
                Reliable Customer Support We Provide Great Experiences
                </p>
                </div>
            </div>
            <div className="absolute" style={{strokeWidth: "4.017px", right:"0%", top: "1%", stroke: "#A596FF"}}>
                <Infoline3/>
            </div>
            <div className="absolute" style={{strokeWidth: "4.017px", right:"0%", top: "1%", stroke: "#A596FF"}}>
                <Infoline4/>
            </div>
        </div>
    </section>
  )
}
