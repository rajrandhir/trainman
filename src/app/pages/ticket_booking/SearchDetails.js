import { Box, Card, CardContent, Grid, Paper } from '@mui/material';
import React, { useContext } from 'react';
import "./ticketBookingStyle.css"
import { AppContext } from './Context/Context';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { IconButton } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';

const SearchDetails = () => {
    const { val, value, searStation, seatAvailability } = useContext(AppContext);
    return (
        <>
            <div className="search_detail_container">
                <Paper elevation={3} className='search_detail_paper'>
                    <h4 className='search_detail_title'>{`${val} Jn to ${searStation} train Seat Availability & Fare`}</h4>
                    <Grid container spacing={3}>
                        <Grid item md={4}>
                            <div className='card_bx'>
                                <p>HOWRAH - RANCHI Shatabdi Express</p>
                                <p>Date: {value}</p>
                                <div className='left_card_bx'>
                                    <h4>{val}</h4>
                                    <h4><SyncAltIcon /></h4>
                                    <h4>{searStation}</h4>
                                </div>
                                <div className='search_details_icon_bx'>
                                    <span><IconButton><AirlineSeatReclineExtraIcon className='search_details_icon' /></IconButton></span>
                                    <span><IconButton><LocationOnIcon className='search_details_icon' /></IconButton></span>
                                </div>
                            </div>

                        </Grid>
                        <Grid item md={8}>
                            <Grid container spacing={1}>

                                {
                                    seatAvailability?.map((item, i) => {
                                        console.log(item)
                                        return (
                                            <>
                                                <Grid item md={3}>
                                                    <div className='card_bx'>
                                                        <div className='train_available_coach' style={{ backgroundColor: 'bule' }}>
                                                            <p>{item.coach}</p>
                                                            <p>Rs. {item.fare}</p>
                                                        </div>
                                                        <div className='chance_bx'>
                                                            <p className='seat_birth'>{item.birth} <span><ReplayIcon className='seat_birth_icon' /></span></p>
                                                            <p className='chance'>{item.probability}</p>
                                                        </div>
                                                        <div className='book_button'>
                                                            <button type='text'>Book</button>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            </>
                                        )
                                    }



                                    )
                                }


                                {/* <Grid item md={3}>
                                    <div className='card_bx'>
                                        <div className='train_available_coach' style={{ backgroundColor: 'bule' }}>
                                            <p>2A</p>
                                            <p>Rs. 1600</p>
                                        </div>
                                        <div className='chance_bx'>
                                            <p className='sit_birth'>RLWL6 <span><ReplayIcon className='sit_birth_icon' /></span></p>
                                            <p className='chance'>72% Chance</p>
                                        </div>
                                        <div className='book_button'>
                                            <button type='text'>Book</button>
                                        </div>
                                    </div>
                                </Grid> */}
                                {/* <Grid item md={3}>
                                    <div className='card_bx'>
                                        <div className='train_available_coach' style={{ backgroundColor: 'bule' }}>
                                            <p>2A</p>
                                            <p>Rs. 1600</p>
                                        </div>
                                        <div className='chance_bx'>
                                            <p className='sit_birth'>RLWL6 <span><ReplayIcon className='sit_birth_icon' /></span></p>
                                            <p className='chance'>72% Chance</p>
                                        </div>
                                        <div className='book_button'>
                                            <button type='text'>Book</button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className='card_bx'>
                                        <div className='train_available_coach' style={{ backgroundColor: 'bule' }}>
                                            <p>2A</p>
                                            <p>Rs. 1600</p>
                                        </div>
                                        <div className='chance_bx'>
                                            <p className='sit_birth'>RLWL6 <span><ReplayIcon className='sit_birth_icon' /></span></p>
                                            <p className='chance'>72% Chance</p>
                                        </div>
                                        <div className='book_button'>
                                            <button type='text'>Book</button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item md={3}>
                                    <div className='card_bx'>
                                        <div className='train_available_coach' style={{ backgroundColor: 'bule' }}>
                                            <p>2A</p>
                                            <p>Rs. 1600</p>
                                        </div>
                                        <div className='chance_bx'>
                                            <p className='sit_birth'>RLWL6 <span><ReplayIcon className='sit_birth_icon' /></span></p>
                                            <p className='chance'>72% Chance</p>
                                        </div>
                                        <div className='book_button'>
                                            <button type='text'>Book</button>
                                        </div>
                                    </div>
                                </Grid> */}
                            </Grid>
                        </Grid>


                    </Grid>
                </Paper>

            </div>
        </>
    )
}

export default SearchDetails;
