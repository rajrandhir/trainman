import React, { useState } from 'react'
import { OutlinedInput, InputAdornment, FormControl, Grid, TextField, Button } from '@mui/material'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import "react-datepicker/dist/react-datepicker.css";
import data from "../../../data.json";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Stack, style } from '@mui/system';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



const styles = {
  root: {
    "flex-direction": "row-reverse"
  }
}

const SearchByStationTab = () => {
  const [val, setVal] = useState("");
  const [value, setValue] = React.useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };


  const handleOnchange = (e) => {
    setVal(e.target.value)
  }

  const onSearch = (searchItem) => {
    setVal(searchItem);
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item md={3}>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              type='search'
              size='small'
              value={val}
              onChange={handleOnchange}
              startAdornment={<InputAdornment position="start"><DirectionsTransitIcon /></InputAdornment>}

            />

          </FormControl>
          <div className='dropdown_bx'>

            {
              data.filter((item) => {
                if (val == "") {
                  return false
                } else if (
                  item.name.toLowerCase().includes(val) || item.code.toLowerCase().includes(val)
                ) {
                  return item;
                }
              }).slice(0, 8)
                .map((items, i) => (
                  <div
                    key={i}
                    onClick={() => onSearch(items.name)}
                    className='dropdown_row'>

                    {`${items.name} --${items.code}`}
                  </div>
                ))
            }
          </div>
        </Grid>
        <Grid item> <div className='arrow_icon_wrapper'><SyncAltIcon className='arrow_icon' /></div></Grid>
        <Grid item md={3}>
          <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              type='search'
              size='small'
              value={val}
              onChange={handleOnchange}
              startAdornment={<InputAdornment position="start"><DirectionsTransitIcon /></InputAdornment>}
            />
          </FormControl>
        </Grid>
        <Grid item md={1.5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className='date_picker'
              disableFuture
              openTo="year"
              views={['year', 'month', 'day']}
              value={value}
              InputProps={{
                classes: { root: style.root }
              }}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField size='small'{...params} sx={{ m: 1, width: '100%' }} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={1}>
          <Button variant='contained' size="large" style={{ m: 1, width: "100%" }}>date</Button>
        </Grid>
      </Grid>

      {/* <div className='input_field_container'>
        <div className=''>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              type='search'
              size='small'
              value={val}
              onChange={handleOnchange}
              startAdornment={<InputAdornment position="start"><DirectionsTransitIcon /></InputAdornment>}

            />

          </FormControl>

          <div className='dropdown_bx'>

            {
              data.filter((item) => {
                if (val == "") {
                  return false
                } else if (
                  item.name.toLowerCase().includes(val) || item.code.toLowerCase().includes(val)
                ) {
                  return item;
                }
              }).slice(0, 8)
                .map((items, i) => (
                  <div
                    key={i}
                    onClick={() => onSearch(items.name)}
                    className='dropdown_row'>

                    {`${items.name} --${items.code}`}
                  </div>
                ))
            }
          </div>


        </div>
        <div className='arrow_icon_wrapper'> <SyncAltIcon className='arrow_icon' /></div>
      </div> */}
    </>
  )
}

export default SearchByStationTab
