const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  const htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome Page</title>
      <style>
          body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #282c34;
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
          }
          .container {
              text-align: center;
              border-radius: 10px;
              padding: 40px;
              background: #20232a;
              box-shadow: 0 15px 25px rgba(0,0,0,.6);
          }
          h1 {
              font-size: 2em;
              margin: 0 0 20px;
          }
          p {
              font-size: 1.2em;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h1>Hello World!</h1>
          <p>Welcome to my professional Node.js app.</p>
      </div>
  </body>
  </html>
  `;
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
