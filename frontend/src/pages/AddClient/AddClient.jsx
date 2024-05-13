import { useState } from "react";
import { Typography, Button, TextField, Container } from "@mui/material";
import { createClient } from "../../api/clients";
import { useNavigate } from "react-router-dom";

const NewClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    event: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data to be sent to the server:", formData); 
      await createClient(formData);
      navigate("/clients");
      alert("Client added successfully!");
    } catch (error) {
      console.error("Error adding client:", error);
      alert("Error adding client. Please try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pridėti naują registraciją
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Vardas"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Pavardė"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="El. paštas"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amžius"
          variant="outlined"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Renginio pavadinimas"
          variant="outlined"
          name="event"
          value={formData.event}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Pridėti registraciją
        </Button>
      </form>
    </Container>
  );
};

export default NewClient;
