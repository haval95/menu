import React from 'react'

function LocationMap() {
  return (
    <div className=" bg-black border-y-2 border-yellow-400 shadow-inner">

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1895.5385348867717!2d18.195438565127517!3d46.0687357124447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742b1f2d761cb39%3A0xf9d021409a599b79!2sFortune%20Pharmacy!5e0!3m2!1sen!2shu!4v1706960577022!5m2!1sen!2shu"
       
        height="300"
        width="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
        
        </iframe>
    </div>
  )
}

export default LocationMap