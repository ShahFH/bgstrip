import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
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
      {children}
      
      <Footer/>
      </body>
    </html>
  )
}
