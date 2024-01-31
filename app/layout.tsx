import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "react-hot-toast";
import { ClerkProvider, SignIn, UserProfile, currentUser } from '@clerk/nextjs'
import { SignedIn} from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
import {Playpen_Sans} from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link';
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
         
        <body className={inter.className}>
           <Navbar />

          <Toaster position="top-center" />
        
          {children}
          {modal} 
          
            <Footer />
        
          </body>
          </html>
      </ClerkProvider>
    
  )
}


