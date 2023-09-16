const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
