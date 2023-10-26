import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, TextField } from '@mui/material';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { ToastContainer , toast } from "react-toastify";
import { UserContext } from "../../context/UserContext";

const AuctionDetail = () => {
    //fetch data
    const [auctions, setAuctions] = useState([]);
    useEffect(() => {
      (async () => {
        const fetchData = await fetch(
          "https://65373b0ebb226bb85dd2f407.mockapi.io/auctions"
        );
        const auctions = await fetchData.json();
        setAuctions(auctions);
      })();
    }, []);

    //find ID
    const {auctionId} = useParams();
    const thisAuction = auctions.find((auction) => auction.id === auctionId)
    const {name, description, imageUrl, currentHighestBid, remainingTime} = thisAuction || {};
   
    const {accountBalance, setAccountBalance} = useContext(UserContext)
    const [bid, setBid] = useState('');
    
    const handlePlaceBid = () => {
      const newBid = parseFloat(bid);
      if (!isNaN(newBid)) {
        if (newBid <= parseFloat(currentHighestBid)) {
          toast.warning("Số tiền đấu giá phải lớn hơn mức đấu giá hiện tại!")
        } else if (newBid > parseFloat(accountBalance)) {
          toast.warning("Số tiền trong tài khoản không đủ, vui lòng nạp thêm!")
        } else {
          setAccountBalance(accountBalance - newBid);
          setBid("");
          thisAuction.currentHighestBid = newBid;
          toast.success("Đặt tiền đấu giá thành công!");
        }
      }
      
    };
    return (
      <Box m="20px">
        <ToastContainer theme="colored" position="top-center"></ToastContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header
            title="Thông tin đấu giá"
            subtitle="Thông tin chi tiết của sản phẩm đấu giá"
          />
        </Box>
        <Card>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CardMedia
                component="img"
                height="200"
                image={imageUrl}
                title={name}
                sx={{ maxWidth: "100%", minHeight: 500 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <CardContent>
                <Grid container rowSpacing={5}>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="body1" color="text.secondary">
                      Thời gian còn lại: {remainingTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Typography variant="h6" color="text.primary">
                      Mức giá cao nhất: {currentHighestBid} VND
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Grid
                      container
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      columnGap={2}
                    >
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
                        value={bid}
                        onChange={(e) => setBid(e.target.value)}
                      />
                      <Button variant="contained" color="primary" size="large" onClick={handlePlaceBid}>
                        Đấu giá
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      </Box>
    );
};
export default AuctionDetail;