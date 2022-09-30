import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import trainman from "../../assests/images/trainman.png";
import "../../assests/styles/Common.css";
import "../login/loginStyle.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      tnumber: '',
    },
    validationSchema: Yup.object().shape({
      tnumber: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className='box_center box_container'>

        <Card max-width='xl' className='my_booking_card_bx'>
          <CardContent>
            <div className='card_bx_logo'>
              <img src={trainman} width="130px" />
            </div>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className='card_bottom'>
                  <TextField
                    name="tnumber"
                    type='number'
                    id="standard-textarea"
                    label="Mobile"
                    placeholder="Enter Mobile Number"
                    multiline
                    variant="standard"
                    fullWidth
                    {...formik.getFieldProps('tnumber')}
                  />
                  {formik.touched.tnumber && formik.errors.tnumber ? (
                    <div className='error_msg'>{formik.errors.tnumber}</div>
                  ) : null}
                  <Button className={formik.errors.tnumber != "" ? "empty_error_msg" : ""} type='submit' variant='contained'>Proceed</Button>
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

export default Login;
