import React from "react";
import Careerhero from "../../components/Careerhero";
import PortfoiloGraphic from "../../assets/images/portfolio-grapjics2.png";
import FeaturedProjects from "../../components/FeaturedProjects";
function Portfoilo() {
  return (
    <>
      <Careerhero
        btnText={"Portfolio"}
        Mainheading={"Want to be a part of <br /> An innovative team?"}
        subHeading={
          "We Offer An IT Guide To A Vast Variety Of Organizations Throughout The World. We Continue To Provide Strategic Value In The Days, Weeks & Years After The Launch Of The Product."
        }
        img={PortfoiloGraphic}
      />
      <FeaturedProjects />
    </>
  );
}

export default Portfoilo;
