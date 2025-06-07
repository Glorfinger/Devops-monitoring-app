import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // 10 utilisateurs simultanés
  duration: '30s', // pendant 30 secondes
};

export default function () {
  http.get('http://localhost:3000/');           // 200
  http.get('http://localhost:3000/fail');       // 500 Internal Server Error
  http.get('http://localhost:3000/invalide');   // 404 Not Found
  sleep(1);
}
