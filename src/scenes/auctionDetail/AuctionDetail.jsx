import { Box, Card, CardContent, CardMedia, Typography, Button, Grid, TextField } from '@mui/material';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AuctionDetail = () => {
    //get data
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
   
    return (
      <Box m="20px">
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
                      Mức giá cao nhất: {currentHighestBid}
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
                      <TextField label="Nhập mức giá" variant="standard" />
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                      >
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