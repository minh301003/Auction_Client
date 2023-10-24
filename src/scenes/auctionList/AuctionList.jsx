import { Box, Grid } from "@mui/material";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import CustomAuction from "../../components/CustomAuction";


const AuctionList = () => {
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

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Danh sách đấu giá"
          subtitle="Danh sách những sản phẩm trên sàn đấu giá"
        />
      </Box>
      <Grid container spacing={4}>
        {auctions.map((item, index) => (
          <Grid item xs={3} key={index}>
            <CustomAuction
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              currentHighestBid={item.currentHighestBid}
              remainingTime={item.remainingTime}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AuctionList;