require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

const allowedOrigins = [''];

const corsOptions = {
    orgin: function (origin, clalback) {
        if (allowedOrigins.includes(origin) || !origin) {
            clalback(null, true);
        } else {
            callback(new Error('Not Allowed by CORS'));
        }
    },
    allowedOrigins: [
        'Authorization',
        'Content-Type',
    ]
};



const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());

const landlordsRouter = require('./routes/landlords');
const tenantsRouter = require('./routes/tenants');
const rentalPropertiesRouter = require('./routes/rental-properties');
const rentalLogsRouter = require('./routes/rental-logs');

app.use('/landlords', landlordsRouter);
app.use('/tenants', tenantsRouter);
app.use('/rental-properties', rentalPropertiesRouter);
app.use('/rental-logs', rentalLogsRouter);

const connectDB = require('./Connection');

connectDB(() => {
    const port = process.env.PORT || 4000;
    server.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });

})
