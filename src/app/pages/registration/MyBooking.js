import React from 'react';
import { Card, CardContent } from '@mui/material';
import trainman from "../../assests/images/trainman.png";
import "../../assests/styles/Common.css";
import "../registration/mybooking.css";


const Registration = () => {
  return (
    <>
      <div className='box_center'>
        {/* <div className='my_booking'>
          
          <div className='logo'>
            <img src={trainman} width="100px" />
          </div>
        </div> */}
        <Card max-width='xl' className='my_booking'>
          <CardContent>
            <img src={trainman} width="100px" />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Registration;
