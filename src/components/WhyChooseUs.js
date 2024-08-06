import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Innovation from "../assets/images/innovation.png";
import quality from "../assets/images/quality.png";
import teamwork from "../assets/images/teamwork.png";
import support from "../assets/images/support.png";
import TeamMember from "../assets/images/abrar.png";
import TopLeft from "../assets/images/top-left.png";
import BottomRight from "../assets/images/bottom-right.png";
function WhyChooseUs() {
  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full relative mb-[4rem]">
        <Box className="block text-center py-6">
          <Typography
            className="capitalize !text-3xl !font-poppins !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            why choose <span className="text-ersPrimary">us?</span>
          </Typography>
        </Box>
        <Box className="w-[90%] max-w-full mx-auto mt-[6rem] choose-us pb-[5rem]">
          <Grid container spacing={4} mb={20} rowGap={6}>
            <Grid item xx={12} sm={6} md={6} lg={3}>
              <Box className="bg-white border-[3px] border-[#C1ECFB] rounded-[15px] h-[350px]  min-h-full relative p-4">
                <Box className="h-[50px]">
                  <Box className="w-[110px] h-[110px] bg-gradient-to-r from-[#27B4EE] to-[#115DCE] rounded-[50%] flex justify-center items-center absolute -top-[18%] left-[50%] -translate-x-[50%]">
                    <img
                      src={Innovation}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-xl !font-[400] !font-[poppins] text-center !mb-4"
                >
                  Innovation <br /> & Doers
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="!text-sm !font-[400] !font-[poppins] text-start"
                >
                  We are not just critical and out of the-box thinkers but we
                  are Doers too. We like to carry out actions, investing our
                  expertise, strategy and attention in every step to make it
                  Big, Unique and Successful
                </Typography>
              </Box>
            </Grid>
            <Grid item xx={12} sm={6} md={6} lg={3}>
              <Box className="bg-white border-[3px] border-[#C1ECFB] rounded-[15px] h-[350px] min-h-full relative p-4">
                <Box className="h-[50px]">
                  <Box className="w-[110px] h-[110px] bg-gradient-to-r from-[#27B4EE] to-[#115DCE] rounded-[50%] flex justify-center items-center absolute -top-[18%] left-[50%] -translate-x-[50%]">
                    <img
                      src={quality}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-xl !font-[500] !font-[poppins] text-center !mb-4"
                >
                  Quality & <br /> Growth Focused
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="!text-sm !font-[400] !font-[poppins] text-start"
                >
                  We are not just critical and out of the-box thinkers but we
                  are Doers too. We like to carry out actions, investing our
                  expertise, strategy and attention in every step to make it
                  Big, Unique and Successful
                </Typography>
              </Box>
            </Grid>
            <Grid item xx={12} sm={6} md={6} lg={3}>
              <Box className="bg-white border-[3px] border-[#C1ECFB] rounded-[15px] h-[350px] min-h-full relative p-4">
                <Box className="h-[50px]">
                  <Box className="w-[110px] h-[110px] bg-gradient-to-r from-[#27B4EE] to-[#115DCE] rounded-[50%] flex justify-center items-center absolute -top-[18%] left-[50%] -translate-x-[50%]">
                    <img
                      src={teamwork}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-xl !font-[500] !font-[poppins] text-center !mb-4"
                >
                  Teamwork & <br /> Organized Approach
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="!text-sm !font-[400] !font-[poppins] text-start"
                >
                  We are not just critical and out of the-box thinkers but we
                  are Doers too. We like to carry out actions, investing our
                  expertise, strategy and attention in every step to make it
                  Big, Unique and Successful
                </Typography>
              </Box>
            </Grid>
            <Grid item xx={12} sm={6} md={6} lg={3}>
              <Box className="bg-white border-[3px] border-[#C1ECFB] rounded-[15px] h-[350px] min-h-full relative p-4">
                <Box className="h-[50px]">
                  <Box className="w-[110px] h-[110px] bg-gradient-to-r from-[#27B4EE] to-[#115DCE] rounded-[50%] flex justify-center items-center absolute -top-[18%] left-[50%] -translate-x-[50%]">
                    <img
                      src={support}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-xl !font-[500] !font-[poppins] text-center !mb-4"
                >
                  24/7 <br /> Support
                </Typography>
                <Typography
                  variant="body2"
                  component={"p"}
                  className="!text-sm !font-[400] !font-[poppins] text-start"
                >
                  We are not just critical and out of the-box thinkers but we
                  are Doers too. We like to carry out actions, investing our
                  expertise, strategy and attention in every step to make it
                  Big, Unique and Successful
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box className="w-full py-8 px-4">
            <Box className="client-quotes-box">
              <img
                src={TopLeft}
                className="w-[30px] object-cover pb-6"
                alt="..."
              />
              <Typography
                variant="subtitle1"
                component={"p"}
                gutterBottom
                className="!text-base !font-[400] !font-poppins !pb-6"
              >
                ERS TECH has been an integral part of our strategic vision, and
                since our launch, the market's response has been exceptionally
                positive. We are committed to an ongoing pursuit of delivering
                superior, stable, and enhanced digital products, all with the
                goal of making a meaningful impact in the ever-expanding
                technology landscape. In a world undergoing a rapid digital
                transformation amidst constant change, our mission is to fortify
                the digital presence of businesses and enterprises by providing
                them with robust and successful tech infrastructures.
              </Typography>
              <Box className="flex justify-end items-start">
                <img
                  src={BottomRight}
                  className="w-[30px] object-cover"
                  alt="..."
                />
              </Box>
              <Box className="flex items-center gap-4">
                <Box className="h-[50px] w-[50px] bg-gradient-to-r from-[#29BCF1] to-[#1057CF] rounded-[50px] flex justify-center items-center overflow-hidden">
                  <img
                    src={TeamMember}
                    className="w-[30px] object-cover translate-y-[4px]"  alt="..."
                  />
                </Box>
                <Box className="text-start">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    className="!text-base !font-[600] !font-poppins"
                  >
                    John Doe
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    className="!text-base !font-[400] !font-poppins !text-ersPrimary"
                  >
                    Chief Executive Officer{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WhyChooseUs;
