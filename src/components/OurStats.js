import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Pen from "../assets/images/pen.png";
import Search from "../assets/images/search.png";
import Avatar from "../assets/images/avatar.png";
import Graph from "../assets/images/graph.png";
import Menu from "../assets/images/menu.png";

function OurStats() {
  const [projects, setProjects] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [members, setMembers] = useState(0);
  const [clients, setClients] = useState(0);
  const [customer, setCustomer] = useState(0);

  const totalProject = 600;
  const totalReviews = 100;
  const totalMembers = 50;
  const totalclients = 100;
  const totalCustomer = 97;

  useEffect(() => {
    const projectinterval = setInterval(() => {
      setProjects((prevCount) => {
        if (prevCount === totalProject) {
          clearInterval(projectinterval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 20);

    const Reviewinterval = setInterval(() => {
      setReviews((prevCount) => {
        if (prevCount === totalReviews) {
          clearInterval(Reviewinterval);
          return prevCount;
        }
        return prevCount + 1;
      });
    }, 20);

    const Memberinterval = setInterval(() => {
        setMembers((prevCount) => {
          if (prevCount === totalMembers) {
            clearInterval(Memberinterval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 20);

      const Clientinterval = setInterval(() => {
        setClients((prevCount) => {
          if (prevCount === totalclients) {
            clearInterval(Clientinterval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 20);

      const Customerinterval = setInterval(() => {
        setCustomer((prevCount) => {
          if (prevCount === totalCustomer) {
            clearInterval(Customerinterval);
            return prevCount;
          }
          return prevCount + 1;
        });
      }, 20);


    return () => {
      clearInterval(projectinterval);
      clearInterval(Reviewinterval);
      clearInterval(Memberinterval);
      clearInterval(Clientinterval);
      clearInterval(Customerinterval);
    };
  }, []);

  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full bg-[rgba(222,233,251,0.3)] Main_stats_row !mb-[5rem]">
        <Box className="block text-center py-6">
          <Typography
            className="capitalize !text-3xl !font-[500] !font-poppins text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our <span className="text-ersPrimary">Stats</span>
          </Typography>
        </Box>
        <Box className="custom-statistics">
          <Box className="stats_box_inner">
            <Box class="custom-stats-section container-stat-box flex justify-center mt-5 pt-5">
              <Box class="ap_search_img">
                <div class="custom-circle">
                  <strong>09</strong>
                  <p className="!font-[400] !font-poppins !text-xl">
                    Glorious <br /> Years
                  </p>
                </div>
                <div class="custom-boxes">
                  <div class="custom-box box-1">
                    <img class="stat-img-lazyloaded" src={Pen} alt="..." />
                    <div class="custom-values">
                      <div class="row-align">
                        <p>{projects}</p> <span>+</span>
                      </div>
                      <strong className="!font-[400] !font-poppins !text-xl"> Projects Completed</strong>
                    </div>
                  </div>
                  <div class="custom-box box-2">
                    <img class="stat-img-lazyloaded" src={Search} alt="..." />
                    <div class="custom-values">
                      <div class="row-align">
                        <p>{reviews}</p> <span>+</span>
                      </div>
                      <strong className="!font-[400] !font-poppins !text-xl">Positive Reviews</strong>
                    </div>
                  </div>
                  <div class="custom-box box-5">
                    <img class="stat-img-lazyloaded" src={Menu} />
                    <div class="custom-values">
                      <div class="row-align">
                        <p>{customer}</p> <span>%</span>
                      </div>
                      <strong className="!font-[400] !font-poppins !text-xl">Customer Satisfaction </strong>
                    </div>
                  </div>
                  <div class="custom-box box-4">
                    <img class="stat-img-lazyloaded" src={Graph} />
                    <div class="custom-values">
                      <div class="row-align">
                        <p>{clients}</p> <span>+</span>
                      </div>
                      <strong className="!font-[400] !font-poppins !text-xl"> Happy Clients </strong>
                    </div>
                  </div>
                  <div class="custom-box box-3">
                    <img class="stat-img-lazyloaded" src={Avatar} />
                    <div class="custom-values">
                      <div class="row-align">
                        <p>{members}</p> <span>+</span>
                      </div>
                      <strong className="!font-[400] !font-poppins !text-xl">Team Members</strong>
                    </div>
                  </div>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default OurStats;
