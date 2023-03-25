const express = require('express');

const PORT = 3000;

const app = express();

app.use(express.json());

const errorLogger = ( err, rq, res, next ) => {
    console.log(err);
    next(err);
};

const errHanlder = (err, rq, res, next) => {
    res.status(400).json({
        message: err.message,
    })
};

//creamos respuesta
app.get('/', (req, res) => {
    res.send('Esta es mi primera app en expres');
});

const comidas = [
	{
		id: 1,
		type: 'salchipapas',
		price: 10500,
	},
	{
		id: 2,
        type: 'hamburguesa',
		price: 25000,
		
	},
	{
		id: 3,
        type:'pizza',
		price: 30000,
	},
];

app.get('/api/v1/products', (req, res) => {
    res.json(comidas);
});

//recivir query parametros
app.get('/api/v1/products/:comidaId', (req, res) => {
    const {comidaId} = req.params;
    const productIdInt = parseInt(comidaId);
    const  comidaProduct = comidas.find((comidaProduct)=> comidaProduct.id ===  productIdInt )
    if (!comidaProduct){
        throw new Error('Comida Producto no encontrada');
    } 
    
    console.log(req.params);
    res.json(comidaProduct);
});

//agregar elemento
app.post('/api/v1/products', (req, res, next) => {
    console.log('hola');
    next();
    const comidaProduct = req.body;
    comidas.push(comidaProduct);
    res.json(comidas);
});

//se ejecutan en plia uno por uno
app.use(errorLogger);
app.use(errHanlder);

app.listen(PORT, ()=>{
    console.log('Puerto Escuchando jej')
})