import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import ROneImg from "../assets/images/hero-graphic.png";
import RTwoImg from "../assets/images/hero-graphic-two.png";

function Hero() {
  return (
    <>
      <Box className="hero-bg ">
        <Box className="container px-10">
          <Box className="relative  xl:h-[700px] lg:h-[700px] md:h-[700px] sm:h-[600px] xsm:h-[600px] xxs:h-[600px] xxxs:h-[600px]">
            <Box className="home-content-box ">
              <Box className="flex items-center justify-content-start gap-[0.5rem] mb-3 ">
                <Divider className="bg-white w-[20px] !border-[1px]opacity-80 " />
                <Typography
                  className="!text-white !text-base !font-[400] !font-[poppins] !mb-0 opacity-80"
                  variant="subtitle"
                  component="p"
                  gutterBottom
                >
                  ERS TECH
                </Typography>
              </Box>
              <Typography
                className="xxxs:!text-2xl !font-[500] !font-poppins text-white !mb-3"
                variant="h5"
                component="h5"
                gutterBottom
              >
                Transform Your Ideas Into
              </Typography>
              <Typography
                className="!text-white xl:!text-6xl lg:!text-5xl md:!text-6xl sm:!text-5xl xsm:!text-5xl xxs:!text-5xl xxxs:!text-4xl !font-poppins !font-[600] uppercase !mb-3"
                variant="h1"
                component="h1"
                gutterBottom
              >
                Intelligent solutions
              </Typography>
              <Typography
                variant="overline"
                className="text-white !font-[500] !text-xl !font-[poppins]"
              >
                YOUR VISION , OUR CODE!!!!
              </Typography>
            </Box>
            <Button className="shadow-xl !normal-case !w-[150px] !rounded-[50px] !bg-white !text-small !text-sm !font-[400] !font-[poppins] !text-[#3CB7EE] !absolute top-[60%] left-[1%]">
              View our Work
            </Button>
            <Box className="right-side-visual xl:block lg:block  md:block sm:hidden xsm:hidden xxs:hidden xxxs:hidden ">
              <Box className="xl:h-[350px] lg:h-[320px]  md:h-[250px] sm:h-[320px] xsm:h-[320px] xxs:h-[320px] xxxs:h-[320px] xl:w-[350px] lg:w-[320px] md:w-[250px] sm:w-[320px] xsm:w-[320px] xxs:w-[320px] xxxs:w-[320px] bg-white border-[3px] border-[rgba(41,188,241,0.6)] rounded-[10px] right-one-visual flex justify-center items-center z-[1]">
                <img src={ROneImg} className="w-[80%] object-cover" alt=".." />
              </Box>
              <Box className="xl:h-[210px] lg:h-[210px] md:h-[165px] sm:h-[210px] xsm:h-[210px] xxs:h-[210px] xxxs:h-[210px] xl:w-[300px] lg:w-[300px] md:w-[230px] sm:w-[300px] xsm:w-[300px] xxs:w-[300px] xxxs:w-[300px] bg-white border-[3px] border-[rgba(41,188,241,0.6)] rounded-[10px] right-two-visual flex justify-center items-center z-[1]">
                <img src={RTwoImg} className="w-[70%] object-cover" alt=".." />
              </Box>
              <Box className="backward-border xl:h-[460px] lg:h-[460px] md:h-[320px] sm:h-[410px] xsm:h-[410px] xxs:h-[410px] xxxs:h-[410px] xl:w-[340px] lg:w-[300px] md:w-[242px] sm:w-[320px] xsm:w-[320px] xxs:w-[320px] xxxs:w-[320px]"></Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
