import { useState } from "react";
import { Typography, Button, TextField, Container } from "@mui/material";
import { createClient } from "../../api/clients";

const NewClient = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    event: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createClient(formData);
      // Jei norite nukreipti vartotoją į kitą puslapį po kliento pridėjimo,
      // galite naudoti navigacijos metodą iš React Router, pavyzdžiui, useNavigate
      // navigate("/clients");
      alert("Client added successfully!");
    } catch (error) {
      console.error("Error adding client:", error);
      alert("Error adding client. Please try again.");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Add New Client
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Age"
          variant="outlined"
          name="age"
          value={formData.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Event"
          variant="outlined"
          name="event"
          value={formData.event}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Client
        </Button>
      </form>
    </Container>
  );
};

export default NewClient;
