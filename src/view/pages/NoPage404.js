import React from 'react'
import {Box} from "@mui/material"
import PageNotFound from "../../assets/images/page-not-found.svg"


function NoPage404() {
  return (
    <Box className="bg-gradient-to-b from-[#0E51CD] to-[#29BCF1] h-screen flex justify-center items-center">
       <img src={PageNotFound} className='w-[60%] h-[60%]' alt='...'/>
    </Box>
  )
}

export default NoPage404