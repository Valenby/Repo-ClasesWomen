const http = require('http');

const HOST = 'localhost';
const PORT = 8000;

const writeHTMLResponse = (res, htmlCode) => {
    res.setHeader('content-type', 'text/html');
    res.writeHead(200);
    res.end(htmlCode);
}

const serverUwu = http.createServer((req, res) =>{
    const url = req.url;
    console.log('URL es', url);
    {
        url === '/other'
        ? writeHTMLResponse(res, '<p>esta es otra ruta</p>')
        : writeHTMLResponse(res, '<p>JEJEJEJEJE html</p>')
    }
//     if (url === '/other' ){
//         writeHTMLResponse(res, '<p>esta es otra ruta</p>');
//     }else {
//         writeHTMLResponse(res, '<p>JEJEJEJEJE html</p>');
//     }
 });



serverUwu.listen( PORT,HOST, () => {
    console.log(`servidor corriendo en http://${HOST}:${PORT}`);
})