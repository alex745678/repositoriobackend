const api_url = 'http://localhost:3000/api/equipos';

async function obtenerEquipos() {
    const res = await fetch(api_url);
    const equipos = await res.json();
    return equipos;
}

async function crearEquipos(data) {
    const res = await fetch(api_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function actualizarEquipos(id, data) {
    const res = await fetch(`${api_url}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}

async function eliminarEquipos(id) {
    const res = await fetch(`${api_url}/${id}`, {
        method: 'DELETE',
    });
    return await res.json();
}

// Referencias al DOM
const contenedorCards = document.getElementById('contenedorcards');
const templatecards = document.getElementById('templatecards');
const datoform = document.getElementById('datoform');
const nombre = document.getElementById('nombre');
const btncancelar = document.getElementById('btncancelar');
const id_equipo = document.getElementById('id_equipo');

// Mostrar equipos
async function mostrarequipos() {
    contenedorCards.innerHTML = '';
    const equipos = await obtenerEquipos();
    equipos.forEach(equipo => {
        const clone = templatecards.content.cloneNode(true);
        clone.querySelector('.nombreEquipos').textContent = equipo.nombre_equipo;
        clone.querySelector('.btn-editar').onclick = () => cargarequipoparaeditar(equipo);
        clone.querySelector('.btn-eliminar').onclick = () => eliminarEquipohandler(equipo.id_equipo);
        contenedorCards.appendChild(clone);
    });
}

// Guardar o actualizar
datoform.onsubmit = async (e) => {
    e.preventDefault();
    const data = { nombre_equipo: nombre.value };
    if (id_equipo.value) {
        await actualizarEquipos(id_equipo.value, data);
    } else {
        await crearEquipos(data);
    }
    datoform.reset();
    id_equipo.value = '';
    mostrarequipos();
};

// Cancelar edición
btncancelar.onclick = () => {
    datoform.reset();
    id_equipo.value = '';
};

// Cargar equipo para editar
function cargarequipoparaeditar(equipo) {
    id_equipo.value = equipo.id_equipo;
    nombre.value = equipo.nombre_equipo;
}

// Eliminar equipo
async function eliminarEquipohandler(id) {
    await eliminarEquipos(id);
    mostrarequipos();
}

mostrarequipos();
