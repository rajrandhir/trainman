import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import trainman from "../../assests/images/trainman.png";
import "../../assests/styles/Common.css";
import "../registration/mybooking.css";
import validation from "../../../utils/validation/Validation"

const Registration = () => {
  const [value, setValue] = useState();
  const [error, setError] = useState();
  console.log()

  const sumitHandler = (e) => {
    e.preventDefault();
    console.log(validation(value))
    setError(validation(value))
    setValue(value)
  }
  return (
    <>
      <div className='box_center box_container'>

        <Card max-width='xl' className='my_booking_card_bx'>
          <CardContent>
            <div className='card_bx_logo'>
              <img src={trainman} width="130px" />
            </div>
            <div>
              <form onSubmit={sumitHandler}>
                <div className='card_bottom'>
                  <TextField
                    type='number'
                    onChange={(e) => setValue(e.target.value)}
                    id="standard-textarea"
                    label="Mobile"
                    value={value}
                    placeholder="Enter Mobile Number"
                    multiline
                    variant="standard"
                    fullWidth
                  />
                  <p className='error_msg'>{error}</p>
                  <Button type='submit' variant='contained'>Proceed</Button>
                  <div className='term_condition'><p> By logging in or signing up you are agreeing to Trainmans’s Privacy Policy &amp; Terms of Use </p></div>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Registration;
