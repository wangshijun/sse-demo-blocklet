const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();
const port = process.env.BLOCKLET_PORT || 3000;

app.use(compression());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '../public')));

app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('X-Accel-Buffering', 'no');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders(); // Important to flush headers

  // Send an event every second
  let count = 0;
  const timer = setInterval(() => {
    res.write(`data: ${count}\n\n`); // Note the double newline
    count++;

    // !!! IMPORTANT !!!
    res.flush();
  }, 1000);

  res.on('close', function () {
    clearInterval(timer)
  });
});

app.listen(port, () => {
  console.log(`Server Sent Events app listening at http://localhost:${port}`);
});
