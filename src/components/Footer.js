import React from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import logo from "../assets/images/white-logo.png";
import { Link } from "react-router-dom";
import { FaLinkedinIn,FaTwitter,FaInstagram,FaYoutube,FaPinterestP,FaFacebookF,FaWhatsapp  } from "react-icons/fa";




function Footer() {
  return (
    <>
      <Box className="container sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full bg-gradient-to-r to-[#0E51CD] from-[#29BCF1] pt-20 pb-10">
        <Box className="w-[90%] max-w-full mx-auto">
          <Box className="text-white">
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={6} lg={4}>
                <Box className="block text-start">
                  <img
                    src={logo}
                    className="w-[50%] object-cover pb-6"
                    alt="logo"
                  />
                  <Typography
                    variant="subtitle1"
                    component={"h6"}
                    gutterBottom
                    className=" !text-base  !font-[400] !font-[poppins]  !mb-0 !pb-6"
                  >
                    On the other hand, we denounce with righteous indignation
                    and dislike men.
                  </Typography>
                  <Typography
                    variant="h6"
                    component={"h6"}
                    gutterBottom
                    className="!text-base  !font-[600] !font-[poppins]  !pb-1"
                  >
                    Interested To Work With Us
                  </Typography>
                  <Box>
                    <form action="#" className="subscription-form">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="subscription-input !text-sm  !font-[400] !font-[poppins] "
                        required
                      />
                      <button
                        type="submit"
                        className="subscription-button shadow-xl !text-base !font-[400] !font-[poppins]"
                      >
                        Send
                      </button>
                    </form>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={2}>
                <Box className="text-start">
                  <Typography
                    variant="h4"
                    component={"h4"}
                    gutterBottom
                    className="!text-xl !font-[600] !font-poppins"
                  >
                    Company
                  </Typography>
                  <List>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="/about-us"
                        className="!text-base !font-[400] !font-poppins capitalize"
                      >
                        about us
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="/portfolio"
                        className="!text-base !font-[400] !font-poppins capitalize"
                      >
                        Protfolio
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="/careers"
                        className="!text-base !font-[400] !font-poppins capitalize"
                      >
                        Careers
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="/blogs"
                        className="!text-base !font-[400] !font-poppins capitalize"
                      >
                        Blogs
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Box className="text-start">
                  <Typography
                    variant="h4"
                    component={"h4"}
                    gutterBottom
                    className="!text-xl !font-[600] !font-[poppins]"
                  >
                    Services
                  </Typography>
                  <List>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="#"
                        className="!text-base !font-[400] !font-[poppins] capitalize"
                      >
                        Web Development
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="#"
                        className="!text-base !font-[400] !font-[poppins] capitalize"
                      >
                        Mobile App Development
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="#"
                        className="!text-base !font-[400] !font-[poppins] capitalize"
                      >
                        Software Development
                      </Link>
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                      <Link
                        to="#"
                        className="!text-base !font-[400] !font-poppins capitalize"
                      >
                        UI/UX Development
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={3}>
                <Box className="text-start">
                  <Typography
                    variant="h4"
                    component={"h4"}
                    gutterBottom
                    className="!text-xl !font-[600] !font-poppins"
                  >
                    Contact
                  </Typography>
                  <List>
                    <ListItem className="!pl-0 !py-3">
                      <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            component={"p"}
                            className="!text-base !font-[400] !font-poppins capitalize"
                          >
                            Divine Mega 2, Office 226, 2nd Floor, Airport Rd.
                            Lahore, Pakistan
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                    <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            component={"p"}
                            className="!text-base !font-[400] !font-poppins capitalize"
                          >
                           Email: info@erstech.org
                          </Typography>
                        }
                      />
                    </ListItem>
                    <ListItem className="!pl-0 !py-3">
                    <ListItemText
                        primary={
                          <Typography
                            variant="subtitle1"
                            component={"p"}
                            className="!text-base !font-[400] !font-poppins capitalize"
                          >
                          +923001420033
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box className="w-[60%] max-w-full mx-auto">
            <Divider className="!my-10 !border-white opacity-20"/>
            <List className="flex items-center justify-center !mb-6">
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaLinkedinIn color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaTwitter color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaInstagram color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaYoutube color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaPinterestP color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaFacebookF color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
              <ListItem className="xl:!w-[10%] lg:!w-[10%] md:!w-[10%] sm:!w-[10%] xsm:!w-[20%] xxs:!w-[20%] xxxs:!w-[25%]">
                <Link to="#">
                  <Box  className="w-[35px] h-[35px] border-[2px] border-white flex items-center justify-center rounded-[7px]">
                  <FaWhatsapp color="#fff" size={20}/>
                  </Box>
                </Link>
              </ListItem>
            </List>
            <Typography variant="subtitle1" component={'p'} className="!text-sm  !font-[400] !font-poppins text-center text-white">
              &copy;2023 ERS TECH All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
 