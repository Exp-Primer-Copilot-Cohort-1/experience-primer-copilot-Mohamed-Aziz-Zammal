// Create web server express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const comments = require('./comments.json');

// Path: /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Path: /comments/:id
app.get('/comments/:id', (req, res) => {
    const id = req.params.id;
    const comment = comments.find(comment => comment.id === parseInt(id));
    if (!comment) {
        res.status(404).json({ message: 'Comment not found' });
    } else {
        res.json(comment);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

