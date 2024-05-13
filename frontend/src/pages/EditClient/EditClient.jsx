import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Button, TextField, Container } from "@mui/material";
import { fetchClientById, updateClient } from "../../api/clients";

const EditClient = () => {
  const { id } = useParams();
  const [client, setClient] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    event: ""
  });

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const fetchedClient = await fetchClientById(id);
        setClient(fetchedClient);
      } catch (error) {
        console.error("Error fetching client:", error);
      }
    };

    fetchClientData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClient(id, client);
      window.location.href = "/clients";
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Redaguoti klientą
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Vardas"
          variant="outlined"
          fullWidth
          value={client.name}
          onChange={handleChange}
          style={{ marginBottom: '15px' }} 
        />
        <TextField
          name="lastName"
          label="Pavardė"
          variant="outlined"
          fullWidth
          value={client.lastName}
          onChange={handleChange}
          style={{ marginBottom: '15px' }} 
        />
        <TextField
          name="email"
          label="El. paštas"
          variant="outlined"
          fullWidth
          value={client.email}
          onChange={handleChange}
          style={{ marginBottom: '15px' }} 
        />
        <TextField
          name="age"
          label="Amžius"
          variant="outlined"
          fullWidth
          type="number"
          value={client.age}
          onChange={handleChange}
          style={{ marginBottom: '15px' }} 
        />
        <TextField
          name="event"
          label="Renginys"
          variant="outlined"
          fullWidth
          value={client.event}
          onChange={handleChange}
          style={{ marginBottom: '15px' }} 
        />
        <Button type="submit" variant="contained" color="primary">
          Atnaujinti
        </Button>
      </form>
    </Container>
  );
};

export default EditClient;
