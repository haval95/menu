
import Hero from '@/components/Home/Hero'
import Testamonials from '@/components/Home/Testamonials'
import WhyUs from '@/components/Home/WhyUs'

export default  function Home() {
 
  

  return (
    <>

      <Hero />
      <WhyUs />
      <hr className='max-w-screen-lg mx-auto'></hr>
      <Testamonials color="yellow"/>
    
    </>
  )
}
