const { ObjectId } = require("mongodb");
const express = require("express");
require("dotenv").config();

const router = express.Router();
const client = require("../config/db");


router.get("/", async (req, res) => {
  try {
    const data = await client
      .db("myDB")
      .collection("clients")
      .find()
      .toArray();
    res.send(data);
  } catch (error) {
    console.error("Error fetching clients:", error);
    return res.status(500).send({ error });
  }
});


router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await client
      .db("myDB")
      .collection("clients")
      .findOne({ _id: ObjectId(id) });
    if (!data) {
      return res.status(404).send({ message: "Client not found" });
    }
    res.send(data);
  } catch (error) {
    console.error("Error fetching client:", error);
    return res.status(500).send({ error });
  }
});


router.post("/", async (req, res) => {
  try {
    const { name, lastName, email, age, event } = req.body;
    const result = await client
      .db("myDB")
      .collection("clients")
      .insertOne({ name, lastName, email, age, event });
    res.send(result.ops[0]);
  } catch (error) {
    console.error("Error creating client:", error);
    return res.status(500).send({ error });
  }
});


router.put("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { name, lastName, email, age, event } = req.body;
      const result = await client
        .db("myDB")
        .collection("clients")
        .updateOne(
          { _id: ObjectId(id) },
          { $set: { name, lastName, email, age, event } } 
        );
    if (result.modifiedCount === 0) {
      return res.status(404).send({ message: "Client not found" });
    }
    res.send({ message: "Client updated successfully" });
  } catch (error) {
    console.error("Error updating client:", error);
    return res.status(500).send({ error });
  }
});

// Delete a client by ID
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await client
      .db("myDB")
      .collection("clients")
      .deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount === 0) {
      return res.status(404).send({ message: "Client not found" });
    }
    res.send({ message: "Client deleted successfully" });
  } catch (error) {
    console.error("Error deleting client:", error);
    return res.status(500).send({ error });
  }
});

module.exports = router;
