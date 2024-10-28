const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/PionerosStartUp')
    .then(() => console.log('Conectado correctamente a MongoDB'))
    .catch(error => {
        console.error('Error al conectar a MongoDB:', error);
        process.exit(1);
    }
    )


const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true },
    contrasena: { type: Number, required: true}
}, { timestamps: true });

const usuario = mongoose.model('usuario', usuarioSchema);

app.get('/api/usuario', async (req, res) => {
    try {
        const usuario = await usuario.find();  // Buscar todos los usuarios
        res.status(200).json(usuario);  // Responder con los usuarios
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios' });
    }
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});