import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

// Пример API маршрута
app.get('/api/message', (req, res) => {
    res.json({ message: 'Привет из Node.js сервера!' });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
