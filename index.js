const express = require('express');
const app = express();
const PORT = 2500;

app.use(express.urlencoded({ extended: true }));

// Ruta principal con menú
app.get('/', (req, res) => {
    res.send(`
        <h1>Calculadora</h1>
        <p>Seleccione una operación con los números 10 y 20:</p>
        <ul>
            <li><a href="/1">1. Suma</a></li>
            <li><a href="/2">2. Resta</a></li>
            <li><a href="/3">3. Multiplicación</a></li>
            <li><a href="/4">4. División</a></li>
        </ul>
        <p>O puede usar parámetros en la URL, por ejemplo:</p>
        <ul>
            <li><a href="/1/15/5">/1/15/5 → Suma</a></li>
            <li><a href="/2/15/5">/2/15/5 → Resta</a></li>
            <li><a href="/3/15/5">/3/15/5 → Multiplicación</a></li>
            <li><a href="/4/15/5">/4/15/5 → División</a></li>
        </ul>
    `);
});

// Valores fijos 10 y 20
app.get('/1', (req, res) => {
    const a = 10, b = 20;
    res.send(`La suma de ${a} y ${b} es ${a + b}`);
});

app.get('/2', (req, res) => {
    const a = 10, b = 20;
    res.send(`La resta de ${a} y ${b} es ${a - b}`);
});

app.get('/3', (req, res) => {
    const a = 10, b = 20;
    res.send(`La multiplicación de ${a} y ${b} es ${a * b}`);
});

app.get('/4', (req, res) => {
    const a = 10, b = 20;
    res.send(`La división de ${a} y ${b} es ${a / b}`);
});

// Con parámetros en la URL
app.get('/1/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send(`La suma de ${num1} y ${num2} es ${parseInt(num1) + parseInt(num2)}`);
});

app.get('/2/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send(`La resta de ${num1} y ${num2} es ${parseInt(num1) - parseInt(num2)}`);
});

app.get('/3/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    res.send(`La multiplicación de ${num1} y ${num2} es ${parseInt(num1) * parseInt(num2)}`);
});

app.get('/4/:num1/:num2', (req, res) => {
    const { num1, num2 } = req.params;
    if (parseInt(num2) === 0) {
        return res.send("Error: no se puede dividir entre 0");
    }
    res.send(`La división de ${num1} y ${num2} es ${parseInt(num1) / parseInt(num2)}`);
});

// Servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor ejecutándose en http://localhost:${PORT}`);
});
