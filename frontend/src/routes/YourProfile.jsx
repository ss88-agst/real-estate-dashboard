import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import axios from "axios";

const BASE_URL = "localhost:3001";

const cards = [1];

const YourProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = React.useState({});

  const getProfileInformation = () => {
    axios.get(`http://${BASE_URL}/api/agent/${user.id}`).then(res => {
      console.log(res.data);
      setUserData(res.data);
    });
  };

  return (
    <>
      <CssBaseline />
      <main>
        <div>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Your Profile
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello! Welcome to your profile. Here you can view and edit your
              information.
            </Typography>
          </Container>
        </div>

        <Container
          maxWidth="xl"
          style={{
            padding: "20pxx 0",
          }}
        >
          <Grid container spacing={4}>
            {cards.map(() => (
              <Grid item key={Card} xs={12} sm={6} md={4}>
                <Card
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
                      Name: {userData.fname} {userData.lname}
                    </Typography>
                    <Typography>Phone: {userData.phone_num}</Typography>
                    <Typography>Email: {userData.email}</Typography>
                  </CardContent>
                  {/* <CardActions></CardActions> */}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default YourProfile;
