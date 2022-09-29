
import React from 'react';
import "../assests/styles/Common.css"
import { AppBar, Toolbar, styled, Container, InputBase, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import trainman from '../assests/images/trainman.png';
import { Link } from 'react-router-dom';


const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  paddingLeft: "72px !important",
  paddingRight: '72px !important',

})

const Header = () => {
  return (
    <>
      <div className='Home_header_container'>
        <div className="Home_header_wrapper">
          <AppBar position='static'>

            <StyledToolbar>
              <Link to='/'><img src={trainman} width="150px" /></Link>
              <div className='home_header_searchbx'>
                <InputBase placeholder='search..' />
              </div>
              <div className='Home_header_btn'>
                <Link to='/mybooking'>My Bookings</Link>
                <Link to='/'>Login In</Link>
              </div>
            </StyledToolbar>

          </AppBar>
        </div>
      </div>
    </>
  )
}

export default Header;
