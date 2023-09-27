import Image from 'next/image'
import React from 'react'
import { divider2 } from '@/public/index'
import { smallplate } from '@/public/index'
import { DownIcon } from '@/public/assets/downIcon'
import { WalletIcon } from '@/public/assets/walletIcon'
import { divider } from '@/public/index'
import { MoneyIcon } from '@/public/assets/moneyIcon'

export const Purchase = () => {
  return (
    <section className='container mx-auto mb-28' style={{borderTop:"1px solid #CBCBCB", borderBottom:"1px solid #CBCBCB",}}>
        <div className="flex justify-center mt-24 mb-32 " >
            <div className="w-full" style={{maxWidth:"660px"}}>
                <div >
                    <h2 className="font-bold capitalize mb-12" style={{color: "var(--gray-900, #18181B)", fontFamily: "Poppins", fontSize: "50.923px", lineHeight: "58.198px", width:"487px",}}>
                    Control <span className="capitalize font-bold" style={{color:"#6C5FBC",fontFamily: "Poppins", fontSize: "50.923px", lineHeight: "58.198px"}}>Purchases</span> Via Dashboard
                    </h2>
                    <div className="flex items-center rounded-2xl mb-5 w-80" style={{ background: "var(--Full-White, #FFF)", boxShadow:"0px 4px 9px 1px #ACADB9",}}>
                    <Image className="mr-5" src={smallplate} alt="img"/>
                    <div className="mr-10">
                        <p className="mb-1.5" style={{color:"var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "19px", fontWeight: "600", lineHeight: "17px"}}>
                        Chicken Hell
                        </p>
                        <p className="font-medium" style={{color: "var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "9.844px", lineHeight: "140%" }}>
                        On The Way
                        </p>
                    </div>

                    <p className="font-medium mt-11" style={{color: "var(--Dark-Grey, #ACADB9)", fontFamily: "Poppins", fontSize: "10.664px",  lineHeight: "140%"}}>
                    3:09 PM
                    </p>

                    </div>

                    <div className="flex w-80 items-center mb-5 rounded-2xl" style={{ background: "var(--Full-White, #FFF)" }}>
                    <Image className="mr-5"  src={smallplate} alt="img"/>
                    <div className="mr-20">
                        <p className="mb-1.5 font-semibold" style={{color:"var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "19px", lineHeight: "140%"}}>
                        Swe Dish
                        </p>
                        <p className="font-medium" style={{color: "var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "9.844px",lineHeight: "140%" }}>
                        Delivered
                        </p>
                    </div>

                    <p className="font-medium mt-11" style={{color: "var(--Dark-Grey, #ACADB9)", fontFamily: "Poppins", fontSize: "10.664px", lineHeight: "140%",}}>
                    Yesterday
                    </p>

                    </div>

                    <div className="flex w-80 items-center rounded-2xl mb-5 " style={{ background: "var(--Full-White, #FFF)" }}>
                    <Image className="mr-5" src={smallplate} alt="img"/>
                    <div className="mr-11">
                        <p className="font-semibold mb-1" style={{color:"var(--Black-Color, #323142)", fontFamily: "Poppins", fontSize: "19px",  lineHeight: "140%"}}>
                        Fish Hell Veg
                        </p>
                        <p className="font-medium" style={{color: "#F1534E",  fontFamily: "Poppins", fontSize: "12px", lineHeight: "140%" }}>
                        Cancelled
                        </p>
                    </div>

                    <p className="font-medium mt-11" style={{color: "var(--Dark-Grey, #ACADB9)", fontFamily: "Poppins", fontSize: "10.664px", lineHeight: "140%"}}>
                    Yesterday
                    </p>

                    </div>
                </div>
            </div>

            <div className="w-full rounded-3xl" style={{ maxWidth:"540px", height:"466px", border: "1.571px solid var(--greyscale-200, #EDF2F7)", background: "var(--others-white, #FFF)",}}>
                <div className="mt-9 flex items-center ml-10 mb-9">
                    <p className="mr-36 font-extrabold" style={{color: "var(--greyscale-900, #1A202C)", fontFamily: "Manrope", fontSize: "28.271px", lineHeight: "135%", letterSpacing: "0.314px", }}>
                    Purchases
                    </p>

                    <p className="font-semibold flex" style={{color: "var(--greyscale-900, #1A202C)", fontFamily: "Manrope", fontSize: "18.847px", lineHeight: "150%", letterSpacing: "0.628px",}}>
                    This month <span><DownIcon/></span>
                    </p>
                </div>

                <div className="h-36 p-6 items-center ml-10 mb-5 " style={{width:"458px", borderRadius: "18.847px",border: "1.571px solid var(--greyscale-200, #EDF2F7)"}}>
                    <div className="flex mb-5 " >
                    <p className="mr-5" >
                    <WalletIcon/>
                    </p>
                    <div className="mr-28" >
                        <p className="font-extrabold" style={{color: "var(--greyscale-900, #1A202C)", fontFamily: "Manrope", fontSize: "18.847px",lineHeight: "150%", letterSpacing: "0.628px",}}>
                        Expense
                        </p>
                        <p className="font-medium" style={{color: "var(--greyscale-500, #A0AEC0)", fontFamily: "Manrope", fontSize: "15.706px", lineHeight: "150%", letterSpacing: "0.628px",}}>
                        Increased By 10%
                        </p>
                    </div>
                    <p className="font-extrabold" style={{color: "var(--greyscale-900, #1A202C)",fontFamily: "Manrope", fontSize: "21.988px",lineHeight: "150%", letterSpacing: "0.314px"}}>
                    $409.00
                    </p>
                    </div>
                    <Image src={divider} alt="Img"/>
                </div>

                <div className="ml-9 items-center mb-6" style={{width:"458px", height:"135px",padding: "25.129px", borderRadius: "18.847px",border: "1.571px solid var(--greyscale-200, #EDF2F7)"}}>
                    <div className="flex mb-5" >
                    <p className="mr-5">
                    <MoneyIcon/>
                    </p>
                    <div className="mr-28">
                        <p className="font-extrabold" style={{color: "var(--greyscale-900, #1A202C)", fontFamily: "Manrope", fontSize: "18.847px",lineHeight: "150%", letterSpacing: "0.628px",}}>
                        Vocher Usage
                        </p>
                        <p className="font-medium" style={{color: "var(--greyscale-500, #A0AEC0)", fontFamily: "Manrope", fontSize: "15.706px", lineHeight: "150%", letterSpacing: "0.628px",}}>
                        Increased By 5%
                        </p>
                    </div>
                    <p className="font-extrabold" style={{color: "var(--greyscale-900, #1A202C)",fontFamily: "Manrope", fontSize: "21.988px", lineHeight: "150%", letterSpacing: "0.314px"}}>
                    $45.78
                    </p>
                    </div>
                    <Image src={divider2} alt="Img"/>
                </div>
            </div>
        </div>
    </section>
  )
}
