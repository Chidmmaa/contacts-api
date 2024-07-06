const express = require('express');
const pool = require('./config/db');
const contactRoutes = require('./routes/contactsRoutes');

const app = express();
const PORT = 5001;

app.use(express.json());
app.use('/api', contactRoutes);


pool.connect()
  .then(client => {
    return client.query('SELECT NOW()')
      .then(res => {
        console.log('Database connected:', res.rows);
        client.release();
      })
      .catch(err => {
        client.release();
        console.log('Error connecting to the database:', err);
      });
  });

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});