const express = require('express');
const app = express();
const PORT = 30000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to G-Printing Shop');
});

app.get('/info', (req, res) => {
  res.json({
    shopName: "G-Printing Shop",
    owner: "Giselle Dinglasan",
    contact: "0951-068-5465",
    location: "Brgy. 11 Lucena City",
    acceptsGCash: true
  });
});

app.get('/services', (req, res) => {
  res.json([
    "Document Printing",
    "Photocopying",
    "Scanning",
    "Lamination",
    "Ring Binding"
  ]);
});

app.get('/pricing', (req, res) => {
  res.json({
    currency: "PHP",
    rates: {
      blackAndWhite: 2.00,
      coloredShort: 5.00,
      coloredLong: 7.00
    },
    binding: {
      soft: 45.00,
      ring: 60.00
    }
  });
});

app.get('/products', (req, res) => {
  res.json([
    { id: 1, item: "Short Bond Paper Ream", price: 220 },
    { id: 2, item: "Long Bond Paper Ream", price: 250 },
    { id: 3, item: "Clear Folder", price: 15 }
  ]);
});

app.get('/hours', (req, res) => {
  res.json({
    weekdays: { open: "7:30 AM", close: "6:00 PM" },
    saturday: { open: "8:00 AM", close: "3:00 PM" },
    sunday: "Closed"
  });
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});