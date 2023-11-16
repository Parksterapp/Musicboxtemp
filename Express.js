const express = require('express');
const app = express();

// Import the route files
const usersRoutes = require('./routes/api/users');
const artistsRoutes = require('./routes/api/artists');
const albumsRoutes = require('./routes/api/albums');
const songsRoutes = require('./routes/api/songs');
const eventsRoutes = require('./routes/api/events');
const authRoutes = require('./routes/auth');

// Use the route files in your Express app
app.use('/api/users', usersRoutes);
app.use('/api/artists', artistsRoutes);
app.use('/api/albums', albumsRoutes);
app.use('/api/songs', songsRoutes);
app.use('/api/events', eventsRoutes);
app.use('/auth', authRoutes);

// Additional middleware and configurations

// Start the Express app
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
