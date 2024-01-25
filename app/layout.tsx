import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from "react-hot-toast";
import { ClerkProvider, SignIn, currentUser } from '@clerk/nextjs'
import { SignedIn} from '@clerk/nextjs'
import { SignedOut } from '@clerk/nextjs'
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
}: {
  children: React.ReactNode
  }) {

  const user = await currentUser();
  return (
   
        <ClerkProvider>
      <html lang="en">
         
        <body className={inter.className}>
           <Navbar />
          <SignedIn>
            <Toaster position="top-center"  />
            {children}
            
              
           
          </SignedIn>
         
            
            
            <Footer />
        
          </body>
          </html>
      </ClerkProvider>
    
  )
}


