import React,{useEffect,useRef} from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import TopLeft from "../assets/images/top-left.png";
import BottomRight from "../assets/images/bottom-right.png";
import TeamMember from "../assets/images/abrar.png";

function ClientsAboutUs({ Heading }) {
const nextButtonRef = useRef();
const prevButtonRef = useRef()


  useEffect(() => {
    const handleMediaQuery = (mq) => {
      if (mq.matches) {
        nextButtonRef.current.style.setProperty("display", "none", "important");
        prevButtonRef.current.style.setProperty("display", "none", "important");
      } else {
        nextButtonRef.current.style.setProperty("right", "-50px", "important");
        prevButtonRef.current.style.setProperty("left", "-50px", "important");
      }
    };

    const mediaQuery = window.matchMedia('(max-width: 600px)');
    handleMediaQuery(mediaQuery);
    mediaQuery.addListener(handleMediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQuery);
    };
  }, []);



  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full bg-[rgba(222,233,251,0.3)] py-20 xl:px-6 lg:px-6 md:px-6 sm:px-4 xsm:px-2 xxs:px-2 xxxs:px-2">
        <Box className="block text-center pb-6">
          <Typography
            className="capitalize !text-3xl !font-[500] !font-[poppins] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            {Heading}&nbsp;
            <span className="text-ersPrimary">About Us</span>
          </Typography>
        </Box>
        <Box className="xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full xsm:w-full xxs:w-full xxxs:w-full max-w-[100%] m-auto relative">
          <div ref={nextButtonRef} className="swiper-button-next"></div>
          <div ref={prevButtonRef} className="swiper-button-prev"></div>
          <Swiper
            className="bg-white border-2 border-[#C1ECFB] w-full !rounded-[20px] shadow-lg !py-12 !px-6"
            effect="Cards"
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            speed={3000}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            showsPagination={true}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            scrollbar={{ draggable: true }}
            spaceBetween={40}
            slidesPerView={1}
            onInit={(swiper) => {
              const nextButton = document.querySelector(".swiper-button-next");
              const prevButton = document.querySelector(".swiper-button-prev");
              if (nextButton && prevButton) {
                nextButton.style.setProperty("right", "-50px", "important");
                prevButton.style.setProperty("left", "-50px", "important");
              }
            }}
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              680: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
          >
            {/* <Box className="bg-white border-2 border-[#C1ECFB] w-full rounded-[14px] shadow-lg py-8 px-4"></Box> */}

            <SwiperSlide>
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
                  className="!text-base !font-[400] !font-[poppins] !pb-6"
                >
                  ERS TECH has been an integral part of our strategic vision,
                  and since our launch, the market's response has been
                  exceptionally positive. We are committed to an ongoing pursuit
                  of delivering superior, stable, and enhanced digital products,
                  all with the goal of making a meaningful impact in the
                  ever-expanding technology landscape. In a world undergoing a
                  rapid digital transformation amidst constant change, our
                  mission is to fortify the digital presence of businesses and
                  enterprises by providing them with robust and successful tech
                  infrastructures.
                </Typography>
                <Box className="flex justify-end items-start">
                  <img
                    src={BottomRight}
                    className="w-[30px] object-cover"
                    alt="..."
                  />
                </Box>
                <Box className="flex items-center gap-4 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xsm:flex-wrap xxs:flex-wrap xxxs:flex-wrap">
                  <Box className="h-[50px] w-[50px] bg-gradient-to-r from-[#29BCF1] to-[#1057CF] rounded-[50%] flex justify-center items-center overflow-hidden">
                    <img
                      src={TeamMember}
                      className="w-[30px] object-cover translate-y-[4px]"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start ">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      className="!text-base  !font-[500] !font-[poppins]"
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component={"p"}
                      className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                    >
                      Chief Executive Officer{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
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
                  className="!text-base !font-[400] !font-[poppins] !pb-6"
                >
                  ERS TECH has been an integral part of our strategic vision,
                  and since our launch, the market's response has been
                  exceptionally positive. We are committed to an ongoing pursuit
                  of delivering superior, stable, and enhanced digital products,
                  all with the goal of making a meaningful impact in the
                  ever-expanding technology landscape. In a world undergoing a
                  rapid digital transformation amidst constant change, our
                  mission is to fortify the digital presence of businesses and
                  enterprises by providing them with robust and successful tech
                  infrastructures.
                </Typography>
                <Box className="flex justify-end items-start">
                  <img
                    src={BottomRight}
                    className="w-[30px] object-cover"
                    alt="..."
                  />
                </Box>
                <Box className="flex items-center gap-4 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xsm:flex-wrap xxs:flex-wrap xxxs:flex-wrap">
                  <Box className="h-[50px] w-[50px] bg-gradient-to-r from-[#29BCF1] to-[#1057CF] rounded-[50%] flex justify-center items-center overflow-hidden">
                    <img
                      src={TeamMember}
                      className="w-[30px] object-cover translate-y-[4px]"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start ">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      className="!text-base  !font-[500] !font-[poppins]"
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component={"p"}
                      className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                    >
                      Chief Executive Officer{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
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
                  className="!text-base !font-[400] !font-[poppins] !pb-6"
                >
                  ERS TECH has been an integral part of our strategic vision,
                  and since our launch, the market's response has been
                  exceptionally positive. We are committed to an ongoing pursuit
                  of delivering superior, stable, and enhanced digital products,
                  all with the goal of making a meaningful impact in the
                  ever-expanding technology landscape. In a world undergoing a
                  rapid digital transformation amidst constant change, our
                  mission is to fortify the digital presence of businesses and
                  enterprises by providing them with robust and successful tech
                  infrastructures.
                </Typography>
                <Box className="flex justify-end items-start">
                  <img
                    src={BottomRight}
                    className="w-[30px] object-cover"
                    alt="..."
                  />
                </Box>
                <Box className="flex items-center gap-4 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xsm:flex-wrap xxs:flex-wrap xxxs:flex-wrap">
                  <Box className="h-[50px] w-[50px] bg-gradient-to-r from-[#29BCF1] to-[#1057CF] rounded-[50%] flex justify-center items-center overflow-hidden">
                    <img
                      src={TeamMember}
                      className="w-[30px] object-cover translate-y-[4px]"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start ">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      className="!text-base  !font-[500] !font-[poppins]"
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component={"p"}
                      className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                    >
                      Chief Executive Officer{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
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
                  className="!text-base !font-[400] !font-[poppins] !pb-6"
                >
                  ERS TECH has been an integral part of our strategic vision,
                  and since our launch, the market's response has been
                  exceptionally positive. We are committed to an ongoing pursuit
                  of delivering superior, stable, and enhanced digital products,
                  all with the goal of making a meaningful impact in the
                  ever-expanding technology landscape. In a world undergoing a
                  rapid digital transformation amidst constant change, our
                  mission is to fortify the digital presence of businesses and
                  enterprises by providing them with robust and successful tech
                  infrastructures.
                </Typography>
                <Box className="flex justify-end items-start">
                  <img
                    src={BottomRight}
                    className="w-[30px] object-cover"
                    alt="..."
                  />
                </Box>
                <Box className="flex items-center gap-4 xl:flex-nowrap lg:flex-nowrap md:flex-nowrap sm:flex-wrap xsm:flex-wrap xxs:flex-wrap xxxs:flex-wrap">
                  <Box className="h-[50px] w-[50px] bg-gradient-to-r from-[#29BCF1] to-[#1057CF] rounded-[50%] flex justify-center items-center overflow-hidden">
                    <img
                      src={TeamMember}
                      className="w-[30px] object-cover translate-y-[4px]"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start ">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      className="!text-base  !font-[500] !font-[poppins]"
                    >
                      John Doe
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component={"p"}
                      className="!text-base !font-[400] !font-[poppins] !text-ersPrimary"
                    >
                      Chief Executive Officer{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>

            {/* <SwiperSlide>
              <Box className="bg-white border-2 border-[#C1ECFB] w-full rounded-[14px] shadow-lg py-8 px-4">
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
                    className="!text-[14px] !font-poppins !pb-6"
                  >
                    ERS TECH has been an integral part of our strategic vision,
                    and since our launch, the market's response has been
                    exceptionally positive. We are committed to an ongoing
                    pursuit of delivering superior, stable, and enhanced digital
                    products, all with the goal of making a meaningful impact in
                    the ever-expanding technology landscape. In a world
                    undergoing a rapid digital transformation amidst constant
                    change, our mission is to fortify the digital presence of
                    businesses and enterprises by providing them with robust and
                    successful tech infrastructures.
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
                        className="w-[30px] object-cover translate-y-[4px]"
                      />
                    </Box>
                    <Box className="text-end">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-[13px] !font-[600] !font-poppins"
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component={"p"}
                        className="!text-[12px] !font-[300] !font-poppins !text-ersPrimary"
                      >
                        Chief Executive Officer{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="bg-white border-2 border-[#C1ECFB] w-full rounded-[14px] shadow-lg py-8 px-4">
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
                    className="!text-[14px] !font-poppins !pb-6"
                  >
                    ERS TECH has been an integral part of our strategic vision,
                    and since our launch, the market's response has been
                    exceptionally positive. We are committed to an ongoing
                    pursuit of delivering superior, stable, and enhanced digital
                    products, all with the goal of making a meaningful impact in
                    the ever-expanding technology landscape. In a world
                    undergoing a rapid digital transformation amidst constant
                    change, our mission is to fortify the digital presence of
                    businesses and enterprises by providing them with robust and
                    successful tech infrastructures.
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
                        className="w-[30px] object-cover translate-y-[4px]"
                      />
                    </Box>
                    <Box className="text-end">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-[13px] !font-[600] !font-poppins"
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component={"p"}
                        className="!text-[12px] !font-[300] !font-poppins !text-ersPrimary"
                      >
                        Chief Executive Officer{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="bg-white border-2 border-[#C1ECFB] w-full rounded-[14px] shadow-lg py-8 px-4">
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
                    className="!text-[14px] !font-poppins !pb-6"
                  >
                    ERS TECH has been an integral part of our strategic vision,
                    and since our launch, the market's response has been
                    exceptionally positive. We are committed to an ongoing
                    pursuit of delivering superior, stable, and enhanced digital
                    products, all with the goal of making a meaningful impact in
                    the ever-expanding technology landscape. In a world
                    undergoing a rapid digital transformation amidst constant
                    change, our mission is to fortify the digital presence of
                    businesses and enterprises by providing them with robust and
                    successful tech infrastructures.
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
                        className="w-[30px] object-cover translate-y-[4px]"
                      />
                    </Box>
                    <Box className="text-end">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-[13px] !font-[600] !font-poppins"
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component={"p"}
                        className="!text-[12px] !font-[300] !font-poppins !text-ersPrimary"
                      >
                        Chief Executive Officer{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box className="bg-white border-2 border-[#C1ECFB] w-full rounded-[14px] shadow-lg py-8 px-4">
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
                    className="!text-[14px] !font-poppins !pb-6"
                  >
                    ERS TECH has been an integral part of our strategic vision,
                    and since our launch, the market's response has been
                    exceptionally positive. We are committed to an ongoing
                    pursuit of delivering superior, stable, and enhanced digital
                    products, all with the goal of making a meaningful impact in
                    the ever-expanding technology landscape. In a world
                    undergoing a rapid digital transformation amidst constant
                    change, our mission is to fortify the digital presence of
                    businesses and enterprises by providing them with robust and
                    successful tech infrastructures.
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
                        className="w-[30px] object-cover translate-y-[4px]"
                      />
                    </Box>
                    <Box className="text-end">
                      <Typography
                        variant="h6"
                        component={"h6"}
                        className="!text-[13px] !font-[600] !font-poppins"
                      >
                        John Doe
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        component={"p"}
                        className="!text-[12px] !font-[300] !font-poppins !text-ersPrimary"
                      >
                        Chief Executive Officer{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide> */}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default ClientsAboutUs;
