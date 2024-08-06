import React,{useEffect,useRef} from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import P1 from "../assets/images/p1.png";
import P2 from "../assets/images/p2.png";
import P3 from "../assets/images/p3.png";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
function Projects() {
  const nextButtonRef = useRef();
const prevButtonRef = useRef()
  useEffect(() => {
    const handleMediaQuery = (mq) => {
      if (mq.matches) {
        nextButtonRef.current.style.setProperty("display", "none", "important");
        prevButtonRef.current.style.setProperty("display", "none", "important");
      } else {
        nextButtonRef.current.style.setProperty("right", "-80px", "important");
        prevButtonRef.current.style.setProperty("left", "-80px", "important");
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
      <Box className="container sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full relative mb-[2rem]">
        <Box className="block text-center pb-6 w-[70%] m-auto mb-8">
          <Typography
            className="capitalize !text-3xl !font-[500] !font-[poppins] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our Latest <span className="text-ersPrimary">Projects</span>
          </Typography>
          <Typography
            className="!text-base !font-[poppins] !font-[400]"
            variant="subtitle1"
            component={"p"}
            gutterBottom
          >
            We host any application on our secured cloud at nominal prices.
          </Typography>
        </Box>
        <Box className="projects-bg-img relative">
          <Box className="xl:w-[80%] lg:w-[80%] md:w-[80%] sm:w-[85%] xsm:w-full xxs:w-full xxxs:w-full max-w-[100%] m-auto position-setting">
            <div ref={nextButtonRef} className="swiper-button-next !text-white"></div>
            <div ref={prevButtonRef} className="swiper-button-prev !text-white"></div>
            <Swiper
              className="!pt-10 !pb-10 !px-[2rem]"
              effect="Cards"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              loop={true}
              modules={[Navigation, Autoplay, EffectFade]}
              speed={2000}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              spaceBetween={60}
              slidesPerView={3}
              onInit={(swiper) => {
                const nextButton = document.querySelector(".swiper-button-next");
                const prevButton = document.querySelector(".swiper-button-prev");
                if (nextButton && prevButton) {
                  nextButton.style.setProperty("right", "-80px", "important");
                  prevButton.style.setProperty("left", "-80px", "important");
                }
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                375: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                },
              }}
            >
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P1}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px]  text-white !text-base !font-[poppins] !font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P2}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px] !text-base !font-[poppins] !font-[400] text-white  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P3}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px] !text-base !font-[poppins] !font-[400] text-white font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P1}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px] !text-base !font-[poppins] !font-[400] text-white  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P2}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px] !text-base !font-[poppins] !font-[400] text-white  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box className="rounded-[10px] h-[400px] one-background">
                  <Box className="rounded-[10px] h-[400px] second-bg">
                    <img
                      src={P3}
                      className="object-cover img-style"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Box className="project-slider-content text-start pb-4 relative">
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-xl !font-[poppins] !font-[500] text-white !mb-4"
                  >
                    Wise1ne HRMS
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    gutterBottom
                    className="!text-base !font-[poppins] !font-[400] text-white !mb-6"
                  >
                    Find fault with a man who chooses to enjoy a pleasure that
                    has no annoying.
                  </Typography>
                  <Link
                    className="absolute -bottom-[10px]  text-white !text-base !font-[poppins] !font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Projects;
