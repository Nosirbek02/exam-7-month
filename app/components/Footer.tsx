import React from 'react'
import {FooterLogo} from "../../public/assets/footerLogo"
import {Socialmediaicons} from "../../public/assets/socialmediaicons"

export const Footer = () => {
  return (
    <footer style={{background: "#EAEAEA"}}>
        <div className="container mx-auto pl-24 pr-24 pt-24 pb-20">
          <div style={{borderBottom:"1px solid #818181",  }}>
            <div className="mb-7 flex items-center ">
            <FooterLogo/>
            <p className="ml-3.5 text-3xl font-semibold " style={{ color:"#6C5FBC", fontFamily: "Poppins"}}>
            eatly
            </p>
            </div>
          </div>

          <div className="flex mt-14 items-center justify-between ">
            <div className="text-base font-medium" style={{color:"#999", fontFamily: "Inter"}}>
            © 2023 EATLY All Rights Reserved.
            </div>

            <div>
              <Socialmediaicons/>
            </div>
          </div>


        </div>
    </footer>
  )
}
