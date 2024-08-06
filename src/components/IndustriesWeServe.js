import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import basket from "../assets/images/grocery.png";
import fintech from "../assets/images/fintech.png";
import Travel from "../assets/images/travel.png";
import Education from "../assets/images/education.png";

function IndustriesWeServe() {
  return (
    <>
      <Box className="container   sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full relative mb-[5rem]">
        <Box className="block text-center">
          <Typography
            className="capitalize xl:!text-3xl lg:!text-3xl md:!text-3xl sm:!text-3xl xsm:!text-3xl xxs:!text-3xl xxxs:!text-2xl !font-[500] !font-[poppins] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Industries <span className="text-ersPrimary">We Serve</span>
          </Typography>
        </Box>
        <Box className="w-[80%] max-w-[100%] m-auto pt-[5rem] pb-[2rem] overflow-hidden ">
          <Swiper
            effect="Cards"
            style={{ overflow: "unset" }}
            navigation={false}
            loop={true}
            modules={[Navigation, Autoplay,EffectFade]}
            speed={2000}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
            centeredSlides={true}
            spaceBetween={40}
            slidesPerView={4}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              375: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              425: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={basket} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    E Commerce <br />
                    Solutions
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={fintech} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Fintech <br />
                    Solutions
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={Travel} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Tour & <br />
                    Travels
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={Education} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Education
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={basket} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    E Commerce <br />
                    Solutions
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={fintech} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Fintech <br />
                    Solutions
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={Travel} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Tour & <br />
                    Travels
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="relative border-[3px] border-[#C1ECFB] rounded-[10px] shadow-lg h-[285px] min-h-full">
                <Box className="z-10 bg-gradient-to-r from-[#27B4EE] to-[#115DCE] h-[100px] w-[100px] rounded-[50%] flex justify-center items-center slider-box-adjustment">
                  <img src={Education} className="w-[40%] object-cover" />
                </Box>
                <Box className="block mt-[4rem] px-2">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-lg !font-[poppins] !font-[500] text-center !leading-snug"
                  >
                    Education
                  </Typography>
                  <Typography
                    className="!text-sm !font-[poppins] !font-[400] text-start"
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                  >
                    We are not just critical and out of the-box thinkers but we
                    are Doers too. We like to carry out actions, investing our
                    expertise, strategy and attention in every step to make it
                    Big, Unique and Successful
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default IndustriesWeServe;
