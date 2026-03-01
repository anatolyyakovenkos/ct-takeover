require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static('.'));

app.get('/api/wallet', (req, res) => {
  res.json({
    address: process.env.SOLANA_WALLET,
    // Don't send private key to frontend in production!
    // This is just for demonstration
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
