import React from "react";
import { Box } from "@mui/material";
import Careerhero from "../../components/Careerhero";
import PricingHero from "../../assets/images/pricing-hero.png";
import PriceTable from "../../components/priceTable";
import RequestQueryForm from "../../components/RequestQueryForm";
function Pricing() {
  return (
    <>
      <Careerhero
        btnText={"Pricing"}
        Mainheading={"Your Plan-Your Way"}
        subHeading={
          "Choose a plan that suits well to your requirements and specifications."
        }
        subHeading2={"Want a customized plan? Get a Quote."}
        img={PricingHero}
        top={"75%"}
      />
      <PriceTable />
      <Box className="mb-16">
        <RequestQueryForm />
      </Box>
    </>
  );
}

export default Pricing;
