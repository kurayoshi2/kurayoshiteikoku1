const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB接続
mongoose.connect('mongodb://localhost:27017/kurayoshiteikoku', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// シンプルなルート
app.get('/', (req, res) => {
    res.send('Hello, Kurayoshiteikoku!');
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
