import React from "react";
import { Box, Typography } from "@mui/material";
import CLD10 from "../assets/images/CLD-10.png";
import CLD9 from "../assets/images/CLD-09.png";
import CLD8 from "../assets/images/CLD-08.png";
import CLD7 from "../assets/images/CLD-07.png";
import CLD6 from "../assets/images/CLD-06.png";
import CLD5 from "../assets/images/CLD-05.png";
import CLD4 from "../assets/images/CLD-04.png";
import CLD3 from "../assets/images/CLD-03.png";
import CLD2 from "../assets/images/CLD-02.png";
import CLD1 from "../assets/images/CLD-01.png";

function TrustedBy() {
  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full mb-[5rem] relative">
        <Box className="logo-slider">
          <Box className="block text-center pb-6">
            <Typography
              className="capitalize !text-3xl !font-[poppins] !font-[500] text-center"
              variant="h2"
              component={"h2"}
              gutterBottom
            >
              Trusted <span className="text-ersPrimary">By</span>
            </Typography>
          </Box>
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
                <img src={CLD5} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD4} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD3} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD2} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD1} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD6} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD7} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD8} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD9} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD10} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD5} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD4} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD3} height="100" width="250" alt="" />
              </div>
              <div class="slide">
                <img src={CLD2} height="100" width="250" alt="" />
              </div>
            </div>
          </div>
          <div class="slider-left">
            <div class="slide-track-left">
              <div class="slide-left">
                <img src={CLD5} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD4} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD3} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD2} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD1} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD6} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD7} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD8} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD9} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD10} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD5} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD4} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD3} height="100" width="250" alt="" />
              </div>
              <div class="slide-left">
                <img src={CLD2} height="100" width="250" alt="" />
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default TrustedBy;
