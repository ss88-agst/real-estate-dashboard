import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const ListingCard = ({ listing }) => {
  const [openAdd, setOpenAdd] = React.useState(false);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <Card
      key={listing.id}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        style={{
          flexGrow: 1,
        }}
      >
        <Typography gutterBottom variant="h5">
          {listing.street_number} {listing.unit_number} {listing.street_name}{" "}
          {listing.city} {listing.postal_code}
        </Typography>
        <Typography>Bedrooms: {listing.bedrooms}</Typography>
        <Typography>Bathrooms: {listing.bathrooms}</Typography>
        <Typography>Asking Price: ${listing.asking_price} </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpenAdd}>
          {" "}
          View
        </Button>
        <Dialog open={openAdd} onClose={handleCloseAdd}>
          <DialogTitle>View Listing</DialogTitle>
          <DialogContent>
            <CardContent
              style={{
                flexGrow: 1,
              }}
            >
              
              <Typography>
                Listing Date: {listing.listing_date.substring(0, 10)}
              </Typography>
              <Typography>Total square footage: {listing.sq_feet}</Typography>
              <Typography>
                {" "}
                Address: {listing.street_number} {listing.unit_number}{" "}
                {listing.street_name}
                {", "}
                {listing.city} {listing.postal_code}
              </Typography>
              <Typography>Asking price: {listing.asking_price}</Typography>
              <Typography>
                Strata cost per month: {listing.strata_cost_per_month}
              </Typography>
              <Typography>Parking Description: {listing.parking}</Typography>
              <Typography>Number of bedrooms: {listing.bedrooms}</Typography>
              <Typography>Number of bathrooms: {listing.bathrooms}</Typography>
              <Typography>Neightbourhood: {listing.neighbourhood}</Typography>
              <Typography>Yard description: {listing.yard}</Typography>
              <Typography>Year built: {listing.year_built}</Typography>
            </CardContent>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
};

export default ListingCard;
