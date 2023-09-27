import React from 'react'
import { chicken } from '@/public/index'
import Image from 'next/image'
import { Star } from '@/public/assets/star'
import { SaveIcon } from '@/public/assets/saveIcon'

export const Chicken = () => {
  return (
    <section className="ml-32 mr-28 mb-52 ">
        <div className="container mx-auto">
            <div style={{borderRadius: "30px", border: "1.593px solid var(--colors-gray-gray-2, #F4F4F6)", background: "var(--Pure-White, #FFF)", boxShadow: "7.57186px 90.86229px 45.43114px 0px rgba(229, 229, 229, 0.70)", maxWidth:"1238px" }}>
                <Image style={{borderRadius: "30px 30px 0px 0px", width:"1317px"}} src={chicken} alt="img"/>
                <div className="h-32 pt-6 pb-8 pl-11 flex items-center justify-between">
                    <p className="font-semibold " style={{color: "var(--BLACK, #323142)", fontFamily: "Poppins", fontSize: "40px",lineHeight: "53.364px"}}>
                    The Chicken King
                    </p>
                    <div className="flex w-full " style={{ maxWidth:"350px"}}>

                    <p className="text-2xl font-normal mr-2.5" style={{color: "var(--Grey, #8E97A6)", fontFamily: "Manrope", }}>
                    24min •
                    </p>

                    <Star/>
                    <p className="text-2xl font-normal ml-2.5" style={{color: "var(--Grey, #8E97A6)", fontFamily: "Manrope", }}>
                    4.8
                    </p>
                    </div>
                    <div className="w-full " style={{maxWidth:"130px"}}>
                    <SaveIcon/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
