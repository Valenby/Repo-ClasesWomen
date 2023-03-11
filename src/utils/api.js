

const fetchApi = async () => {
    try {
        const url = 'https://rickandmortyapi.com/api/character'
        const res = await fetch(url);
        const data = await res.json();
        
         const datos = data.results.map( dato => ({
            id: dato.id,
            name: dato.name,
            species: dato.species
         }))
         
         return datos;

    } catch (error) {
        console.log(error)
    }
}
module.exports = fetchApi;

