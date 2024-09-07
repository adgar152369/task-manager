const { connectToDB } = require('./db/connect');
const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.static('./public'))

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await connectToDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port: ${port}`);
        });
    } catch (err) {
        console.error(err);
    }
}

start();