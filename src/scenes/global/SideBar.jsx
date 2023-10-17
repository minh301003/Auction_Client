import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from "react-router-dom";



const SideBar = () => {
    
    return (
        <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#13395e',
                color: '#b6c8d9',
              },
            },
          }}
        >
          <MenuItem component={<Link to="/" />}> Danh sách đấu giá</MenuItem>
          <MenuItem component={<Link to="/createAuction" />}> Đăng bán đấu giá</MenuItem>
        </Menu>
      </Sidebar>
   );

};

export default SideBar;

