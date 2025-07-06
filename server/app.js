require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('./config/db_connection');
const PORT = process.env.PORT || 3000;
const { handleRedirect } = require('./controllers/urlController');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));


const authRoutes = require('./routes/auth.routes');
const urlRoutes = require('./routes/url.routes');
app.use('/api/auth', authRoutes);
app.use('/api/url', urlRoutes);
app.get('/:ShortId', handleRedirect);



app.listen(PORT);