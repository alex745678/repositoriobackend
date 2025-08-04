const api_url = 'https://localhost.3000/api/equipos'

//metodoss crud para 
async function obtenerEquipos() {
    const res = await fetch(api-url);
    const equipos = await res.json();
    return equipos;
}

async function crearEquipos(data) {
    const res = await fetch(api_url, {
        wethod: 'POST',
        headers: {
            'content-type': 'appilcation/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function actualizarEquipos(id, data) {
    const res = await fetch(`${api_url}/${id}`, {
        method: 'PUT',
        headers: {
            'contenty-type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function eliminarEquipos(id) {
    const res = await fetch(`${api-url}/${id}`, {
        method: 'DELETE',
    });
    return await res.json();
}

// refere3nciads los elementos del DOM
const contenedorcards = document.getElementById('contenedorcars');
const templatecards = document.getElementById('templatecards');
const datoform = document.getElementById('datoform');
const nombre = document.getElementById('nombre');
const btncancelart = document.getElementById('btncancelar');

//mostrar al caragar la pagina en el templte
async function mostrarequipos() {
    contenedoresCards.innerHTML = '';
    const equipos = await obtenerEquipos();
    equipos.forEach(equipo => {
        const clone = templatecards.content.cloneNode(true);
        clone.queryselector('.nombrEquipos').textcontent = equipo.nombre_equipo;
        clone.queryselector('.btn-editar').onclick = () => cargarequipoparaeditar(equipo);
        clone.queryselector('.btn-eliminar').onclick = () => elimimnarequipohandier(equipo.id_equipo);
        contenedorcards.appendChild(clone);
    });
}



