import express from 'express';

const app = express(); 

app.get('/api/alumnos', (req, res) => {
    const alumnos = ["Óscar Cruañas", "Satenik Avetisyan", 
    "Santiago Fernández", "Joan Puig", "Nil Marquéz", "Quim Palleres", "Arnau Gil", 
    "Nico Vehí", "Ivan Vallejo", "Pol Mauri", "Paul Aznar", "Oriol Foncuberta", 
    "Adrià Usón", "Pol Cubo", "Nahomy Argueta", "Denis Podovei" ];
    
    res.json( {
        nombres: alumnos,
        total: alumnos.length
    });

});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});