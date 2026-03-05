const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


// -------------------
// Prediction API
// -------------------
app.post("/api/analyze", async (req, res) => {

  try {

    const response = await axios.post("http://localhost:5000/predict", {
      stock: req.body.stock
    });

    res.json(response.data);

  } catch (error) {

    console.error(error.message);

    res.status(500).json({ error: "Prediction failed" });

  }

});


// -------------------
// Stock Chart API
// -------------------
app.get("/api/stock-data/:stock", async (req, res) => {

  try {

    const response = await axios.get(
      `http://localhost:5000/stock-data/${req.params.stock}`
    );

    res.json(response.data);

  } catch (error) {

    res.status(500).json({ error: "Stock data fetch failed" });

  }

});



// Sentiment
app.get("/api/sentiment-data/:stock", async (req, res) => {

  try {

    const response = await axios.get(
      `http://localhost:5000/sentiment-data/${req.params.stock}`
    );

    res.json(response.data);

  } catch (error) {

    console.error(error.message);

    res.status(500).json({ error: "Sentiment fetch failed" });

  }

});

app.listen(4000, () => {
  console.log("Node server running on port 4000");
});