"use client"
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Content from './content/page'
import Demo from './demo/page'
import GetStarted from './getStarted/page'
import { motion } from 'framer-motion'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const manrope = Manrope({subsets: ['latin']})

export const metadata = {
  title: 'BGRSTRIP',
  description: 'A Image background Removal App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
      <Navbar/>
      <motion.div className="mt-4 md:mt-0"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 10
      }}>
      {children}</motion.div>
      <Content />
      <Demo />
      <GetStarted />
      <Footer/>
      </body>
    </html>
  )
}
