// initializing express..
const express = require('express');
const app = express();

// http GET requet
app.get('/api/people', (req, res) => {
    res.send([
        'Naimul',
        'Antora',
        'Zakir'
    ]);
});

const port = process.env.PORT || 3000; // environment variable
app.listen(port, () => console.log(`Server running on port ${port}`));