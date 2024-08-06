import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import TeamMember from "../assets/images/abrar.png";

function Team() {
  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full relative">
        <Box className="block text-center py-6">
          <Typography
            className="capitalize !text-3xl !font-poppins !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            meet our <span className="text-ersPrimary">team</span>
          </Typography>
        </Box>
        <Box className="w-[90%] max-w-[100%] m-auto pt-[3rem] pb-[5rem] relative">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <Swiper
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            speed={2000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
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
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
              <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="container-img-box">
                <div className="container-inner !h-[220px] xl:!left-[0%] lg:!-left-[15%] md:!-left-[15%] sm:!left-1/2 xsm:!left-1/2 xxs:!left-1/2 xxxs:!left-1/2">
                  <div className="circle"></div>
                  <img
                    className="mask-img mask-img-one xl:!left-[27%] lg:!left-[33%] md:!left-[20%] sm:!left-[10%] xsm:!left-[18%] xxs:!left-[22%] xxxs:!left-[25%]"
                    src={TeamMember}
                    alt="..."
                  />
                </div>
              </Box>
              <Box className="block text-center">
                <Typography
                  variant="h5"
                  component={"h5"}
                  className="!text-xl  !font-[600] !font-[poppins]"
                >
                  John Doe
                </Typography>
                <Typography
                  variant="h6"
                  component={"h6"}
                  gutterBottom
                  className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                >
                  Chief Executive Officer
                </Typography>
              </Box>
            </SwiperSlide>
           
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default Team;
