import React, { useState } from 'react'
import { OutlinedInput, InputAdornment, FormControl, Grid } from '@mui/material'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import data from "../../../data.json";


const SearchByStationTab = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [val, setVal] = useState("");

  const handleOnchange = (e) => {
    setVal(e.target.value)
  }

  const onSearch = (searchItem) => {
    setVal(searchItem)
  }

  return (
    <>
      <div className='input_field_container'>
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
            {/* {
              data.filter((item) => {
                const searchItem = val.toLowerCase();

                const searchBy = item.name.toLowerCase();
                return (
                  searchItem && searchBy.startsWith(searchItem) && searchBy !== searchItem
                );
              }
              ).slice(0, 3)
                .map((items, i) => (
                  <div
                    key={i}
                    onClick={() => onSearch(items.name)}
                    className='dropdown_row'>

                    {`${items.name} ${items.code}`}
                  </div>

                ))
            } */}
            {
              data.filter((item) => {
                if (val == "") {
                  return false
                } else if (
                  item.name.toLowerCase().includes(val) || item.code.toLowerCase().includes(val)
                ) {
                  return item
                }
              }).slice(0, 8)
                .map((items, i) => (
                  <div
                    key={i}
                    onClick={() => onSearch(items.name)}
                    className='dropdown_row'>

                    {`${items.name} ${items.code}`}
                  </div>
                ))
            }
          </div>


        </div>
        {/* <div> <SyncAltIcon /></div>

        <FormControl sx={{ m: 1, width: '30%' }} variant="outlined">
          <OutlinedInput
            type='search'
            size='small'
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment position="start"><DirectionsTransitIcon /></InputAdornment>}


          />
        </FormControl> */}


      </div>
      {/* <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </div> */}
    </>
  )
}

export default SearchByStationTab
