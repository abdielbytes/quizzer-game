const express = require('express');
const cors = require('cors');
const db = require('./models'); // Import the Sequelize models

const app = express();

// Allow requests from your frontend (Vue.js) server
app.use(cors({
  origin: 'http://localhost:8080' // Replace with your frontend URL
}));

app.use(express.json());

// Your routes
app.use('/api/quizzes', require('./routes/quizzes'));

// Sync Sequelize models with the database
db.sequelize.sync()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
