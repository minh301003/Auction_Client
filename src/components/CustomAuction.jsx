import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';


const CustomAuction = ({ id, name, imageUrl, currentHighestBid, remainingTime}) => {
  return (
    <Link style={{ textDecoration: 'none'}} to={`/auction/${id}`}>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea>
          <CardMedia component="img" height="200" image={imageUrl} />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="text.primary"
            >
              {name}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {currentHighestBid} VND
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Remaining time: {remainingTime}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button variant="contained" color="primary" sx={{ width: "50%" }}>
            Đấu giá
          </Button>
        </CardActions>
      </Card>
    </Link>
  );
}

export default CustomAuction;