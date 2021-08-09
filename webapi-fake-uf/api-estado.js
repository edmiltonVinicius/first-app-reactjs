const express = require('express');
const app = express();
const cors = require("cors")

app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: "Tudo ok por aqui!" });
})

app.get('/estados', (req, res) => {
    const ufs = [
        { id: 1, uf: 'RS' }, { id: 2, uf: 'SC' }, { id: 3, uf: 'PR' }// coloque os demais estados
    ]
    res.json(ufs);
})

app.listen(3030, () => console.log("Servidor escutando na porta 3030..."))
