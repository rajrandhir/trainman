import React, { useState } from 'react'
import { OutlinedInput, InputAdornment, FormControl, Grid, Button } from '@mui/material'
import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit';
import "react-datepicker/dist/react-datepicker.css";
import data from "../../../trains.json";


const SearchByStationTab = () => {
    const [val, setVal] = useState("");
    const handleOnchange = (e) => {
        setVal(e.target.value)
    }

    const onSearch = (searchItem) => {
        setVal(searchItem)
    }

    return (
        <>
            {/* <div className=''> */}
            {/* <div className='train_search_input_field'> */}
            <Grid container spacing={2}>
                <Grid item md={10} >
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <OutlinedInput
                            placeholder='Enter Train Name/No'
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
                                    item.name.toLowerCase().includes(val) || item.number.includes(val)
                                ) {
                                    return item
                                }
                            }).slice(0, 8)
                                .map((items, i) => (
                                    <div
                                        key={i}
                                        onClick={() => onSearch(items.name)}
                                        className='dropdown_row'>

                                        {`${items.name} ${items.number}`}
                                    </div>
                                ))
                        }



                    </div>


                    {/* </div> */}

                </Grid>
                <Grid item md={2}>
                    <Button sx={{ mt: 1, width: '100%', pt: 1.3 }} variant='contained'>Search</Button>
                </Grid>
            </Grid>

            {/* <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
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
                                    item.name.toLowerCase().includes(val) || item.number.includes(val)
                                ) {
                                    return item
                                }
                            }).slice(0, 8)
                                .map((items, i) => (
                                    <div
                                        key={i}
                                        onClick={() => onSearch(items.name)}
                                        className='dropdown_row'>

                                        {`${items.name} ${items.number}`}
                                    </div>
                                ))
                        }
                    </div>


                </div> */}



            {/* </div> */}

        </>
    )
}

export default SearchByStationTab;
