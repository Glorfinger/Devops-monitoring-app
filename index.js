const express = require('express');
const client = require('prom-client');

const app = express();
const PORT = process.env.PORT || 3000;

// Crée un registre de métriques
const register = new client.Registry();

// Crée un compteur Prometheus
const counter = new client.Counter({
  name: 'api_requests_total',
  help: 'Total number of API requests',
  labelNames: ['method', 'route', 'status']
});

// Enregistre le compteur dans le registre
register.registerMetric(counter);
register.setDefaultLabels({ app: 'node-app' });
client.collectDefaultMetrics({ register });

// Route principale instrumentée
app.get('/', (req, res) => {
  res.send('API OK');

  counter.inc({
    method: req.method,
    route: req.route.path,
    status: res.statusCode
  });
});

// Endpoint Prometheus
app.get('/metrics', async (req, res) => {
  res.setHeader('Content-Type', register.contentType);
  res.end(await register.metrics());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/fail', (req, res) => {
  res.status(500).send('Internal Server Error');
});
