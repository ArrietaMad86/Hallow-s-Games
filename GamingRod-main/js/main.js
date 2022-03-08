const aplicacion = document.querySelector('.container')

const url = (`https://pokeapi.co/api/v2/pokemon/${id}/`)



fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then(res => res.json())
.then(data => {
    data.forEach(chain => {
    console.log(chain.name)
    const p = document.createElement ('p')
    p.innerHTML = chain.name
    aplicacion.appendChild(p)
});


    /*console.log(data)*/
})
.catch(err => console.log(err))