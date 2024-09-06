const express = require("express");
const app = express();
const port = 3002;

app.use(express.json()); // Para analizar los JSON recibidos

// Ruta para actualizar la ubicación
app.post("/update-location", (req, res) => {
    const { lat, lng } = req.body;
    console.log("Ubicación recibida:", lat, lng);

    // Aquí puedes guardar la ubicación en la base de datos o hacer algo con ella
    res.json({ message: "Ubicación actualizada con éxito" });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
