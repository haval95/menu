import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "react-hot-toast";
import { ClerkProvider , currentUser } from '@clerk/nextjs'
import {Playpen_Sans} from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Playpen_Sans({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: {
    absolute: "Restaurnat",
    default: "Restaurnat",
    template:"Restaurnat | %s"
  },
  description: 'we are shoing our menu here.',

}

export default async function RootLayout({
  children,
  modal,
}: {
    children: React.ReactNode,
  modal:React.ReactNode
  }) {

  const user = await currentUser();
  return (
   
        <ClerkProvider>
      <html lang="en">
         
        <body className={`${inter.className} m-0 p-0`}>
           <Navbar />

          <Toaster position="top-center" />
        {modal} 
          {children}
          
          
            <Footer />
        
          </body>
          </html>
      </ClerkProvider>
    
  )
}


