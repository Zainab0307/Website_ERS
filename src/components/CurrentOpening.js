import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
function CurrentOpening() {
  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full bg-[rgba(222,233,251,0.2)] py-10">
        <Box className="block text-center pb-10">
          <Typography
            className="capitalize !text-3xl !font-poppins !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Current&nbsp;<span className="text-ersPrimary">Openings</span>
          </Typography>
        </Box>
        <Box className="w-[90%] max-w-full mx-auto relative mt-6">
          <Grid container spacing={4} pb={8}>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={4}>
              <Box className="job-card-box">
                <Box className="job-card p-6">
                  <Box className="pl-8 mb-4">
                    <Typography
                      variant="h5"
                      component={"h5"}
                      gutterBottom
                      className="!text-[18px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      react js developer
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[15px] !font-[400] !font-[poppins] !capitalize !mb-3"
                    >
                      Experience 2+ Years
                    </Typography>
                    <Typography
                      variant="h6"
                      component={"h6"}
                      gutterBottom
                      className="!text-[14px] !text-gray-500 !font-[400] !font-[poppins] !capitalize flex items-center"
                    >
                      <FaLocationDot color="#000" />
                      &nbsp; lahore,pakistan
                    </Typography>
                  </Box>
                  <Box className="flex justify-end items-center">
                    <Link
                      to=""
                      target="_blank"
                      className="capitalize !text-[15px] !text-ersPrimary !font-[400] !font-[poppins]"
                      style={{ borderBottom: "2px solid #26AFED" }}
                    >
                      apply now
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box className="flex justify-center items-center">
            <Typography
              variant="h5"
              component={"h5"}
              display={"block"}
              gutterBottom
              className="!text-[16px] !font-[400] !font-[poppins] capitalize !flex items-center tracking-wide"
            >
              Other Field? &nbsp;
              <Link
                to="#"
                className="!text-[14px] !font-[400] !font-[poppins] text-ersPrimary capitalize"
              >
                apply now
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CurrentOpening;
