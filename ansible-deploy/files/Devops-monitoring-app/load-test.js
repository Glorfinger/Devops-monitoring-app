import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10, // utilisateurs virtuels
  duration: '30s', // durée totale du test
};

export default function () {
  const payload = JSON.stringify({
    title: `Tâche ${Math.floor(Math.random() * 10000)}`
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post('http://localhost:3000/tasks', payload, params);

  check(res, {
    'status is 201': (r) => r.status === 201,
  });

  sleep(1); // pause entre deux requêtes
}
