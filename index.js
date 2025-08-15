const express = require ('express');
const app = express();
const PORT =3000;

//numeros//
const num1=9;
const num2=7;

//suma//
app.get('/', (req, res)=>{
    res.send("calculadora ")
})

app.get('/sumar', (req, res) => {
    res.send('Resultado de ' + num1 + " + " + num2 + " = " + (num1 + num2));
});

//resta//
app.get('/restar', (req, res) => {
    res.send('Resultado de ' + num1 + " - " + num2 + " = " + (num1 - num2));
});

//multiplicacion//

app.get('/multiplicar', (req, res) => {
    res.send('Resultado de ' + num1 + " * " + num2 + " = " + (num1 * num2));

});
//dividir//
app.get('/dividir', (req, res) => {
    res.send('Resultado de ' + num1 + " / " + num2 + " = " + (num1 / num2));
});

app.listen(PORT, ()=>{
    console.log ('servidor corrinedo en http://localhost:${PORT}');
});

