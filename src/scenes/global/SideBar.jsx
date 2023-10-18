import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
const Item = ({ title, to, icon, selected, setSelected }) => {
  return (
    <MenuItem
      active={selected === title}

      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography color="#8ba1b7">{title}</Typography>
 
    </MenuItem>
  );
};

const themes = {
  sidebar: {
    backgroundColor: "#ffffff",
    color: "#0098e5",
  },
  
};
const SideBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("AuctionList");
    return (
      <Sidebar collapsed={isCollapsed}
      rootStyles={{
        backgroundColor: themes.sidebar.backgroundColor,
        color: themes.sidebar.color,

      }}>
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "#0098e5",        
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="h5" fontWeight="Bold">
                  Fish Auction
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center" >
                <Typography variant="h6" color="#8ba1b7" fontWeight="Bold">UserName</Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography color="#8ba1b7" fontWeight="Bold" sx={{ m: "15px 0 5px 20px" }}>Danh mục</Typography>
            <Item
              title="Danh sách đấu giá"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Đăng bán đấu giá"
              to="/createAuction"
              icon={<AddModeratorIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    );

};

export default SideBar;

