let formulario = document.getElementById('formulario');
let btnTelefono = document.getElementById('btnTelefono');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

window.addEventListener('DOMContentLoaded', async () => {

    document.getElementById('id').style.display = 'none';
    document.getElementById('label-edit').style.display = 'none';
})

formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

let name = document.getElementById('name').value;
let lastName = document.getElementById('lastName').value;
let email = document.getElementById('email').value;
let telefono = document.getElementById('telefono').value;
let producto = document.getElementById('producto').value;
let img = document.getElementById('img').value;
  
    let resp = await fetch('http://localhost:3600/usuarios',{
        method: 'POST',
        body: JSON.stringify({
            nombre: name,
            apellido: lastName,
            correo: email,
            celular: telefono,
            producto: producto,
            imagen:img
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data) 
})

btnTelefono.addEventListener('click', async () => {
    document.getElementById('id').style.display = 'block';
    document.getElementById('label-edit').style.display = 'block';
    let telefono = document.getElementById('telefono').value;
    document.getElementById('telefono').readOnly = true;

    let resp = await fetch('http://localhost:3600/usuarios');
    let data = await resp.json();
    console.log(data);
    let modificar = data.find(user => user.celular=== telefono)
    const {nombre, apellido, correo, celular,producto,imagen, id} = modificar;
    console.log(nombre, apellido, correo, telefono, id);
    document.getElementById('name').value = nombre;
    document.getElementById('lastName').value = apellido;
    document.getElementById('email').value = correo;
    document.getElementById('telefono').value = celular;
    document.getElementById('id').value = id;
    document.getElementById('producto').value = producto;
    document.getElementById('img').value =imagen;
})

btnEditar.addEventListener('click', async() => {
    let idModificar = document.getElementById('id').value;
    let nameMod = document.getElementById('name').value;
    let lastNameMod = document.getElementById('lastName').value;
    let emailMod = document.getElementById('email').value;
    let telefonoMod = document.getElementById('telefono').value;
    let productoMod = document.getElementById('producto').value;
    let imgMod = document.getElementById('img').value;
  
    let resp = await fetch(`http://localhost:3600/usuarios/${idModificar}`, {
        method: 'PUT',
        body: JSON.stringify({
            id: idModificar,
            nombre: nameMod,
            apellido: lastNameMod,
            correo: emailMod,
            celular: telefonoMod,
            producto: productoMod,
            imagen:imgMod
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }) 
    let data = resp.json();
    console.log(data); 
})

btnEliminar.addEventListener('click', async() => {

    let idModificar = document.getElementById('id').value;
    let resp = await fetch(`http://localhost:3600/usuarios/${idModificar}`,{
        method: 'DELETE',
    })
   let data = resp.json();
    console.log(data); 
})