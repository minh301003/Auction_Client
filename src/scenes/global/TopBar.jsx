import {
  Box,
  IconButton,
  InputBase,
  Button,
  Typography,
  Grid,
  Dialog,
  TextField,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


const TopBar = () => {
  const {accountBalance, setAccountBalance} = useContext(UserContext)
  const [openLogOut, setOpenLogOut] = useState(false);
  const [openDeposit, setOpenDeposit] = useState(false);  
  const [deposit, setDeposit] = useState("");
  const handleOpenDeposit = () => {
    setOpenDeposit(true);
  };

  const handleCloseDeposit = () => {
    setOpenDeposit(false);
  };

  const handleDeposit = () => {
    const depositAmount = parseFloat(deposit);
    if (!isNaN(depositAmount)) {
      setAccountBalance(accountBalance + depositAmount);
    }
    setDeposit("");
    setOpenDeposit(false);
    toast.success("Nạp tiền thành công!");
  };

  const handleOpenLogOut= () => {
    setOpenLogOut(true);
  };

  const handleCloseLogOut = () => {
    setOpenLogOut(false);
  };

  const handleLogOut = () => {
    setOpenLogOut(false);
    toast.success("Đăng xuất thành công");
  }


  return (
    <Box style={{ display: "flex", justifyContent: "space-between" }} p={2}>
      {/* SEARCH BAR */}
      <Box display="flex" borderRadius="3px">
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Tìm kiếm" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        columnGap={2}
      >
        <Box display="flex" flexDirection="row" columnGap={1}>
          <AccountBalanceIcon />
          <Typography variant="body1" color="text.primary">
            {accountBalance} VND
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AccountBalanceWalletIcon />}
          onClick={handleOpenDeposit}
        >
          Nạp tiền
        </Button>
        <Button 
          variant="contained" 
          startIcon={<LogoutIcon />}
          onClick={handleOpenLogOut}
          >
          Đăng xuất
        </Button>
      </Grid>

      {/* DEPOSIT FORM */}
      <Dialog open={openDeposit} onClose={handleCloseDeposit}>
        <DialogTitle>Nạp tiền vào tài khoản</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nạp tiền vào tài khoản để tham gia đấu giá các sản phảm
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Số tiền"
            type="number"
            InputProps={{
              inputProps: {
                min: 10000,
                max: 10000000,
                step: 10000,
              },
            }}
            fullWidth
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeposit}>Hủy</Button>
          <Button onClick={handleDeposit}>Nạp tiền</Button>
        </DialogActions>
      </Dialog>

      {/* LOGOUT FORM */}
      <Dialog open={openLogOut} onClose={handleCloseLogOut}>
        <DialogTitle> Xác nhận</DialogTitle>
        <DialogContent>
          <Typography>
            Bạn có chắc chắn muốn kết thúc phiên đăng nhập chứ?
            </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLogOut}>Hủy</Button>
          <Button component={Link} to="/login" onClick={handleLogOut}>Đăng xuất</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TopBar;
