import { useState, useEffect } from "react";
import { Typography, Button, Container, Grid, Card, CardContent } from "@mui/material";
import { fetchClients, deleteClient } from "../../api/clients";
import { useNavigate } from "react-router-dom";

const Clients = () => {
  const [clients, setClients] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const loadClients = async () => {
      try {
        const fetchedClients = await fetchClients();
        setClients(fetchedClients);
      } catch (error) {
        console.error("Error loading clients:", error);
      }
    };

    loadClients();
  }, []);

  const handleAddClient = () => {
    navigate("/clients/add");
  };

  const handleEditClient = (clientId) => {
    navigate(`/clients/edit/${clientId}`);
  };

  const handleDeleteClient = async (clientId) => {
    const confirmed = window.confirm("Ar tikrai norite ištrinti klientą?");
    if (confirmed) {
      try {
        await deleteClient(clientId);
        const updatedClients = clients.filter((client) => client._id !== clientId);
        setClients(updatedClients);
      } catch (error) {
        console.error("Error deleting client:", error);
      }
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Renginių registracijos
      </Typography>
      <Button variant="contained" color="primary" onClick={handleAddClient} style={{ marginBottom: '16px' }}>
        Pridėti registraciją
      </Button>
      <Grid container spacing={2}>
        {clients.map((client) => (
          <Grid item key={client._id} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">{`${client.name} ${client.lastName}`}</Typography>
                <Typography variant="body1">{`El. paštas: ${client.email}`}</Typography>
                <Typography variant="body1">{`Amžius: ${client.age}`}</Typography>
                <Typography variant="body1">{`Renginys: ${client.event}`}</Typography>
                <div style={{ marginTop: '8px' }}>
                  <Button variant="contained" color="primary" onClick={() => handleEditClient(client._id)} style={{ marginRight: '8px' }}>
                    Redaguoti
                  </Button>
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteClient(client._id)}>
                    Ištrinti
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Clients;
