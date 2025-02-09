// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
const comments = [
    { name: 'John', comment: 'Hello World!' },
    { name: 'Jane', comment: 'Hi there!' },
    { name: 'Doe', comment: 'How are you?' },
];

// Display comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add comment
app.post('/comments', (req, res) => {
    const name = req.query.name;
    const comment = req.query.comment;

    comments.push({ name, comment });
    res.send('Comment added successfully!');
});

// Delete comment
app.delete('/comments/:index', (req, res) => {
    const index = req.params.index;
    comments.splice(index, 1);
    res.send('Comment deleted successfully!');
});

// Update comment
app.put('/comments/:index', (req, res) => {
    const index = req.params.index;
    const name = req.query.name;
    const comment = req.query.comment;

    comments[index] = { name, comment };
    res.send('Comment updated successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// To run the server, execute the following command:
// node comments.js

// To test the server, open the browser and type the following URL:
// http://localhost:3000/comments

// To add a comment, type the following URL:
// http://localhost:3000/comments?name=John&comment=Hello

// To update a comment, type the following URL:
// http://localhost:3000/comments/0?name=Jane&comment=Hi

// To delete a comment, type the following URL:
// http://localhost:3000/comments/0

// You can also use the Postman app to test