const express = require('express');

const PORT = process.env.port || 8080;
const app = express();

app.get('/baitolinha', (request, response) => {
  response.send({ message: 'Mamãe sou g...' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
