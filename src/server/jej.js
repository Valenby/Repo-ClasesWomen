const http = require('http');

const HOST = 'localhost';
const PORT = 8000;

//funcion que arma resp.
const writeHTMLResponse = (res, htmlCode) => {
    res.setHeader('content-type', 'text/html'); //header info extra para las peticiones y asi 
    res.writeHead(200);                        //cliente y servidor se comunican entre si.
    res.end(htmlCode); 
}

const writeJSONResponse = (res, json) => {
	res.setHeader("Content-Type", "application/json");
	res.writeHead(200);
	res.end(JSON.stringify(json));
};

const champions = [
	{
		name: "lux",
		type: 'mago-mid',
		price: 6300,
	},
	{
		name: "miss fortune",
        type: 'tirador-adc',
		price: 6000,
		
	},
	{
		name: "teemo",
        type:'mago-top',
		price: 6200,
	},
];

//crea servidor.
const serverUwu = http.createServer( async(req, res) =>{ //libreria dnetro de http (createServer)
    const url = req.url;
    let body = "";
    console.log('URL es', url);

    await req.on("data", (chunk) => {
		body += chunk;
	});
   
    if (url === '/other' ){
        writeHTMLResponse(res, '<p>esta es otra ruta</p>');
    } else if ("/api/v1/champions/") {
		const method = req.method;
		console.log("Method", method);
		if (method === "GET") {
			// Do something
			writeJSONResponse(res, champions);
		} else if (method === "POST") {
			const product = JSON.parse(body);
			champions.push(product);
			writeJSONResponse(res, champions);
		} else if (method == "DELETE") {
			const productInformation = JSON.parse(body);
			const productName = productInformation.name;
			if (productName) {
				const indexOfProduct = champions.findIndex(
					(product) => product.name === productName
				);
				console.log("indexOfProduct", indexOfProduct);
				if (indexOfProduct !== -1) {
					champions.splice(indexOfProduct, 1);
				}
			}
			writeJSONResponse(res, champions);
		}
	} else {
		writeHTMLResponse(res, "<p> codigo HTML </p>");
	}
 });



serverUwu.listen( PORT,HOST, () => {
    console.log(`servidor corriendo en http://${HOST}:${PORT}`);
})