import React from "react";
import {
  Box,
  Divider,
  Grid,
  ListItem,
  List,
  Typography,
  Button,
} from "@mui/material";
import Support from "../assets/images/support.png";
import Team from "../assets/images/teamwork.png";
import Customdevelop from "../assets/images/graphic-design.png";
function priceTable() {
  return (
    <>
      <Box className="container sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full bg-[rgba(222,233,251,0.3)] pb-16 mb-16">
        <Box className="block text-center pt-8 pb-12 w-[70%] m-auto mb-8">
          <Typography
            className="capitalize !text-3xl !font-[500] !font-poppins text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            choose your <span className="text-ersPrimary">plan</span>
          </Typography>
          <Typography
            className="text-base !font-[400] !font-[poppins]"
            variant="subtitle1"
            component={"p"}
            gutterBottom
          >
            That are bound to ensue; and equal blame belongs to those who fail
            in their duty through weakness of will, which is the same as saying
            through
          </Typography>
        </Box>
        <Box className="w-[80%] max-w-full mx-auto">
          <Grid container spacing={2} rowGap={8} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className="bg-white shadow-xl rounded-[25px] mx-auto relative h-[500px] min-h-full ba z-[1]">
                <Box className="h-[70px]">
                  <Box className="w-[100px] h-[100px] rounded-[50px] flex justify-center items-center bg-gradient-to-b from-[#27B4EE] to-[#115DCE] ptable-circle">
                    <img
                      src={Support}
                      className="w-[50%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  className="text-center capitalize !text-xl !font-[500] !font-[poppins] !mb-0"
                >
                  Technical Support
                </Typography>
                <Box className="mx-4 py-4">
                  <Divider className="!border-[rgba(112,112,112,0.3)]" />
                </Box>
                <Box className="py-4 px-6">
                  <List className="price-list">
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Box className="text-center absolute bottom-0 left-[50%] transform -translate-x-[50%] -translate-y-[100%]">
                  <Button
                    type="button"
                    size="medium"
                    className="bg-gradient-to-r from-[#29BCF1] to-[#0F53CE] !text-white !text-sm !font-[400] !font-[poppins] !px-6 !rounded-[50px] !capitalize !w-[150px]"
                  >
                    get quote
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className="bg-white shadow-xl rounded-[25px] mx-auto relative h-[500px] min-h-full ba z-[1]">
                <Box className="h-[70px]">
                  <Box className="w-[100px] h-[100px] rounded-[50px] flex justify-center items-center bg-gradient-to-b from-[#27B4EE] to-[#115DCE] ptable-circle">
                    <img
                      src={Customdevelop}
                      className="w-[50%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  className="text-center capitalize !text-xl !font-[500] !font-[poppins] !mb-0"
                >
                  Custom Development
                </Typography>
                <Box className="mx-4 py-4">
                  <Divider className="!border-[rgba(112,112,112,0.3)]" />
                </Box>
                <Box className="py-4 px-6">
                  <List className="price-list">
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Box className="text-center absolute bottom-0 left-[50%] transform -translate-x-[50%] -translate-y-[100%]">
                  <Button
                    type="button"
                    size="medium"
                    className="bg-gradient-to-r from-[#29BCF1] to-[#0F53CE] !text-white !text-sm !font-[400] !font-[poppins] !px-6 !rounded-[50px] !capitalize !w-[150px]"
                  >
                    get quote
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4}>
              <Box className="bg-white shadow-xl rounded-[25px] mx-auto relative h-[650px] min-h-full ba z-[1]">
                <Box className="h-[70px]">
                  <Box className="w-[100px] h-[100px] rounded-[50px] flex justify-center items-center bg-gradient-to-b from-[#27B4EE] to-[#115DCE] ptable-circle">
                    <img
                      src={Team}
                      className="w-[50%] object-cover"
                      alt="..."
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  className="text-center capitalize !text-xl !font-[500] !font-[poppins] !mb-0"
                >
                  Hire A Dedicated Staff
                </Typography>
                <Box className="mx-4 py-4">
                  <Divider className="!border-[rgba(112,112,112,0.3)]" />
                </Box>
                <Box className="py-4 px-6">
                  <List className="price-list">
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                    <ListItem className="price-item">
                      <Typography
                        variant="subtitle2"
                        className="!font-[poppins] !font-[400] !text-base"
                      >
                        Technical Support
                      </Typography>
                    </ListItem>
                  </List>
                </Box>
                <Box className="text-center absolute bottom-0 left-[50%] transform -translate-x-[50%] -translate-y-[100%]">
                  <Button
                    type="button"
                    size="medium"
                    className="bg-gradient-to-r from-[#29BCF1] to-[#0F53CE] !text-sm !font-[400] !font-[poppins] !text-white !px-6 !rounded-[50px] !capitalize !w-[150px]"
                  >
                    get quote
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default priceTable;
