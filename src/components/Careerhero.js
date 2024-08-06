import React from "react";
import { Box,  Typography, Button, Grid } from "@mui/material";

function Careerhero({
  btnText,
  Mainheading,
  subHeading,
  img,
  top,
  subHeading2,
}) {
  return (
    <>
      <Box className="hero-bg !mb-[0rem]">
        <Box className="container px-10">
          <Box className="relative xl:h-[700px] lg:h-[700px] md:h-[700px] sm:h-[600px] xsm:h-[600px] xxs:h-[600px] xxxs:h-[600px]">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box className="hero-component-multi ">
                  <Button className="shadow-xl  !w-[150px] !rounded-[50px] !bg-white !text-sm !font-[400] !font-[poppins] !text-[#3CB7EE] !capitalize !mb-16">
                    {btnText}
                  </Button>
                  <Typography
                    className="!text-white xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-2xl xsm:!text-3xl xxs:!text-2xl xxxs:!text-xl !font-[600] uppercase !mb-0 !font-poppins !mb-6"
                    variant="h1"
                    component="h1"
                    gutterBottom
                  >
                    <div dangerouslySetInnerHTML={{ __html: Mainheading }} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    className={`text-white !text-base  !font-[400] !font-poppins !capitalize ${subHeading2 ? '!w-full' : 'xl:!w-[60%] lg:!w-[60%] md:!w-[60%] sm:!w-full xsm:!w-full xxs:!w-full xxxs:!w-full'}`}
                  >
                    {subHeading}
                  </Typography>
                  {subHeading2 ? (
                    <Typography
                      variant="subtitle1"
                      component={"p"}
                      className={`text-white !text-base !font-[400] !font-poppins !capitalize !w-[60%]`}
                    >
                      {subHeading2}
                    </Typography>
                  ) : (
                    ""
                  )}
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} >
                <Box className="xl:block lg:block md:block     sm:hidden xsm:hidden xxs:hidden xxxs:hidden">
                  <Box className="xl:h-[400px] lg:h-[350px]  md:h-[150px] xl:w-[380px] lg:w-[330px] md:w-[220px] border-2 border-white career-visual-border"></Box>
                  <Box className=" shadow-xl xl:h-[400px]  lg:h-[340px] md:h-[260px] xl:w-[420px] lg:w-[360px] md:w-[280px] bg-white border-[3px] border-[rgba(41,188,241,0.6)] rounded-[10px] right-one-visual flex justify-center items-center z-[1] xl:!top-[51%] lg:!top-[51%] md:!top-[45%] xl:!right-[1.5%] lg:!right-[1.5%] md:!-right-[3%]">
                    <img src={img} className="w-[80%] object-cover" alt=".." />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Careerhero;
