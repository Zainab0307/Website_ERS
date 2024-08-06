import React, { useState, useEffect } from "react";
import { Box, Divider, Typography, Button, Grid, Tab } from "@mui/material";
import aboutOneImg from "../assets/images/about-h-img.png";
import RTwoImg from "../assets/images/hero-graphic-two.png";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  indicator: {
    backgroundColor: "#fff !important",
    height: "3px !important",
  },
});

function Hero() {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [count, setCount] = useState(0);
  const [years, setYears] = useState(0);
  const targetCount = 50;
  const ExpCount = 9;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount === targetCount) {
          clearInterval(interval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 20);

    const Expinterval = setInterval(() => {
      setYears((prevCount) => {
        if (prevCount === ExpCount) {
          clearInterval(Expinterval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 20);

    return () => {
      clearInterval(interval);
      clearInterval(Expinterval);
    };
  }, []);

  return (
    <>
      <Box className="hero-bg !mb-[0rem] overflow-x-hidden">
        <Box className="container xl:px-10 lg:px-10 md:px-10 sm:px-4 xsm:px-4 xxs:px-4 xxxs:px-4">
          <Box className="relative xl:h-[700px] lg:h-[700px] md:h-[700px] sm:h-[600px]  xsm:h-[600px] xxs:h-[600px] xxxs:h-[600px]">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={12} lg={6}>
                <Box className="about-hero-content-box">
                  <Button className="shadow-xl !w-[150px] !rounded-[50px] !bg-white !text-sm !font-poppins !font-[400] !text-[#3CB7EE] !capitalize xl:!mb-12 lg:!mb-12 md:!mb-12 sm:!mb-6 xsm:!mb-4 xxs:!mb-4 xxxs:!mb-4">
                    about us
                  </Button>

                  <Typography
                    className="!text-white xl:!text-6xl lg:!text-5xl md:!text-4xl sm:!text-2xl xsm:!text-2xl xxs:!text-2xl xxxs:!text-2xl !font-[600] uppercase !mb-4 !font-poppins"
                    variant="h1"
                    component="h1"
                    gutterBottom
                  >
                    Your Partner for <br />
                    Software Innovation
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component={"p"}
                    className="xl:!text-sm lg:!text-[12px] md:!text-[11px] sm:!text-[12px] xsm:!text-[10px] xxs:!text-[10px] xxxs:!text-[10px] !font-[400] !font-poppins !capitalize text-white xl:w-[55%] lg:w-[55%] md:w-[55%] sm:w-full xsm:w-full xxs:w-full xxxs:w-full !mb-4"
                  >
                    We offer an IT guide to a vast variety of organizations
                    throughout the world. We continue to provide strategic value
                    in the days, weeks & years after the launch of the product.
                  </Typography>
                  <Box sx={{ width: "100%" }}>
                    <TabContext value={value}>
                      <Box>
                        <TabList
                          onChange={handleChange}
                          aria-label="lab API tabs example"
                          classes={{ indicator: classes.indicator }}
                        >
                          <Tab
                            label={
                              <Typography
                                variant="h6"
                                component={"h6"}
                                className="!text-lg !font-[500] !font-poppins !text-white"
                              >
                                Our Mission
                              </Typography>
                            }
                            value="1"
                          />
                          <Tab
                            label={
                              <Typography
                                variant="h6"
                                component={"h6"}
                                className="!text-lg !font-[500] !font-poppins !text-white"
                              >
                                Our Vission
                              </Typography>
                            }
                            value="2"
                          />
                          <Tab
                            label={
                              <Typography
                                variant="h6"
                                component={"h6"}
                                className="!text-lg !font-[500] !font-poppins !text-white"
                              >
                                Our Value
                              </Typography>
                            }
                            value="3"
                          />
                        </TabList>
                      </Box>
                      <TabPanel value="1">
                        <Typography
                          variant="subtitle1"
                          component={"p"}
                          className="xl:!text-sm lg:!text-[12px] md:!text-[12px] sm:!text-[12px] xsm:!text-[10px] xxs:!text-[10px] xxxs:!text-[10px] !font-[400] !font-poppins !text-white xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full xsm:w-full xxs:w-full xxxs:w-full"
                        >
                          By offering insight & candid counsel at every stage of
                          the engagement, we consider ourselves to be a partner
                          and not just a vendor. We are the best in Android App
                          Development, BlockChain Solutions, Hybrid Apps
                          Development, Website Development, WordPress
                          Development, and Software Development. Our focus on
                          research on new products and solutions enables us to
                          cope with the constantly changing market technology.
                        </Typography>
                      </TabPanel>
                      <TabPanel value="2">
                      <Typography
                          variant="subtitle1"
                          component={"p"}
                          className="xl:!text-sm lg:!text-[12px] md:!text-[12px] sm:!text-[12px] xsm:!text-[10px] xxs:!text-[10px] xxxs:!text-[10px] !font-[400] !font-poppins !text-white xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full xsm:w-full xxs:w-full xxxs:w-full"
                        >
                          By offering insight & candid counsel at every stage of
                          the engagement, we consider ourselves to be a partner
                          and not just a vendor. We are the best in Android App
                          Development, BlockChain Solutions, Hybrid Apps
                          Development, Website Development, WordPress
                          Development, and Software Development. Our focus on
                          research on new products and solutions enables us to
                          cope with the constantly changing market technology.
                        </Typography>
                      </TabPanel>
                      <TabPanel value="3">
                      <Typography
                          variant="subtitle1"
                          component={"p"}
                          className="xl:!text-sm lg:!text-[12px] md:!text-[12px] sm:!text-[12px] xsm:!text-[10px] xxs:!text-[10px] xxxs:!text-[10px] !font-[400] !font-poppins !text-white xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-full xsm:w-full xxs:w-full xxxs:w-full"
                        >
                          By offering insight & candid counsel at every stage of
                          the engagement, we consider ourselves to be a partner
                          and not just a vendor. We are the best in Android App
                          Development, BlockChain Solutions, Hybrid Apps
                          Development, Website Development, WordPress
                          Development, and Software Development. Our focus on
                          research on new products and solutions enables us to
                          cope with the constantly changing market technology.
                        </Typography>
                      </TabPanel>
                    </TabContext>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} >
                <Box className="xl:block lg:block md:block sm:hidden xsm:hidden xxs:hidden xxxs:hidden ">
                  <Box className="xl:h-[400px] lg:h-[330px] md:h-[300px] xl:w-[420px] lg:w-[350px] md:w-[280px]  bg-white border-[3px] border-[rgba(41,188,241,0.6)] rounded-[10px] right-one-visual flex justify-center items-center z-[1] xl:!top-[50%] lg:!top-[45%] md:!top-[48%] xl:!-right-[7%] lg:!-right-[2%] md:!-right-[5%]">
                    <img
                      src={aboutOneImg}
                      className="w-[95%] object-cover"
                      alt=".."
                    />
                    <Box className="h-[100px] w-[90%] mx-auto bg-white border-[3px] border-[rgba(41,188,241,0.6)] rounded-[14px] absolute xl:-bottom-[12%] lg:-bottom-[18%] md:-bottom-[25%] right-[5%] z-[1]">
                      <Box className="p-4 flex items-center justify-around gap-4">
                        <Box className="grid place-items-center place-content-center text-center">
                          <Typography
                            variant="h6"
                            component={"h6"}
                            className="!text-2xl !font-[500] !font-poppins"
                          >
                            0{years}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            component={"p"}
                            className="!text-[12px] !font-[400] !font-poppins !leading-tight"
                          >
                            Years of <br /> Experience
                          </Typography>
                        </Box>
                        <Box className="h-full">
                          <Box
                            style={{
                              borderRight: "1px solid #B7B7B7",
                              height: "65px",
                            }}
                          ></Box>
                        </Box>
                        <Box className="grid place-items-center place-content-center text-center">
                          <Typography
                            variant="h6"
                            component={"h6"}
                            className="!text-2xl !font-[500] !font-poppins"
                          >
                            {count}+
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            component={"p"}
                            className="!text-[12px] !font-[400] !font-poppins !leading-tight"
                          >
                            Team of <br /> Experts
                          </Typography>
                        </Box>
                      </Box>
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

export default Hero;
