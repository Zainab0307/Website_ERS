import React from 'react'
import Careerhero from '../../components/Careerhero'
import CurrentOpening from '../../components/CurrentOpening'
import PerksAndBenefits from '../../components/PerksAndBenefits'
import ClientsAboutUs  from '../../components/ClientsAboutUs'
import CareerGraphic from "../../assets/images/career-hero.png";

function Careers() {
  return (
   <>
   <Careerhero btnText={"careers"} Mainheading={"Want to be a part of <br /> An innovative team?"} subHeading={"We Offer An IT Guide To A Vast Variety Of Organizations Throughout The World. We Continue To Provide Strategic Value In The Days, Weeks & Years After The Launch Of The Product."} img={CareerGraphic}/>
   <CurrentOpening/>
   <PerksAndBenefits/>
   <ClientsAboutUs Heading={"What's Employee says"}/>
   </>
  )
}

export default Careers