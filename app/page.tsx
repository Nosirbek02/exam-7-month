
import { Hero } from "./page/Hero"
import { Info } from "./page/Info"
import { Download } from "./page/Download"
import { Chicken } from "./page/Chicken"
import { TopDishes } from "./page/TopDishes"
import { Purchase } from "./page/Purchase"
import { Discount } from "./page/Discount"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Comments } from "./page/comments"

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <Info/>
      <Download/>
      <Chicken/>
      <TopDishes/>
      <Purchase/>
      <Comments/>
      <Discount/>
      <Footer/>
    </div>
  )
}
