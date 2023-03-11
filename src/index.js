// const isOdd = require('is-odd');
// console.log(isOdd(3))

const fs = require('fs');
const path = require('path');

// const readFile = async() => {
//     try {
//         const filePath = path.resolve(`${__dirname}/archivo.txt`);
//         const data = await fs.promises.readFile(filePath, 'utf-8');
//         console.log(data);
//     }catch (error) {
//         console.log(error);
//     }
// }
// console.log('jejjejeje')
// readFile();


// const writeFilej = async(texto) =>{
//     try {
//        const filePath = path.resolve(`${__dirname}/archivo2.txt`);
//          await fs.promises.writeFile(filePath, texto );
//     }catch (error) {
//         console.log(error);
//     }
// }
// writeFilej('jejejjej')


//api
const fetchApi = require('./utils/api')
fetchApi().then(res => {
    console.log(res)
});
