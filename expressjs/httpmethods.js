const express = require('express')
const app = express()

// HTTP methods, also known as HTTP verbs, are actions that can be performed on a resource. These methods define the operation the client wants to perform on the server. The most common HTTP methods are:

//     GET: Retrieves data from the server.
//     POST: Submits data to be processed to the server.
//     PUT: Updates data on the server.
//     DELETE: Deletes data from the server.
//     PATCH: Partially updates data on the server.


// GET Method

// Used to request data from a specified resource.
app.get('/users', (req, res) => {
    // Retrieve list of users
    res.send('List of users');
  });

//   POST Method

// Used to submit data to be processed to a specified resource.
  app.post('/users', (req, res) => {
    // Create a new user
    res.send('User created');
  });


//   PUT Method

//   Used to update data on a specified resource.
  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Update user with userId
    res.send(`User ${userId} updated`);
  });

//   DELETE Method

// Used to delete data from a specified resource.
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Delete user with userId
    res.send(`User ${userId} deleted`);
  });


//   PATCH Method

//   Used to partially update data on a specified resource

app.patch('/users/:id', (req, res) => {
    const userId = req.params.id;
    // Partially update user with userId
    res.send(`User ${userId} partially updated`);
  });
  
app.listen(5000,()=>{
    console.log('server is running on ')
})
