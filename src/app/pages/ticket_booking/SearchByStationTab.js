import React, { useContext, useState, useEffect } from 'react'
import { OutlinedInput, InputAdornment, FormControl, Grid, TextField, Button } from '@mui/material'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import "react-datepicker/dist/react-datepicker.css";
import data from "../../../data";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useNavigate } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppContext } from './Context/Context';
import dayjs from 'dayjs';

const SearchByStationTab = () => {
  let tomorrow = dayjs().startOf('month').add(2, 'day').format("ddd, D MMM YYYY");

  let dayAfter = dayjs().startOf('month').add(3, 'day').format("ddd, D MMM YYYY");
  const {
    val,
    setVal,
    value,
    setValue,
    searStation,
    setSearchStation,
    seatAvailability,
    setSeatAvailability } = useContext(AppContext);

  const navigate = useNavigate();

  // increase 1 day from today
  const handleTomorrow = (e) => {
    e.preventDefault();
    setValue(tomorrow)
  }
  //// increase 2 day from today
  const handleAfterTomorrow = (e) => {
    e.preventDefault();
    setValue(dayAfter)
  }
  //input handler change
  const handleOnchange = (e) => {
    let fieldVal = e.target.value
    setVal(fieldVal)
  }

  //when click the suggestion search row, row text will be set on state
  const onSearch = (e, searchItem) => {
    e.preventDefault();
    setVal(searchItem);
  }


  //Get search details on the basis of name and Code

  const getSearchDetails = (val) => {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].name == val) {
        arr.push(data[i]);
      }
    }
    setSeatAvailability(arr)
    console.log(arr)
  }

  const swapFunction = () => {
    if (val != '' && searStation != '') {
      setVal(searStation)
      setSearchStation(val)
    }
  }
  //all search field is not empty then redirect to searchdetails page
  const stationSearchHandler = (e) => {
    if (val != '' && searStation != '') {
      getSearchDetails(val);
      navigate('/searchdetails')
    } else {
      alert('plz fill the empty field!!')
    }
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={5} md={3}>
          <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              onChange={handleOnchange}
              placeholder='Enter From Station'
              type='search'
              size='small'
              value={val}
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

                  < div
                    key={i}
                    onClick={(e) => onSearch(e, items.name)}
                    className='dropdown_row'>

                    {`${items.name} --${items.code} `}
                  </div>
                ))
            }
          </div>
        </Grid>
        <Grid item> <div className='arrow_icon_wrapper'><SyncAltIcon onClick={swapFunction} className='arrow_icon' /></div></Grid>
        <Grid item xs={10} sm={5} md={3}>
          <FormControl sx={{ mt: 1, width: '100%' }} variant="outlined">
            <OutlinedInput
              placeholder='Enter To Station'
              type='search'
              size='small'
              value={searStation}
              onChange={(e) => setSearchStation(e.target.value)}
              startAdornment={<InputAdornment position="start"><DirectionsTransitIcon /></InputAdornment>}
            />
          </FormControl>
          <div className='dropdown_bx'>

            {
              data.filter((item) => {
                if (searStation == "") {
                  return false
                } else if (
                  item.name.toLowerCase().includes(searStation) || item.code.toLowerCase().includes(searStation)
                ) {
                  return item;
                }
              }).slice(0, 8)
                .map((items, i) => (
                  <div
                    key={i}
                    onClick={() => setSearchStation(items.name)}
                    className='dropdown_row'>

                    {`${items.name} --${items.code}`}
                  </div>
                ))
            }
          </div>
        </Grid>
        <Grid item sm={5} md={1.5}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              className='date_picker'
              inputFormat="ddd, D MMM YYYY"
              openTo="day"
              views={['year', 'month', 'day']}
              value={value}
              minDate={dayjs()}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField size='small'{...params} sx={{ m: 1, width: '100%' }} />}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sm={1.5} md={1}>
          <Button size="medium" onClick={handleTomorrow} className={value == tomorrow ? 'active' : 'tomorrow_btn'}>{`${tomorrow.replace(',', ' ').slice(3, 11)}`}<br />tomorrow</Button>
        </Grid>
        <Grid item sm={1.5} md={1}>
          <Button size="medium" onClick={handleAfterTomorrow} className={value == dayAfter ? 'active' : 'tomorrow_btn'}>{`${dayAfter.replace(',', ' ').slice(3, 11)}`}<br />day after</Button>
        </Grid>
        <Grid item sm={1.5} md={1.7}>
          <Button variant='contained' onClick={stationSearchHandler} size="medium" className='search_btn'>Search</Button>
        </Grid>
      </Grid>

    </>
  )
}

export default SearchByStationTab
