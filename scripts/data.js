let btnMujer = document.getElementById('btnMujer');
let btnHombre = document.getElementById('btnHombre');

const getCalzado = async (url) =>{
    let muestraCalzado = document.querySelector(".mostrar-categorias")
    muestraCalzado.innerHTML = '';
    const resp = await fetch(url);
    const data = await resp.json();
    data.forEach(calzado => {
        const {imagen,nombre,precio} = calzado;
        muestraCalzado.innerHTML += `
        <div class="col mascotas">             
                <img src="${imagen}" class="card-img" alt="...">
                <div class="card-img-overlay">
                        <h5 class="card-title body2Bold">${nombre}</h5>
                        <p class="card-text body2Regular">${precio}</p>
                </div>
            </div>
        </a>
    </div>
        `
    });
}

btnMujer.addEventListener('click', () => {
    getCalzado('http://localhost:3800/Dama');
})

btnHombre.addEventListener('click', () => {
    getCalzado('http://localhost:3000/Caballero');
})
