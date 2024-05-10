const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());


const clientRoutes = require("./routes/clientRoutes");


app.use("/clients", clientRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
