import { Box, IconButton, InputBase, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from '@mui/icons-material/Logout';

const TopBar = () => {

    return (
      <Box style={{ display: "flex", justifyContent: "space-between" }} p={2}>
        {/* SEARCH BAR */}
        <Box display="flex" borderRadius="3px" >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Tìm kiếm" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>

        <Button variant="contained" startIcon={<LogoutIcon />}>
            <Typography>Đăng xuất</Typography>
        </Button>
      </Box>
    );
 
 };
 
 export default TopBar;
 
 