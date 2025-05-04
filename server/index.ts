import express from "express";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

// Serve front-end static files in production
// app.use(express.static(path.join(__dirname, "../public")));
app.use(express.json());

// Test Hello API endpoint
app.get('/api/hello', (_req, res) => {
  res.status(200);
  res.send({ message: 'Hello from Express!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
