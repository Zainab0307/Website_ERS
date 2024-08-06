import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Weblogo from "../assets/images/web-dev.png";
import UIlogo from "../assets/images/UI.png";
import Applogo from "../assets/images/app.png";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";
function OurServices() {
  return (
    <>
      <Box className="container   sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full mb-[5rem]">
        <Box className="block text-center pb-6 w-[70%] m-auto mb-8">
          <Typography
            className="capitalize !text-3xl !font-[poppins] !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our <span className="text-ersPrimary">Services</span>
          </Typography>
          <Typography
            className="!text-base !font-[400]  !font-[poppins]"
            variant="subtitle1"
            component={"p"}
            gutterBottom
          >
            That are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through
          </Typography>
        </Box>
        <Box className="w-[80%] max-w-[100%] m-auto">
          <Grid container direction={"row"} justify="center" spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={Weblogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl !font-poppins !font-[500]  text-start"
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                    >
                      Web Development
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      Shrinking from toil and pain. These cases are perfectly
                      simple and easy to distinguish. In a free hour, when our
                      power.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={UIlogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl !font-poppins !font-[500] text-start"
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                    >
                      UI/UX Design
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      When nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary !font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={Applogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl   !font-poppins !font-[500] text-start"
                      variant="h6"                      component={"h6"}
                      gutterBottom
                    >
                      Mobile App development{" "}
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      But in certain circumstances and owing to the claims of
                      duty or the obligations of business it will frequently
                      occur.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary !font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={Weblogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl !font-[500] !font-poppins text-start"
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                    >
                     Software Development
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      Shrinking from toil and pain. These cases are perfectly
                      simple and easy to distinguish. In a free hour, when our
                      power.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={UIlogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl  !font-poppins font-[500] text-start"
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                    >
                      AI / Robotics
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      When nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary  flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Box className="card relative shadow p-4 rounded-[10px]">
                <Box className="card-body h-[300px] min-h-full">
                  <Box className="bg-[rgba(41,188,241,0.1)] rounded-[50%] w-[100px] h-[100px] flex justify-center items-center mb-6">
                    <img
                      src={Applogo}
                      className="w-[40%] object-cover"
                      alt="..."
                    />
                  </Box>
                  <Box className="block text-start">
                    <Typography
                      className="!text-xl !font-[500] !font-poppins  text-start"
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                    >
                    Blockchain Development
                    </Typography>
                    <Typography
                      className="!text-base !font-[400]  !font-[poppins] !leading-normal"
                      variant="subtitle1"
                      component={"p"}
                      gutterBottom
                    >
                      But in certain circumstances and owing to the claims of
                      duty or the obligations of business it will frequently
                      occur.
                    </Typography>
                  </Box>
                  <Link
                    className="absolute bottom-0 !text-base !font-[400]  !font-[poppins] text-ersPrimary !font-[400] flex items-center pb-4"
                    to="#"
                  >
                    Learn More &nbsp;
                    <MdArrowRightAlt size={20} />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default OurServices;
