import React from 'react';
import "../../pages/ticket_booking/ticketBookingStyle.css";
import CustomTab from './CustomTab';



const TicketBooking = () => {
    return (
        <>
            <div className='home_booking_container'>
                <div className="home_bookig_main">
                    <CustomTab />
                </div>
            </div>
        </>
    )
}

export default TicketBooking
