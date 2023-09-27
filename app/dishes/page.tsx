"use client";

import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { useGetdata } from "../features/useGetdata";
import { Heart } from "../../public/assets/heart";
import { TopDishesStarIcon } from "../../public/assets/topDishesStarIcon";
import { TopDishesplus } from "../../public/assets/topDishesplus";
import {Grid} from "@/node_modules/@mui/material/index";
import {Stack , Container,Typography } from "@/node_modules/@mui/material/index";
import {Accordion, AccordionSummary, AccordionDetails} from "@/node_modules/@mui/material/index";

import { Add } from "@/node_modules/@mui/icons-material/index";

const getColor:any = (text:string) => {
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

const Dishes = () => {
  const post = useGetdata((state:any) => state.posts);
  const postGet = useGetdata((state:any) => state.postGet);

  useEffect(() => {
    postGet();
  }, []);
  return (
    <Stack className="container mx-auto" style={{ flexWrap: "wrap" }}>
      <Header />
      <Grid
        style={{ borderBottom: "1px solid #CBCBCB", marginBottom: "105px" }}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 0 }}
      >
        <div style={{ marginBottom: "232px" }}>
          <ul 
            style={{
              display: "flex",
              gap: "31px",
              marginBottom: "65px",
              flexWrap: "wrap",
              marginRight: "96px",
              marginLeft: "126px",
            }}
            
          >
            {post.map((item:any) => (
              <div key={item.id} >
                <li  
                  style={{
                  
                  width: "225px",
                  height: "390px",
                  borderRadius: "34.581px",
                  border: "1.441px solid var(--colors-gray-gray-2, #F4F4F6)",
                  background: "var(--Pure-White, #FFF)",
                  boxShadow:"6.84842px 82.18102px 41.09051px 0px rgba(229, 229, 229, 0.70)",
                }}
              >
                <div style={{ marginTop: "24px", marginLeft: "180px" }}>
                  <Heart />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img
                    width={186}
                    height={186}
                    src={`http://207.154.221.44:4002/${item.image}`}
                  />
                </div>
                <div style={{ marginLeft: "23px" }}>
                  <p style={{color:`${getColor(item.type)[0]}`,backgroundColor:`${getColor(item.type)[1]}`,padding:"3px 8px", fontFamily: "Poppins", fontSize: "13.45px", fontWeight: "400", width:"85px", borderRadius: "4.839px",}}>{item.type} </p>
                  <p className="fontPoppins"
                    style={{
                      color: "var(--BLACK, #323142)",
                      fontSize: "23.054px",
                      fontWeight: "600",
                      lineHeight: "37.463px",
                      marginBottom: "2px",
                    }}
                  >
                    {item.name}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "13px",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--Grey, #8E97A6)",
                        fontFamily: "Manrope",
                        fontSize: "17.291px",
                        fontWeight: "400",
                        lineHeight: "23.054px",
                        marginRight: "6px",
                      }}
                    >
                      {item.time}min •
                    </p>
                    <p style={{ marginRight: "6px" }}>
                      <TopDishesStarIcon />
                    </p>
                    <p
                      style={{
                        color: "var(--Grey, #8E97A6)",
                        fontFamily: "Manrope",
                        fontSize: "17.291px",
                        fontWeight: "400",
                        lineHeight: "23.054px",
                        marginRight: "6px",
                      }}
                    >
                      {item.mark}
                    </p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p
                      style={{
                        color: "var(--BLACK, #323142)",
                        width: "115px",
                        marginRight: "15px",
                        fontFamily: "Manrope",
                        fontSize: "25.936px",
                        fontWeight: "700",
                        lineHeight: "40.345px",
                      }}
                    >
                      ${item.price}
                    </p>
                    <button>
                      <TopDishesplus />
                    </button>
                  </div>
                </div>
              </li>
              </div>
            ))}
          </ul>
        </div>
      </Grid>

      <div style={{marginBottom:"100px"}}>
        <div style={{ width: "408px", margin: "0 auto", marginBottom: "114px" }}>
          <h2
            style={{
              color: "#323142",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "45px",
              fontWeight: "600",
              lineHeight: "120%",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                color: "#6C5FBC",
                textAlign: "center",
                fontFamily: "Poppins",
                fontSize: "45px",
                fontWeight: "600",
                lineHeight: "120%",
              }}
            >
              Questions
            </span>
          </h2>
        </div>
        <div style={{marginLeft:"175px", marginRight:"175px", width:"1152px",}}>

          <Accordion elevation={0} style={{background:"#F9F9F9"}}   >
            <AccordionSummary className="text-white"
              expandIcon={<Add style={{background:"#6C5FBC", width: "31.12px",height: "31.12px", borderRadius:"50%"}} fontSize="medium"  />}
            >
              <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How long does delivery take?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} style={{background:"#F9F9F9"}} >
            <AccordionSummary className="text-white"
              expandIcon={<Add style={{background:"#6C5FBC", width: "31.12px",height: "31.12px", borderRadius:"50%"}} fontSize="medium"  />}
            >
              <Typography style={{color: "#323142", fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How Does It Work ?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} style={{background:"#F9F9F9"}} >
            <AccordionSummary className="text-white"
              expandIcon={<Add style={{background:"#6C5FBC", width: "31.12px",height: "31.12px", borderRadius:"50%"}} fontSize="medium"  />}
            >
              <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>How does your food delivery service work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#686868", width:"790px",  fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} style={{background:"#F9F9F9"}} >
            <AccordionSummary className="text-white" 
              expandIcon={<Add style={{background:"#6C5FBC", width: "31.12px",height: "31.12px", borderRadius:"50%"}} fontSize="medium"  />}
            >
              <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>What payment options do you accept?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#686868", width:"790px", fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} style={{background:"#F9F9F9"}}  >
            <AccordionSummary className="text-white"
              expandIcon={<Add style={{background:"#6C5FBC", width: "31.12px",height: "31.12px", borderRadius:"50%"}} fontSize="medium" />}
            >
              <Typography style={{color: "#323142",  fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}>Do you offer discounts or promotions?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{color: "#686868", width:"790px",  fontSize: "20px", fontWeight: "400", lineHeight: "160%", letterSpacing:" 0.2px",}}>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion elevation={0} style={{background:"#F9F9F9"}}  >
            <AccordionSummary 
            
            >
              <Typography style={{color: "#323142", fontSize: "23.417px", fontWeight:"600", lineHeight: "59.24px",}}></Typography>
            </AccordionSummary>
            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>

          
        </div>
      </div>
      <Footer />
    </Stack>
  );
};

export default Dishes;
