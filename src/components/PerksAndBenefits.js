import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PaidLeave from "../assets/images/paid-leave.png";
import LeaveEnchashment from "../assets/images/leave-encashment.png";
import Fule from "../assets/images/fuel.png";
import BIannualincrement from "../assets/images/bi-annual.png";
import MonthlyBonnus from "../assets/images/monthly-bonus.png";
import workHome from "../assets/images/work-home.png";
import AdvanceSalary from "../assets/images/advance-salary.png";
import PersonalLoan from "../assets/images/personal-loan.png";
import InternationlTour from "../assets/images/international-tour.png";
import NationalTour from "../assets/images/national-tour.png";
import Birthday from "../assets/images/birthday-celeb.png";
import Monthlydinner from "../assets/images/monthly-dinner.png";
import WeeklyRefreshment from "../assets/images/weekly-refreshment.png";
import workAnniversary from "../assets/images/work-anniversery.png";
import flexibletiming from "../assets/images/flexible-time.png";
import Vehiclepolicy from "../assets/images/vehicle-policy.png";

function PerksAndBenefits() {
  return (
    <>
      <Box className="container  sm:max-w-full xsm:max-w-full xxs:max-w-full xxxs:max-w-full py-10">
        <Box className="block text-center pb-10">
          <Typography
            className="capitalize !text-3xl !font-[poppins] !font-[500] text-center"
            variant="h2"
            component={"h2"}
            gutterBottom
          >
            Our&nbsp;<span className="text-ersPrimary">Perks & Benefits</span>
          </Typography>
        </Box>
        <Box className="w-[80%] max-w-full mx-auto mt-8">
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE]  to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={PaidLeave}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins] capitalize"
              >
                paid leave
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={LeaveEnchashment}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Leave Encashment
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img src={Fule} className="object-cover w-[40%] hover:scale-125" alt="..." />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Fuel Allowance
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={BIannualincrement}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Bi-Annual Increments
              </Typography>
            </Grid>
            {/* ====================== */}
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={MonthlyBonnus}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Monthly Bonus
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={workHome}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Work from Home
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img src={AdvanceSalary} className="object-cover w-[40%] hover:scale-125 " alt="..." />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Advance Salary
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={PersonalLoan}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
               Personal Loans
              </Typography>
            </Grid>

            {/* ====================== */}
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={InternationlTour}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                International Tours
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={NationalTour}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Bi Annual National Tours
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img src={Birthday} className="object-cover w-[40%] hover:scale-125" alt="..." />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Birthday Celebrations
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={Monthlydinner}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Monthly Dinner
              </Typography>
            </Grid>
            {/* ============================== */}
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={WeeklyRefreshment}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Weekly Refreshment
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={workAnniversary}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
Work Annivarsary celebrations
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img src={flexibletiming} className="object-cover w-[40%] hover:scale-125" alt="..." />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Flexible Timings
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <Box className="h-[100px] w-[100px] bg-gradient-to-b from-[#27B4EE] to-[#115DCE] flex items-center justify-center rounded-[50px] shadow-xl mx-auto mb-4">
                <img
                  src={Vehiclepolicy}
                  className="object-cover w-[40%] hover:scale-125"
                  alt="..."
                />
              </Box>
              <Typography
                variant="h6"
                component={"h6"}
                display={"block"}
                gutterBottom
                className="text-center !text-base  !font-[400] !font-[poppins]  capitalize"
              >
                Vehicle Ownership Program
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PerksAndBenefits;
