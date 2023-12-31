import './globals.css'
import { Inter, Manrope, Poppins, Public_Sans } from 'next/font/google'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const manrope = Manrope({ subsets: ['latin'], weight:[ "200", "300", "400", "500", "600", "700", "800"] })
const poppins = Poppins({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })
const publicsans = Public_Sans({ subsets: ['latin'], weight:["100", "200", "300", "400", "500", "600", "700", "800", "900"] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children}:any) {
  return (
    <html lang="en">
      <body  style={{ margin:"0 auto", background: "#F9F9F9"}} >
        <main>{children}</main>
      </body>
    </html>
  )
}
