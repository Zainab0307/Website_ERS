import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Feature from "../assets/images/portfolio-img.png";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import CircleLoader from "../utils/CircleLoader";
import { ImCalendar } from "react-icons/im";
import { MdArrowRightAlt } from "react-icons/md";

function FeaturedBlogs() {
  const [selected, setSelected] = useState({
    all: true,
    appdevelopment: false,
    webdevelopment: false,
    softwaredevelopment: false,
    blockchaindevelopment: false,
  });

  const handleProtfolio = (id) => {
    switch (id) {
      case "all":
        setSelected({
          all: true,
          appdevelopment: false,
          webdevelopment: false,
          softwaredevelopment: false,
          blockchaindevelopment: false,
        });
        break;
      case "appdevelopment":
        setSelected({
          all: false,
          appdevelopment: true,
          webdevelopment: false,
          softwaredevelopment: false,
          blockchaindevelopment: false,
        });
        break;
      case "webdevelopment":
        setSelected({
          all: false,
          appdevelopment: false,
          webdevelopment: true,
          softwaredevelopment: false,
          blockchaindevelopment: false,
        });
        break;
      case "softwaredevelopment":
        setSelected({
          all: false,
          appdevelopment: false,
          webdevelopment: false,
          softwaredevelopment: true,
          blockchaindevelopment: false,
        });
        break;
      case "blockchaindevelopment":
        setSelected({
          all: false,
          appdevelopment: false,
          webdevelopment: false,
          softwaredevelopment: false,
          blockchaindevelopment: true,
        });
        break;
      default:
        setSelected({
          all: true,
          appdevelopment: false,
          webdevelopment: false,
          softwaredevelopment: false,
          blockchaindevelopment: false,
        });
    }
  };

  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full mt-[3rem] mb-20">
        <Box className="block text-center pb-6 w-[70%] m-auto mb-8">
          <Typography
            className="capitalize !text-3xl !font-poppins !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our Featured&nbsp;<span className="text-ersPrimary">Blogs</span>
          </Typography>
          <Typography
            className="!text-base !font-[400] !font-[poppins]"
            variant="subtitle1"
            component={"p"}
            gutterBottom
          >
            That are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through
          </Typography>
        </Box>
        <Box className="w-[90%] max-w-full mx-auto pt-10">
          <Box className="flex items-center justify-evenly flex-wrap mb-20 xl:gap-0 lg:gap-0 md:gap-4 sm:gap-4 xsm:gap-4 xxs:gap-4 xxxs:gap-4">
            <button
              type="button"
              onClick={() => handleProtfolio("all")}
              className={`!capitalize !text-xl !font-[400] !font-[poppins] !text-black block border-active hover:!text-ersPrimary ${
                selected?.all ? "border-actived !text-ersPrimary" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleProtfolio("appdevelopment")}
              className={`!capitalize !text-xl !font-[400] !font-[poppins] !text-black block border-active hover:!text-ersPrimary ${
                selected?.appdevelopment
                  ? "border-actived !text-ersPrimary"
                  : ""
              }`}
            >
              App Development
            </button>
            <button
              onClick={() => handleProtfolio("webdevelopment")}
              type="button"
              className={`!capitalize !text-xl !font-[400] !font-[poppins] !text-black block border-active hover:!text-ersPrimary ${
                selected?.webdevelopment
                  ? "border-actived !text-ersPrimary"
                  : ""
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => handleProtfolio("softwaredevelopment")}
              type="button"
              className={`!capitalize !text-xl !font-[400] !font-[poppins] !text-black block border-active hover:!text-ersPrimary ${
                selected?.softwaredevelopment
                  ? "border-actived !text-ersPrimary"
                  : ""
              }`}
            >
              Software development
            </button>
            <button
              onClick={() => handleProtfolio("blockchaindevelopment")}
              type="button"
              className={`!capitalize !text-xl !font-[400] !font-[poppins] !text-black block border-active hover:!text-ersPrimary ${
                selected?.blockchaindevelopment
                  ? "border-actived !text-ersPrimary"
                  : ""
              }`}
            >
              BlockChain Development
            </button>
          </Box>
          <Box className="h-full mb-32">
            <Grid
              container
              spacing={6}
              className={selected.all ? "block" : "!hidden"}
            >
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              className={selected.webdevelopment ? "block" : "!hidden"}
            >
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              className={selected.appdevelopment ? "block" : "!hidden"}
            >
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              className={selected.softwaredevelopment ? "block" : "!hidden"}
            >
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={6}
              className={selected.blockchaindevelopment ? "block" : "!hidden"}
            >
                 <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="h-[500px] min-h-full relative">
                  <Box className="block w-full h-[250px] mb-6 mx-auto rounded-[20px] relative z-[1]">
                    <img
                      src={Feature}
                      className="w-full h-full rounded-[20px] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="text-start blog-content-box px-4">
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-lg !font-[400] !font-[poppins] capitalize !mb-4"
                    >
                      FocusMonk
                    </Typography>
                    <Typography
                      variant="body2"
                      gutterBottom
                      display={"block"}
                      className="!text-textcolor !font-[400] !text-sm !font-[poppins]"
                    >
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat, sed diam voluptua. At vero eos et
                    </Typography>
                    <Box className="flex justify-between items-center absolute bottom-[20px] w-[90%] h-[20px]">
                      <Typography
                        variant="caption"
                        gutterBottom
                        className="!font-[400] !text-sm  !font-[poppins] !flex items-center gap-1"
                      >
                        <ImCalendar size={18} color="#25A9EB"  />
                        &nbsp;23-Nov-23
                      </Typography>
                      <Link
                        to="#"
                        className="!text-sm  text-ersPrimary capitalize !font-[400] !font-[poppins] flex items-center read-more-btn"
                      >
                        read more&nbsp;
                        <MdArrowRightAlt
                          size={23}
                          className="arrow-read-more"
                        />
                      </Link>
                    </Box>
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

export default FeaturedBlogs;
