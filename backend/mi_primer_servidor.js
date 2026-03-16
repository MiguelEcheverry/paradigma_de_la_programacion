const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Hola mundo');
});     
app. get('/json', (req, res) => {
    res.json({ message: 'hola mundo ' });

});
app.get('/datos', (req, res) => {
    res.json({
        nombre: "Santy", 
        apellido: "osorno",
        edad: 56,
        institucion: "PCJIC"
    });
});
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});

//qesestosanty

