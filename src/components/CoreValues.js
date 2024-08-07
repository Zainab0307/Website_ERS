import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import cv1 from "../assets/images/cv1.png";
import cv2 from "../assets/images/cv2.png";
import cv3 from "../assets/images/cv3.png";
import cv4 from "../assets/images/cv4.png";
import cv5 from "../assets/images/cv5.png";
import cv6 from "../assets/images/cv6.png";
import Qmark from "../assets/images/qmark.png";

import RequestQueryForm from "./RequestQueryForm";


function CoreValues() {

  return (
    <>
      <Box className="container sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full !mb-[5rem]">
        <Box className="relative h-[100px]">
          <Box className="dots-bg-img"></Box>
        </Box>
        <Box className="block text-center pb-14">
          <Typography
            className="capitalize !text-3xl !font-[500] !font-[poppins] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our <span className="text-ersPrimary">Core Values</span>
          </Typography>
        </Box>
        <Grid container xs={10} className="!mx-auto mb-16">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <List>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv1}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                          primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                          secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400]' }}  
                          className="!mt-0"
                          primary="Innovation"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv2}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                         primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                         secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400] ' }} 
                          className="!mt-0"
                          primary="Sincerety"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv3}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                         primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                         secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400]' }} 
                          className="!mt-0"
                          primary="Team Work"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv4}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                         primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                         secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400]' }} 
                          className="!mt-0"
                          primary="Excellence"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv5}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                         primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                         secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400]' }} 
                          className="!mt-0"
                          primary="Fast Delivery"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <ListItem>
                      <Box className="flex items-start justify-start gap-4">
                        <ListItemIcon className="justify-center">
                          <img
                            src={cv6}
                            className="w-[26px] block object-cover"
                             alt="..."
                          />
                        </ListItemIcon>
                        <ListItemText
                         primaryTypographyProps={{ className: '!text-xl !font-[poppins] !font-[500]' }}  
                         secondaryTypographyProps={{ className: '!text-base !font-[poppins] !font-[400]' }} 
                          className="!mt-0"
                          primary="Best Support"
                          secondary="Outside the box thinking is
a no-brainer for us"
                        />
                      </Box>
                    </ListItem>
                  </Grid>
                </Grid>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <img
                src={Qmark}
                className="w-full h-full object-cover"
                alt="..."
              />
            </Grid>
          </Grid>
        </Grid>
        <RequestQueryForm/>
      </Box>
    </>
  );
}

export default CoreValues;
