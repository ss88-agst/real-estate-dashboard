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
import axios from "axios";
import React, { useEffect } from "react";

const BASE_URL = process.env.BASE_URL || "localhost:3001";

const ClientCard = ({ client }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [contacts, setContacts] = React.useState([]);
  const [requirement, setRequirement] = React.useState([]);

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  const getContacts = () => {
    console.log("getting contacts..");
    axios
      .get(`http://${BASE_URL}/api/contact?client_id=${client.id}`)
      .then(res => {
        setContacts(res.data);
        console.log("promise fulfilled");
      });
  };

  const getRequirement = () => {
    console.log("getting requirements...");
    axios
      .get(`http://${BASE_URL}/api/requirement?client_id=${client.id}`)
      .then(res => {
        setRequirement(res.data);
        console.log("promise fulfilled");
      });
  };

  useEffect(getContacts, []);
  useEffect(getRequirement, []);

  return (
    <Card
      key={client.id}
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
          {client.fname} {client.lname}
        </Typography>
        <Typography>{client.email}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpenAdd}>
          {" "}
          View
        </Button>
        <Dialog open={openAdd} onClose={handleCloseAdd}>
          <DialogTitle>View Client</DialogTitle>
          <DialogContent>
            <CardContent
              style={{
                flexGrow: 1,
              }}
            >
              <Typography gutterBottom variant="h5">
                {client.fname} {client.lname}
              </Typography>
              <Typography>{client.email}</Typography>
              <Typography>{client.phone_num}</Typography>
              {(() => {
                if (contacts.length === 0) {
                  return <Typography>No contacts for this client.</Typography>;
                } else {
                  return (
                    <>
                      <Typography variant="h6">Contacts:</Typography>
                      {contacts.map(contact => (
                        <Contact contact={contact} key={contact.id} />
                      ))}
                    </>
                  );
                }
              })()}
              {(() => {
                if (!requirement) {
                  return (
                    <Typography>No requirements for this client.</Typography>
                  );
                } else {
                  return (
                    <>
                      <Typography variant="h6">Requirements:</Typography>
                      <Requirement
                        requirement={requirement}
                        key={requirement.id}
                      />
                    </>
                  );
                }
              })()}
            </CardContent>
          </DialogContent>
        </Dialog>
      </CardActions>
    </Card>
  );
};

const Contact = ({ contact }) => {
  return (
    <CardContent
      style={{
        flexGrow: 1,
      }}
    >
      <Typography gutterBottom variant="h5">
        {contact.fname} {contact.lname}
      </Typography>
      <Typography>
        {contact.email}
        {contact.phone_num}
      </Typography>
    </CardContent>
  );
};

const Requirement = ({ requirement }) => {
  return (
    <CardContent
      style={{
        flexGrow: 1,
      }}
    >
      <Typography>Minimum year Built: {requirement.year_built}</Typography>
      <Typography>
        Minimum square footage:
        {requirement.sq_feet}
      </Typography>
      <Typography>
        {" "}
        Minimum number of bathrooms: {requirement.bathrooms}
      </Typography>
      <Typography>
        Minimum number of bedrooms: {requirement.bedrooms}
      </Typography>
      <Typography>
        Preferered Neightbourhood: {requirement.neighbourhood}
      </Typography>
    </CardContent>
  );
};

export default ClientCard;
