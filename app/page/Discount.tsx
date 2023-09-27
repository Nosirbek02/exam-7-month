import Image from 'next/image'
import React from 'react'
import { discount } from '@/public/index'
import { discountimage } from '@/public/index'

export const Discount = () => {
  return (
    <section className=' mx-auto mt-44 ml-32 mr-24 mb-40'>
        <div  style={{position:"relative"}} className='container mx-auto'>
            <Image style={{borderRadius: "30px", background: "var(--Primary-Color, #6C5FBC)", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}} src={discount} alt="img"/>
            <Image style={{position:"absolute", top: "67px", left: "68%"}} src={discountimage} alt="img"/>
        </div>
    </section>
  )
}
