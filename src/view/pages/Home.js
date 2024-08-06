import React from 'react'
import Hero from '../../components/Hero'
import TrustedBy from '../../components/TrustedBy'
import OurServices from '../../components/OurServices'
import IndustriesWeServe from '../../components/IndustriesWeServe'
import Projects from '../../components/Projects'
import CoreValues from '../../components/CoreValues'
import ClientsAboutUs from '../../components/ClientsAboutUs'
function Home() {
  return ( 
    <>
    <Hero/>
    <TrustedBy/>
    <OurServices/>
    <IndustriesWeServe/>
    <Projects/>
    <CoreValues/>
    <ClientsAboutUs Heading={"What's Clients Says"}/>
    </>
  )
}

export default Home