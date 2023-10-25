const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

// Serve the static files from the build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Define a catch-all route to handle React routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});