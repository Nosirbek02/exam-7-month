
import React from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { discountimage } from '@/public/index'
import Image from 'next/image'
import axios from 'axios'

const Page = () => {
  
  return (
    <div className='container mx-auto'>
        <Header/>
        <div style={{marginTop:"50px", marginBottom:"144px"}}>
            <div>

            </div>

            <div>

            </div>

        </div>

        <div  style={{width:"1214px", position:"relative", margin:"0 auto", marginLeft:"121px", marginBottom:"100px", borderRadius:"30px", background: "var(--Primary-Color, #6C5FBC)", display:"flex"}}>
            <div style={{paddingTop:"37px", position:"relative", paddingLeft:"66px",paddingBottom:"61px"}}>
                <h2 style={{color: "#FFF", fontFamily: "Poppins", fontSize:"70px",fontWeight: "800",}}>
                GET 50%
                </h2>
                <input style={{width:"440px", height:"70px", borderRadius: "14.234px", background: "#FFF", opacity: 0.8, boxShadow: "0px 7.25333px 45.33334px 0px rgba(0, 0, 0, 0.10)"}} type="text" placeholder=' Enter Your Email Address' />
                <button style={{borderRadius: "11.253px", position:"absolute", left:"72%", top:"55%", background: "#6C5FBC", width:"132px", height:"53.4px", color: "#F7F8FA", fontFamily: "Poppins", fontSize: "14.752px", fontWeight: "500", letterSpacing: "0.443px", textTransform: "uppercase",}}>
                subscribe
                </button>
            </div>
            <div style={{position:"absolute", left: "70%", top: "19%"}}>
            <Image src={discountimage} alt="img"/>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Page